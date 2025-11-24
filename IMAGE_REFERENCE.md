# Wavv App - Image Reference Guide

## Quick Reference

### Environment Variables (if needed for image optimization)
```env
# No additional env vars needed - using public Unsplash URLs
```

### Import the images in any component:

```typescript
import { IMAGE_ASSETS, EVENT_DATA, SAMPLE_USERS } from "@/lib/image-assets"

// Access images
const heroImage = IMAGE_ASSETS.hero.rooftop
const eventImage = IMAGE_ASSETS.events.rooftopSoiree
const userAvatar = IMAGE_ASSETS.profiles.james

// Use event data
EVENT_DATA.map(event => (
  <EventCard 
    title={event.title}
    imageUrl={event.imageUrl}
    {...event}
  />
))

// Use sample users
SAMPLE_USERS.map(user => (
  <div>
    <img src={user.imageUrl} alt={user.name} />
  </div>
))
```

## Image Categories

### 1. Hero Images
```typescript
IMAGE_ASSETS.hero.rooftop      // Rooftop party/event
IMAGE_ASSETS.hero.skyline      // City skyline
IMAGE_ASSETS.hero.nightlife    // Nightlife venue
```

### 2. Event Images  
```typescript
IMAGE_ASSETS.events.rooftopSoiree    // 🎉 Rooftop event
IMAGE_ASSETS.events.wineArt          // 🍷 Wine & art
IMAGE_ASSETS.events.techMixer        // 💻 Tech networking
IMAGE_ASSETS.events.culinary         // 🍽️ Culinary class
IMAGE_ASSETS.events.wellness         // 🧘 Wellness retreat
IMAGE_ASSETS.events.fashion          // 👗 Fashion party
```

### 3. Profile Images
```typescript
IMAGE_ASSETS.profiles.james     // James Davidson (main user)
IMAGE_ASSETS.profiles.user1     // Emma Wilson / Sarah Chen
IMAGE_ASSETS.profiles.user2     // Michael Chen / Marcus Johnson
IMAGE_ASSETS.profiles.user3     // Sophia Rodriguez / Elena Rodriguez
IMAGE_ASSETS.profiles.user4     // James Thompson / David Lee
IMAGE_ASSETS.profiles.user5     // Olivia Parker / Sophie Martin
```

### 4. Feature Images
```typescript
IMAGE_ASSETS.features.community    // Community feature
IMAGE_ASSETS.features.events       // Events feature
IMAGE_ASSETS.features.privacy      // Privacy feature
```

### 5. Dashboard Images
```typescript
IMAGE_ASSETS.dashboard.searchBg    // Search section background
IMAGE_ASSETS.dashboard.liveEventBg // Live event background
```

### 6. Default Fallbacks
```typescript
IMAGE_ASSETS.defaults.avatar       // Default user avatar
IMAGE_ASSETS.defaults.event        // Default event image
IMAGE_ASSETS.defaults.bg           // Default background
```

## Event Data Structure

Each event in `EVENT_DATA` includes:
```typescript
{
  id: number
  title: string
  date: string
  location: string
  imageUrl: string        // Pre-assigned from IMAGE_ASSETS
  category: string
  attendees: number
  premium: boolean
  description: string
}
```

## Sample Users Structure

Each user in `SAMPLE_USERS` includes:
```typescript
{
  id: number
  name: string
  role: string
  imageUrl: string        // From IMAGE_ASSETS
  bio?: string
}
```

## Using Images in Components

### Basic Image Display
```tsx
<img 
  src={IMAGE_ASSETS.profiles.james} 
  alt="User name"
  className="w-12 h-12 rounded-full object-cover"
/>
```

### Background Image
```tsx
<div 
  style={{
    backgroundImage: `url('${IMAGE_ASSETS.hero.rooftop}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  Content here
</div>
```

### With Next.js Image Component (optional)
```tsx
import Image from 'next/image'

<Image
  src={IMAGE_ASSETS.events.rooftopSoiree}
  alt="Event"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

## Current Pages Using Images

| Page | Images Used | Components |
|------|------------|-----------|
| Landing | Hero, profiles (network), testimonial | Hero section, network viz, testimonial |
| Dashboard | Dashboard backgrounds, events | Search hero, event cards, live feed |
| Events | Event images | Event grid cards |
| Profile | Banner, user avatar, events, connections | Banner, avatar, event cards, connection grid |
| Connections | User avatars | Connection cards |

## Updating Images

### To change an image, edit `lib/image-assets.ts`:

```typescript
export const IMAGE_ASSETS = {
  // Change this URL:
  events: {
    rooftopSoiree: "https://your-new-image-url.jpg",
    // ... rest of images
  }
}
```

### To add new event images:
```typescript
// In EVENT_DATA array, add:
{
  id: 7,
  title: "Your Event",
  imageUrl: IMAGE_ASSETS.events.yourNewImage,  // Add to IMAGE_ASSETS first
  // ... other properties
}
```

## Image Best Practices

1. **Size**: Keep images optimized (400-800px width)
2. **Format**: Use JPEG or WebP for photos
3. **Alt text**: Always provide descriptive alt text
4. **Lazy loading**: The browser handles this automatically
5. **Caching**: Unsplash images are cached by CDN
6. **Backup**: Fallback images in `defaults` category

## Troubleshooting

### Images not loading?
1. Check image URL is correct
2. Verify internet connection
3. Check browser console for errors
4. Ensure CORS is not blocking images (Unsplash is CORS-friendly)

### Slow image loading?
1. Use smaller resolution images
2. Compress images further
3. Consider using Next.js Image optimization
4. Add blur-up placeholder effect

### Image quality issues?
1. Use higher resolution source images
2. Ensure `bg-cover` and `object-cover` are applied
3. Check background-position for proper centering

---

For more information, see the main IMPROVEMENTS.md file.
