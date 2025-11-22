# Vaishnavi Saggurthi - Portfolio Website

> A clean, minimal, and modern portfolio website showcasing my journey as a Software Developer

## ✨ Features

- **🎨 Minimal Design** - Clean, professional aesthetic with subtle animations
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **🚀 Fast Performance** - Built with Next.js 14 and optimized for speed
- **🎭 Interactive Elements** - Smooth animations with Framer Motion
- **📧 Contact Form** - Functional contact form with API integration
- **📄 Resume Download** - Direct PDF download functionality
- **🏆 Certifications** - Showcase of professional certifications
- **💻 Coding Profiles** - Links to coding platform profiles

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **3D Graphics:** Three.js with React Three Fiber
- **Deployment:** Netlify

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/VaishnaviSaggurthi/portfolioWebsite.git

# Navigate to project directory
cd portfolioWebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
portfolioWebsite/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Emoji-based navigation
│   │   ├── ParticleBackground.tsx
│   │   ├── CommandNavigation.tsx
│   │   └── ProjectDetailClient.tsx
│   ├── about/              # About page
│   ├── certificates/       # Certifications showcase
│   ├── coding-profiles/    # Coding platform links
│   ├── contact/           # Contact form
│   ├── projects/          # Projects showcase
│   │   └── [id]/         # Dynamic project pages
│   ├── skills/           # Skills and technologies
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── data/
│   ├── projects.json     # Project information
│   └── contacts.json     # Contact data
├── public/
│   ├── certificates/     # Certificate PDFs
│   └── resume_vaishnavi.pdf
└── README.md
```

## 🎯 Key Sections

### 🏠 Home
- Hero section with animated typing effect
- Social media links (GitHub, LinkedIn, Email)
- Resume download button

### 👤 About
- Personal introduction and journey
- Technical expertise overview
- Professional background

### 🎓 Education
- Academic timeline with institutions
- Degree information and duration
- Visual timeline design

### 💻 Skills
- Technology stack with icons
- Programming languages and frameworks
- Tools and platforms

### 💼 Experience
- **Amazon SDE Intern** (Jun 2025 - Aug 2025)
- **IBM SkillsBuild ML Intern** (Oct 2024 - Nov 2024)
- Certificate downloads available

### 🚀 Projects
- **HUIDSN** - Gesture-based HCI system
- **Smart Study Hub** - Educational platform
- **MemorEase** - AI-powered learning tool

### 🏆 Certifications
- AWS certifications (Generative AI, ML Foundations)
- Google Cloud certifications (Gemini API, Vertex AI)
- Cisco Cybersecurity certification

### ⚡ Coding Profiles
- LeetCode, Codeforces, CodeChef, HackerRank
- Direct links to profiles

## 🎨 Design Philosophy

- **Minimal & Clean** - Focus on content over flashy effects
- **Professional** - Suitable for recruiters and employers
- **Accessible** - High contrast, readable fonts, mobile-friendly
- **Performance First** - Fast loading, optimized images

## 🚀 Deployment

### Netlify (Current)
```bash
# Build for production
npm run build

# Deploy to Netlify
# Connected to GitHub for auto-deployment
```

### Vercel Alternative
```bash
npm install -g vercel
vercel --prod
```

## 📱 Mobile Optimization

- Responsive typography scaling
- Touch-friendly navigation
- Optimized button sizes (44px minimum)
- Horizontal scroll prevention
- Reduced particle effects on mobile

## 🔧 Customization

### Update Personal Info
1. Edit `app/layout.tsx` for meta tags
2. Update social links in `app/page.tsx`
3. Replace resume in `public/resume_vaishnavi.pdf`
4. Modify project data in `data/projects.json`

### Styling Changes
1. Colors: `app/globals.css`
2. Components: Individual `.tsx` files
3. Animations: Framer Motion configurations

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Bundle Size:** Optimized with code splitting
- **Loading Speed:** < 2s on 3G networks
- **SEO Friendly:** Proper meta tags and structure

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

**Built with 💻 by Vaishnavi Saggurthi**

[Live Demo](https://vaishnavisaggurthi-portfolio.netlify.app) • [GitHub](https://github.com/VaishnaviSaggurthi) • [LinkedIn](https://linkedin.com/in/vaishnavisaggurthi)