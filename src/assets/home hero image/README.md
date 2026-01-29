# Home Hero Background Images

## How to Add Images

1. Place your hero background images in this folder
2. Name them clearly (e.g., `hero1.jpg`, `hero2.jpg`, `hero3.jpg`)
3. Update `src/pages/Home.js` to import your images:

```javascript
// At the top of Home.js, uncomment and update these lines:
import heroImage1 from '../assets/home hero image/hero1.jpg';
import heroImage2 from '../assets/home hero image/hero2.jpg';
import heroImage3 from '../assets/home hero image/hero3.jpg';

// Update the heroImages array:
const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
];
```

## Recommended Image Specifications

- **Format**: JPG or PNG
- **Resolution**: 1920x1080 or higher (Full HD recommended)
- **Aspect Ratio**: 16:9 (landscape)
- **File Size**: Optimize to < 500KB for better performance
- **Content**: Ensure important content is centered (avoid edges due to cropping on mobile)

## Tips

- Use high-quality, relevant images that represent your NGO's work
- Images will have a dark overlay applied automatically for better text readability
- The slider will auto-play every 5 seconds (can be adjusted in Home.js)
- Users can manually navigate using the left/right arrows
