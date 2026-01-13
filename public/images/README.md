# Images Folder

Place all your images in this folder. Images placed here can be referenced in your Next.js components using the `/images/` path.

## Example Usage

```tsx
import Image from "next/image";

<Image
  src="/images/hero-image.png"
  alt="Description"
  width={800}
  height={600}
/>;
```

## Current Images Used

- `hero-image.png` - Hero section image (600x400 recommended)
- `section-two-image.png` - Second section image (500x400 recommended)
- `haba-logo.png` - HABA partner logo (120x60 recommended)
- `waytoplay-logo.png` - waytoplay partner logo (120x60 recommended)

## Image Optimization

Next.js automatically optimizes images placed in the `public` folder. Make sure to:

- Use appropriate file formats (WebP, PNG, JPG)
- Provide width and height attributes for better performance
- Use descriptive alt text for accessibility
