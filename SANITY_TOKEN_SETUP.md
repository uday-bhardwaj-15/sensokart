# Sanity API Token Setup Guide

## Why You Need an API Token

The Sanity API token is required for:
- Creating new content (enquiries, contacts)
- Updating existing content
- Deleting content
- Full admin functionality

## How to Get Your API Token

### Step 1: Access Sanity Dashboard
1. Go to [sanity.io](https://sanity.io)
2. Sign in to your account
3. Select your project

### Step 2: Navigate to API Settings
1. Go to **API** in the left sidebar
2. Click on **Tokens** tab
3. Click **Add API token**

### Step 3: Create Token
1. **Name**: Give it a descriptive name (e.g., "Sensokart Website")
2. **Permissions**: Select **Editor** (read/write access)
3. **Dataset**: Select your dataset (usually "production")
4. Click **Generate token**

### Step 4: Copy and Store Token
1. **Copy the token** (starts with `sk...`)
2. **Store it securely** - you won't be able to see it again
3. Add it to your `.env.local` file

## Environment Setup

Create `.env.local` in your project root:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_your_token_here
```

## Token Security

- **Never commit** the token to version control
- **Use environment variables** in production
- **Rotate tokens** regularly for security
- **Use different tokens** for different environments

## Testing Your Token

After setting up the token, test it by:
1. Submitting a contact form
2. Submitting a product enquiry
3. Checking the admin panel for new submissions

## Troubleshooting

### Token Not Working?
- Check if the token has the correct permissions
- Verify the project ID and dataset match
- Ensure the token is for the correct dataset
- Check for typos in the environment variable

### Still Having Issues?
- Try creating a new token
- Check Sanity Dashboard for any errors
- Verify your project is active and not suspended
