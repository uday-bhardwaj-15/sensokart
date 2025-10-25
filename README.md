# Sensokart Ecommerce Platform

A modern ecommerce platform for Sensokart.com built with Next.js, React, and Sanity CMS.

## Features

### User Features
- Product search and filtering
- Product enquiry system with WhatsApp and Email integration
- Social media sharing
- Contact form
- Responsive design

### Admin Features
- Content management via Sanity Studio
- Product management (categories, brands, products)
- Enquiry management
- Contact form submissions
- Page content management

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd senokart
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_write_token_here
```

4. Set up Sanity:
```bash
npm install -g @sanity/cli
sanity init
```

5. Run the development server:
```bash
npm run dev
```

6. Access the admin panel:
Visit `http://localhost:3000/studio` to access the Sanity Studio for content management.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   ├── studio/             # Sanity Studio
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── careers/            # Careers page
│   ├── products/           # Products page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms & conditions
│   └── refund/             # Refund policy
├── components/            # React components
├── lib/                     # Utility functions
├── sanity/                  # Sanity schemas
└── public/                  # Static assets
```

## Content Management

### Sanity Studio
Access the admin panel at `/studio` to manage:
- Products and categories
- Brands
- Homepage content
- Product enquiries
- Contact form submissions

### Content Types
- **Products**: Product information, specifications, images
- **Categories**: Product categories and subcategories
- **Brands**: Brand information and logos
- **Enquiries**: Product enquiry submissions
- **Contact**: Contact form submissions
- **Pages**: Static page content

## API Endpoints

- `POST /api/enquiry` - Submit product enquiry
- `POST /api/contact` - Submit contact form

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Your Sanity dataset (usually 'production')
- `SANITY_API_TOKEN`: Your Sanity read/write API token (get from Sanity Dashboard → API → Tokens)

## Contact Information

- **Phone**: 9494122101
- **Email**: sales@sensokart.com
- **Website**: sensokart.com

## License

This project is proprietary software for Sensokart.com