# FlowSync Landing Page

A modern, responsive SaaS landing page built with React, TypeScript, and Tailwind CSS.

## 🚀 Project Structure

```
FlowSync Landing Page/
├── index.html              # Original HTML file (separated)
├── styles.css              # Original CSS file (separated)
├── script.js               # Original JavaScript file (separated)
├── react-app/              # React application
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
├── setup-react.bat         # Windows setup script
└── setup-react.sh          # Unix setup script
```

## 🛠️ Features

### Original HTML/CSS/JS Version
- ✅ Separated HTML, CSS, and JavaScript files
- ✅ Modular and organized code structure
- ✅ Enhanced JavaScript functionality with modal system
- ✅ Form validation and user interactions
- ✅ Smooth scrolling and animations
- ✅ Mobile-responsive design

### React Version
- ✅ Modern React with TypeScript
- ✅ Component-based architecture
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ React Hook Form for form handling
- ✅ React Hot Toast for notifications
- ✅ Intersection Observer for scroll animations
- ✅ Custom hooks for reusable logic
- ✅ Utility functions for common tasks

## 🚀 Getting Started

### Option 1: Use the Original HTML/CSS/JS Version

1. Open `index.html` in your browser
2. The CSS and JS files are automatically linked
3. All features are working including:
   - Modal popups for trials, demos, and contact
   - Form validation
   - Smooth scrolling navigation
   - Interactive pricing toggle
   - Responsive mobile menu

### Option 2: Set up the React Version

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

#### Quick Setup (Windows)
```bash
# Run the setup script
setup-react.bat
```

#### Quick Setup (Unix/Mac)
```bash
# Make the script executable
chmod +x setup-react.sh

# Run the setup script
./setup-react.sh
```

#### Manual Setup
```bash
# Navigate to the react-app directory
cd react-app

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 🎨 Features Breakdown

### Interactive Elements

#### 1. Navigation
- Fixed header with scroll effects
- Mobile hamburger menu with smooth animations
- Smooth scrolling to sections
- Active section highlighting

#### 2. Hero Section
- Animated product mockup
- Call-to-action buttons with hover effects
- Floating background elements
- Responsive design

#### 3. Features Section
- Three-step process explanation
- Icon-based feature cards
- Hover animations
- Scroll-triggered animations

#### 4. Pricing Section
- Interactive monthly/yearly toggle
- Three pricing tiers
- Popular plan highlighting
- Dynamic price calculations with savings display

#### 5. Testimonials
- Customer testimonials with star ratings
- Statistics counter animations
- Responsive grid layout
- Real customer avatars

#### 6. Call-to-Action
- Gradient background
- Multiple action buttons
- Trust indicators
- Responsive design

#### 7. Footer
- Organized link sections
- Company information
- Social proof elements

### Working Functionalities

#### Modal System
- **Free Trial Modal**: Collects user information to start trial
- **Demo Modal**: Video demonstration with scheduling form
- **Contact Sales Modal**: Lead generation form with validation

#### Form Features
- Real-time validation
- Error messaging
- Success notifications
- Field highlighting
- Mobile-friendly inputs

#### Interactive Features
- Pricing calculator (monthly/yearly)
- Smooth page navigation
- Mobile menu with overlay
- Loading states for buttons
- Toast notifications
- Progress indicators

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** for form handling
- **React Hot Toast** for notifications
- **React Intersection Observer** for scroll effects

### Build Tools
- **Create React App** for project setup
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance Features

- Lazy loading for images
- Optimized animations with `framer-motion`
- Efficient state management
- Debounced form inputs
- Optimized bundle size

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  'primary': '#6366f1',      // Indigo
  'secondary': '#8b5cf6',    // Purple
  'accent': '#06b6d4',       // Cyan
  'light-blue': '#f0f9ff',   // Light blue background
  'light-violet': '#faf5ff'  // Light violet background
}
```

### Content
All content can be easily modified in the respective component files:
- Hero content: `src/components/Hero.tsx`
- Features: `src/components/Features.tsx`
- Pricing: `src/components/Pricing.tsx`
- Testimonials: `src/components/Testimonials.tsx`

### Animations
Animation settings can be adjusted in the `tailwind.config.js` file under the `animation` and `keyframes` sections.

## 📦 Build for Production

```bash
# Create production build
npm run build

# The built files will be in the 'build' directory
```

## 🌟 Key Features Implementation

### 1. Modal System
Each modal is triggered by custom events:
```javascript
// Trigger trial modal
const event = new CustomEvent('openTrialModal');
window.dispatchEvent(event);
```

### 2. Form Validation
Real-time validation with visual feedback:
```typescript
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

### 3. Pricing Toggle
Dynamic price calculation:
```typescript
const handlePricingToggle = (isYearly: boolean) => {
  // Calculate yearly prices with 20% discount
  const yearlyPrice = Math.floor(monthlyPrice * 12 * 0.8);
};
```

### 4. Smooth Scrolling
Custom scroll implementation:
```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 64;
    const targetPosition = element.offsetTop - navHeight - 20;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};
```

## 🎨 Design System

### Typography
- Headers: Bold, modern font stack
- Body text: Clean, readable typography
- Interactive elements: Semi-bold emphasis

### Color Palette
- Primary: Indigo (#6366f1)
- Secondary: Purple (#8b5cf6)
- Accent: Cyan (#06b6d4)
- Neutral: Gray scale for text and backgrounds

### Spacing
- Consistent 8px grid system
- Generous whitespace for readability
- Responsive spacing adjustments

## 🚀 Deployment

The project can be deployed to:
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the build output
- **AWS S3**: Upload build files to S3 bucket

## 📄 License

This project is created for portfolio purposes. Feel free to use it as a reference or starting point for your own projects.

## 👨‍💻 Author

**Christian Buena**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub URL]
- LinkedIn: [Your LinkedIn URL]

---

*This landing page demonstrates modern web development practices with React, TypeScript, and Tailwind CSS, featuring a complete user experience with working forms, animations, and responsive design.*
