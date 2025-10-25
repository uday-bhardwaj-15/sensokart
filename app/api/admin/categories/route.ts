// app/api/categories/route.ts
import { NextRequest, NextResponse } from "next/server";
import { client, serverClient } from "@/lib/mainclient";
import { mockCategories } from "@/lib/mockData"; // keep your fallback mock data

/* ---------- GET - Fetch all categories ---------- */
export async function GET() {
  try {
    const categories = await client.fetch(
      `*[_type == "category"] | order(_createdAt desc) {
        _id,
        name,
        slug,
        description,
        parentCategory,
        isActive,
        _createdAt,
        _updatedAt
      }`
    );
    return NextResponse.json(categories || []);
  } catch (error) {
    console.error("Error fetching categories:", error);
    // fallback to mock data if needed
    return NextResponse.json(mockCategories);
  }
}

/* ---------- POST - Create new category ---------- */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, description, parentCategory, isActive = true } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: "name and slug are required" }, { status: 400 });
    }

    const categoryDoc = {
      _type: "category",
      name,
      slug,
      description,
      parentCategory: parentCategory || null,
      isActive,
    };

    try {
      const result = await serverClient.create(categoryDoc);
      return NextResponse.json(result, { status: 201 });
    } catch (err: any) {
      console.error("Create failed:", err);
      const message = (err?.message || String(err)).toString();
      if (message.includes("Insufficient permissions")) {
        return NextResponse.json({ error: "Insufficient permissions: write token missing/invalid" }, { status: 403 });
      }
      return NextResponse.json({ error: "Failed to create category", details: message }, { status: 500 });
    }
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}

/* ---------- PUT - Update category ---------- */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { _id, name, slug, description, parentCategory, isActive } = body;

    if (!_id) {
      return NextResponse.json({ error: "_id is required to update" }, { status: 400 });
    }

    try {
      const patch = serverClient.patch(_id).set({
        ...(name !== undefined ? { name } : {}),
        ...(slug !== undefined ? { slug } : {}),
        ...(description !== undefined ? { description } : {}),
        parentCategory: parentCategory || null,
        ...(isActive !== undefined ? { isActive } : {}),
      });

      const result = await patch.commit();
      return NextResponse.json(result);
    } catch (err: any) {
      console.error("Update failed:", err);
      const message = (err?.message || String(err)).toString();
      if (message.includes("Insufficient permissions")) {
        return NextResponse.json({ error: "Insufficient permissions to update." }, { status: 403 });
      }
      return NextResponse.json({ error: "Failed to update category", details: message }, { status: 500 });
    }
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
  }
}

/* ---------- DELETE - Delete category ---------- */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
    }

    try {
      await serverClient.delete(id);
      return NextResponse.json({ success: true });
    } catch (err: any) {
      console.error("Delete failed:", err);
      const message = (err?.message || String(err)).toString();
      if (message.includes("Insufficient permissions")) {
        return NextResponse.json({ error: "Insufficient permissions to delete." }, { status: 403 });
      }
      return NextResponse.json({ error: "Failed to delete category", details: message }, { status: 500 });
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
