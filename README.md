# Dynamic Portfolio Website

A highly dynamic and visually unique personal portfolio website built with modern web technologies. This portfolio goes beyond a standard static site, featuring advanced animations, interactive elements, and a unique design that stands out to potential employers.

## 🌟 Unique Features

### Dynamic Design Elements
- **Custom Interactive Cursor**: Responsive cursor with visual feedback and hover effects
- **Particle Background System**: Dynamic particle system that reacts to mouse movement with connected nodes
- **Command-Line Navigation**: Innovative CLI-style navigation system (Ctrl+K to activate)
- **Glassmorphism UI**: Modern glass-effect components with backdrop blur
- **Scroll-Triggered Animations**: Smooth animations that trigger as elements enter the viewport

### Advanced Functionality
- **Project Showcase**: Each project has a dedicated page with live demos embedded via iframe
- **Interactive Resume**: Animated timeline with work experience and education
- **Dynamic Filtering**: Tag-based project filtering with smooth transitions
- **Video Previews**: Hover-to-play video demonstrations of projects
- **Responsive Design**: Fully optimized for all devices and screen sizes

### Technical Excellence
- **Performance Optimized**: High Lighthouse scores with lazy loading and code splitting
- **SEO Friendly**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Type Safety**: Full TypeScript implementation for better development experience
- **Modern Architecture**: Component-based architecture with reusable elements

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography

### Features & Libraries
- **Intersection Observer**: React Intersection Observer for scroll animations
- **Markdown Support**: React Markdown for blog functionality
- **Date Handling**: date-fns for date formatting
- **Canvas Animations**: Custom particle system with HTML5 Canvas

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript with strict mode
- **Build Tool**: Next.js built-in bundler with optimization
- **Package Manager**: npm with lock file for consistent installs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dynamic-portfolio.git
   cd dynamic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Export static files (optional)
npm run export
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   │   ├── CustomCursor.tsx
│   │   ├── ParticleBackground.tsx
│   │   └── CommandNavigation.tsx
│   ├── projects/          # Projects pages
│   │   ├── [id]/          # Dynamic project routes
│   │   └── page.tsx       # Projects listing
│   ├── about/             # About page
│   ├── blog/              # Blog functionality
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── data/                  # Static data files
│   └── projects.json      # Project information
├── public/                # Static assets
└── README.md
```

## 🎨 Customization

### Personal Information
1. Update project data in `data/projects.json`
2. Modify personal details in `app/about/page.tsx`
3. Add your resume PDF to `public/` directory
4. Update social links and contact information

### Styling
1. Modify color scheme in `tailwind.config.js`
2. Update animations in `app/globals.css`
3. Customize component styles in individual files
4. Adjust particle system parameters in `ParticleBackground.tsx`

### Content
1. Add project images/videos to `public/projects/`
2. Update meta tags in `app/layout.tsx`
3. Modify navigation commands in `CommandNavigation.tsx`
4. Add blog posts in markdown format

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### Custom Server
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js built-in image optimization
- **Lazy Loading**: Components and images load when needed
- **Caching**: Optimized caching strategies for static assets
- **Bundle Analysis**: Built-in bundle analyzer for optimization

## 🔧 Development

### Adding New Projects
1. Add project data to `data/projects.json`
2. Add project assets to `public/projects/`
3. The project will automatically appear in the projects grid

### Creating Blog Posts
1. Create markdown files in `data/blog/`
2. Include frontmatter with title, date, and tags
3. Posts will be automatically rendered with syntax highlighting

### Custom Components
1. Create new components in `app/components/`
2. Follow the existing TypeScript patterns
3. Use Framer Motion for animations
4. Implement responsive design with Tailwind CSS

## 🎯 Unique Selling Points

1. **Interactive Command Navigation**: Unique CLI-style navigation system
2. **Dynamic Particle System**: Mouse-reactive background animations
3. **Project Live Demos**: Embedded live demonstrations of projects
4. **Glassmorphism Design**: Modern, translucent UI elements
5. **Performance Optimized**: High Lighthouse scores across all metrics
6. **Fully Responsive**: Optimized for all devices and screen sizes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ and modern web technologies**
