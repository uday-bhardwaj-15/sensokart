# Sanity CMS Setup Guide

## Quick Setup

1. **Create a Sanity Project:**
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```
   - Choose "Create new project"
   - Enter project name: "sensokart"
   - Choose dataset: "production"
   - Note down your Project ID

2. **Set Environment Variables:**
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Access Studio:**
   - Visit `http://localhost:3000/studio`
   - Login with your Sanity account
   - Start adding content

## Content Types Available

- **Products**: Product catalog with specifications
- **Categories**: Product categories and subcategories  
- **Brands**: Brand information and logos
- **Enquiries**: Product enquiry submissions
- **Contact**: Contact form submissions
- **Pages**: Static page content

## Troubleshooting

If you get React context errors:
1. Make sure you have the latest Sanity packages
2. Check your Node.js version (should be 18+)
3. Try clearing node_modules and reinstalling:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Alternative Setup

If the Studio doesn't work, you can:
1. Use Sanity's hosted Studio at `https://your-project-id.sanity.studio`
2. Set up Sanity separately and just use the API
3. Use a different CMS or build a simple admin panel
