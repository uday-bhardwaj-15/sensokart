# SENSOKART Admin Panel Setup Instructions

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=sh8xjsoh
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-here

# Sanity API Version
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

## Getting Your Sanity API Token

1. Go to your Sanity project dashboard
2. Navigate to **API** → **Tokens**
3. Create a new token with appropriate permissions (Read/Write)
4. Copy the token and replace `your-api-token-here` in your `.env.local` file

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the admin panel at: `http://localhost:3000/studio` (or the port shown in terminal)

## Features

- ✅ **Category Management** - Create, edit, delete categories and subcategories
- ✅ **Brand Management** - Add, edit, delete brands
- ✅ **Product Management** - Full product management with category/brand selection
- ✅ **Enquiry Management** - View and categorize product enquiries
- ✅ **Contact Management** - View and manage contact form submissions
- ✅ **Page Management** - Edit all website pages
- ✅ **Settings Panel** - System configuration and quick actions

## Fallback System

The admin panel includes a fallback system that uses mock data when Sanity is not available, ensuring the interface always works for demonstration purposes.

## Troubleshooting

- If you see "Missing environment variable" errors, make sure your `.env.local` file is properly configured
- If API calls fail, the system will automatically fall back to mock data
- Check the browser console for detailed error messages
