# Communication Advocacy Network (CAN) Website

A comprehensive website for the Communication Advocacy Network, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional design optimized for advocacy organizations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Fast Performance**: Built with Next.js 15 and Turbopack for optimal loading speeds
- **Accessibility**: Designed with accessibility best practices in mind

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── resources/         # Resources and downloads
│   ├── services/          # Services and programs
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx          # Homepage
├── components/
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections and components
│   └── ui/              # Reusable UI components (Button, Card)
├── lib/                 # Utility functions and helpers
└── types/              # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd can-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with compelling call-to-action
- Mission statement and key values
- Feature highlights with links to detailed pages
- Impact statistics
- Community testimonials section

### About (`/about`)
- Organization history and background
- Mission, vision, and values
- Leadership team profiles
- Organizational approach and methodology

### Services (`/services`)
- Comprehensive program descriptions:
  - Advocacy Training Program
  - Communication Excellence Workshop
  - Policy Development Support
  - Community Outreach Program
- Additional support services
- Program schedules and enrollment information

### Resources (`/resources`)
- Educational materials and guides
- Downloadable templates and toolkits
- Research reports and case studies
- Newsletter signup
- Resource library organized by category

### Contact (`/contact`)
- Interactive contact form with validation
- Multiple contact methods (phone, email, address)
- Office hours and location information
- Regional office listings
- Quick action buttons for scheduling consultations

## 🎨 Design System

### Colors
- **Primary Blue**: `#2563eb` (blue-600)
- **Secondary Colors**: Various blues, greens, and purples
- **Neutral Grays**: From `#f9fafb` to `#111827`

### Typography
- **Primary Font**: Geist Sans (modern, clean)
- **Monospace**: Geist Mono (for code/technical content)

### Components
- **Header**: Sticky navigation with mobile hamburger menu
- **Footer**: Comprehensive links and contact information
- **Cards**: Consistent styling for content sections
- **Buttons**: Multiple variants (primary, secondary, outline)

## 🔧 Customization

### Updating Content
1. **Navigation**: Edit `src/components/layout/Header.tsx`
2. **Footer Links**: Edit `src/components/layout/Footer.tsx`
3. **Homepage**: Edit `src/app/page.tsx`
4. **Other Pages**: Edit respective files in `src/app/[page]/page.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Inline with Tailwind classes

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file with component export
3. Update navigation links in Header component
4. Add to Footer if needed

## 🚀 Deployment

This website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Static site generation
- **AWS Amplify**: Full-stack deployment
- **Traditional Hosting**: Build and serve static files

### Environment Variables
Add the following to your `.env.local` for full functionality:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_FORM_ENDPOINT=your-form-handler-url
NEWSLETTER_API_KEY=your-newsletter-service-key
```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatible
- High contrast color ratios
- Focus indicators

## 🔍 SEO Features

- Meta titles and descriptions for each page
- Open Graph tags for social media sharing
- Structured data markup
- XML sitemap generation
- Optimized images with alt text

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Google Fonts (Geist family)
- **Build Tool**: Turbopack

## 📞 Support

For questions about this website or the Communication Advocacy Network:

- **Email**: info@cannetwork.org
- **Phone**: (555) 123-4567
- **Website**: [Your deployed URL]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for community advocacy and democratic participation.
