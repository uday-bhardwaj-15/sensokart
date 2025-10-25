// app/api/sanity/upload/route.ts
import { NextResponse } from 'next/server'
import { serverClient } from '@/lib/mainclient' // make sure this exports a Sanity client with write token

// helper: stream -> buffer (Node readable stream)
async function streamToBuffer(readable: ReadableStream | any) {
  // If it's a Web/WHATWG ReadableStream, convert via getReader
  if (typeof (readable as ReadableStream).getReader === 'function') {
    const reader = (readable as ReadableStream).getReader()
    const chunks: Uint8Array[] = []
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (value) chunks.push(value)
    }
    // concat
    let totalLength = 0
    for (const c of chunks) totalLength += c.length
    const result = new Uint8Array(totalLength)
    let offset = 0
    for (const c of chunks) {
      result.set(c, offset)
      offset += c.length
    }
    return Buffer.from(result)
  }

  // Node Readable stream fallback
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: any[] = []
    ;(readable as any).on('data', (chunk: any) => chunks.push(chunk))
    ;(readable as any).on('end', () => resolve(Buffer.concat(chunks)))
    ;(readable as any).on('error', reject)
  })
}

export async function POST(request: Request) {
  try {
    // Request should be multipart/form-data
    const formData = await request.formData()
    const files = formData.getAll('files') as File[] // browser File objects (node polyfilled by next)
    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 })
    }

    const assets: Array<{ _id: string; url?: string }> = []

    for (const file of files) {
      // In Node/Next, a File has .stream() or .arrayBuffer()
      // Convert to buffer:
      let buffer: Buffer
      if (typeof (file as any).stream === 'function') {
        const stream = (file as any).stream()
        buffer = await streamToBuffer(stream)
      } else {
        // fallback: arrayBuffer (works in many environments)
        const ab = await (file as any).arrayBuffer()
        buffer = Buffer.from(ab)
      }

      // Upload to Sanity. serverClient.assets.upload accepts a stream or buffer.
      // Provide a filename
      const filename = (file as any).name || `upload-${Date.now()}.jpg`

      // Use upload method. If this call complains about types, adjust to your Sanity client version.
      // The upload returns an asset document. We'll store its _id.
      // @ts-ignore
      const result = await serverClient.assets.upload('image', buffer, { filename })

      // result should include _id and url
      assets.push({ _id: result._id || result.document?._id || result.asset?._ref, url: result.url || result.asset?.url })
    }

    return NextResponse.json({ assets })
  } catch (error) {
    console.error('Upload error', error)
    return NextResponse.json({ error: 'Failed to upload images' }, { status: 500 })
  }
}
