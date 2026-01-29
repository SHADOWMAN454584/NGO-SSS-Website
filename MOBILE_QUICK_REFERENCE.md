# Mobile Design Quick Reference

## 📱 Breakpoint Cheat Sheet

```css
/* Mobile First Approach */

/* Extra Small (Mobile) */
@media (max-width: 480px) { }    /* 🤳 Phones */

/* Small (Large Mobile/Tablet) */
@media (max-width: 768px) { }    /* 📱 Large Phones, Small Tablets */

/* Medium (Tablet) */
@media (max-width: 968px) { }    /* 📲 Tablets */

/* Large (Desktop) - Base Styles */
/* No media query needed */       /* 💻 Desktops */
```

## 🎯 Touch Target Sizes

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Buttons | 1rem 2.5rem | 1rem 2.5rem | 0.9rem 2rem |
| Nav Links | - | 1.2rem | 1.2rem |
| Icons | 3rem | 2.5rem | 2.5rem |
| Arrows | 60px | 45px | 40px |
| Indicators | 12px | 10px | 8px |

**Minimum Touch Target**: 40×40px

## 📐 Font Size Scale

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| H1 (Hero) | 5rem | 2.5rem | 1.8-2rem |
| H1 (Page) | 3.5rem | 2.5rem | 2rem |
| H2 | 2.5rem | 2rem | 1.8rem |
| H3 | 1.5rem | 1.3rem | 1.1-1.2rem |
| Body | 1.1rem | 1rem | 0.95rem |
| Small | 1rem | 0.95rem | 0.9rem |

## 📦 Spacing System

### Section Padding
- **Desktop**: `5rem 2rem` (80px 32px)
- **Tablet**: `4rem 1.5rem` (64px 24px)
- **Mobile**: `3rem 1rem` (48px 16px)

### Card Padding
- **Desktop**: `2.5rem` (40px)
- **Tablet**: `2rem` (32px)
- **Mobile**: `1.5rem` (24px)

### Grid Gaps
- **Desktop**: `3-4rem` (48-64px)
- **Tablet**: `2-2.5rem` (32-40px)
- **Mobile**: `1.5-2rem` (24-32px)

## 🎨 Layout Patterns

### Grid Columns
```
Desktop → Tablet → Mobile
  3col  →  2col  →  1col
  2col  →  1col  →  1col
  4col  →  2col  →  1col
```

### Stats Grid
- **Desktop**: `repeat(4, 1fr)`
- **Tablet**: `repeat(2, 1fr)`
- **Mobile**: `1fr`

### Work/Program Grid
- **Desktop**: `repeat(3, 1fr)`
- **Tablet**: `repeat(2, 1fr)` or `1fr`
- **Mobile**: `1fr`

## 🖼️ Image Sliders

### Heights
| Screen | Height |
|--------|--------|
| Desktop | 400-600px |
| Tablet | 300-350px |
| Mobile | 250px |

### Controls
- **Always visible on mobile**
- Background: `rgba(255, 251, 234, 0.95)`
- Position: `8-10px` from edges
- Size: `40×40px` minimum

## 🧭 Navigation

### Navbar Heights
| Screen | Height |
|--------|--------|
| Desktop | 80px |
| Tablet | 70px |
| Mobile | 65px |

### Mobile Menu
- Position: `fixed`
- Height: `calc(100vh - 70px)`
- Backdrop: `blur(20px)`
- Transform: `translateX(-100%)` → `translateX(0)`

## 🔘 Button Styles

### Primary Button
```css
/* Mobile */
padding: 0.9rem 2rem;
font-size: 0.95rem;
width: 100%;
max-width: 300px;

/* Desktop */
padding: 1rem 2.5rem;
font-size: 1rem;
width: auto;
```

## 📝 Form Elements

### Input Fields
- **Mobile**: 
  - Font: `0.95rem`
  - Padding: `0.9rem`
  - Full width
  
- **Desktop**:
  - Font: `1rem`
  - Padding: `1rem`
  - Width: varies by grid

## 🎭 Common Mobile Fixes

### Prevent Horizontal Scroll
```css
body {
  overflow-x: hidden;
}

.container {
  max-width: 100%;
  padding: 0 1rem;
}
```

### Remove Tap Highlight
```css
* {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
```

### Full-Width Containers
```css
@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }
  
  .hero-content {
    padding: 0 1rem;
  }
}
```

## 🎯 Priority Optimizations

### High Priority (Do First)
1. ✅ Navigation hamburger menu
2. ✅ Single column layouts
3. ✅ Touch-friendly buttons (min 40px)
4. ✅ Readable font sizes
5. ✅ No horizontal scroll

### Medium Priority
6. ✅ Image slider controls visible
7. ✅ Form input sizing
8. ✅ Card padding adjustments
9. ✅ Footer stacking
10. ✅ CTA button full-width

### Low Priority (Nice to Have)
11. ⚪ Animation speed adjustments
12. ⚪ Reduced motion queries
13. ⚪ PWA features
14. ⚪ Offline support

## 🔍 Testing Viewports

### iPhone Sizes
- iPhone SE: `375 × 667px`
- iPhone 12/13: `390 × 844px`
- iPhone 12 Pro Max: `428 × 926px`

### Android Sizes
- Small: `360 × 640px`
- Medium: `412 × 915px`
- Large: `414 × 896px`

### Tablets
- iPad: `768 × 1024px`
- iPad Pro: `1024 × 1366px`

## 🚀 Performance Tips

1. Use `transform` and `opacity` for animations
2. Avoid animating `width`, `height`, `top`, `left`
3. Use `will-change` sparingly
4. Optimize images for mobile (smaller sizes)
5. Lazy load images below the fold
6. Minimize JavaScript on mobile

## ✅ Mobile Checklist

Before deploying:
- [ ] Test on real device (not just browser DevTools)
- [ ] Verify touch targets ≥40px
- [ ] Check text readability
- [ ] Test form submission
- [ ] Verify no horizontal scroll
- [ ] Test image sliders with touch
- [ ] Check navigation menu
- [ ] Test both portrait and landscape
- [ ] Verify loading speed
- [ ] Test on slow 3G connection

---

**Quick Tip**: When in doubt, make it bigger and add more padding on mobile! 📱
