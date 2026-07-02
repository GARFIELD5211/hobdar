# Saad Malik Portfolio - React + TypeScript

A modern, high-end portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- ✨ Custom cursor with trailing effect
- 💥 Click spark animations
- 🎨 Smooth scrolling with Locomotive Scroll
- 🎴 3D flip profile card
- 🧲 Magnetic 3D card effects
- 📱 Fully responsive
- ⚡ Built with Vite for fast development
- 🔷 TypeScript for type safety

## ✅ Prerequisites

- **Node.js >= 20** — required for Vite 7

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx/css
│   │   ├── Hero.tsx/css
│   │   ├── Services.tsx/css
│   │   ├── About.tsx/css
│   │   ├── Projects.tsx/css
│   │   ├── Testimonials.tsx/css
│   │   ├── FAQ.tsx/css
│   │   ├── Contact.tsx/css
│   │   ├── Footer.tsx/css
│   │   ├── CustomCursor.tsx/css
│   │   └── ClickSparks.tsx/css
│   ├── hooks/
│   │   └── useSmoothScroll.ts
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 TODO - Remaining Components

I've created the core infrastructure. You need to create these component files:

### Hero.tsx
```tsx
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" data-scroll-section>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-scroll data-scroll-speed="1">
            <div className="hero-greeting">👋 Hey there!</div>
            <h2 className="hero-name">Saad Malik</h2>
            <h1 className="hero-title">Full Stack<br/>Web Developer</h1>
            <p className="hero-subtitle">
              NERD | Student at BUIC'28 | Passionate about building innovative web solutions.
            </p>
          </div>
          <div className="hero-images" data-scroll data-scroll-speed="2">
            <div className="hero-image hero-image-1">
              <div className="hero-image-text">🚀</div>
            </div>
            <div className="hero-image hero-image-2">
              <div className="hero-image-text">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### Services.tsx
```tsx
import './Services.css';

const Services = () => {
  const services = [
    {
      number: '1.',
      title: 'Frontend Development',
      items: ['React.js & Next.js', 'Responsive UI/UX', 'Modern JavaScript', 'Tailwind CSS']
    },
    // ... add other services
  ];

  return (
    <section className="services" data-scroll-section>
      <div className="container">
        <h2 className="section-title">what I can build for you</h2>
        <p className="section-subtitle">
          As a full stack developer, I create scalable, efficient, and user-friendly web applications.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-scroll data-scroll-speed={0.5 + index * 0.1}>
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
```

Follow this pattern for:
- About.tsx (with 3D profile card)
- Projects.tsx (with tech stack scroll)
- Testimonials.tsx
- FAQ.tsx
- Contact.tsx
- Footer.tsx

## 📝 Component CSS Files

Each component needs a corresponding CSS file. Copy styles from the original HTML file and adapt them.

## 🎨 Customization

- Colors: Edit CSS variables in `src/styles/index.css`
- Fonts: Already loaded from Google Fonts
- Content: Update text in each component

## 🚢 Deployment

### Vercel
```bash
npm run build
# Deploy dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 📚 Technologies

- React 18
- TypeScript 5
- Vite 7
- Locomotive Scroll 4
- CSS3 with custom properties

## 🐛 Troubleshooting

**Cursor not showing:**
- Check browser console for errors
- Ensure `CustomCursor` component is rendered
- Try in different browser

**Smooth scroll not working:**
- Ensure `data-scroll-container` wraps all content
- Check if Locomotive Scroll is imported correctly

**Build errors:**
- Run `npm install` again
- Clear `node_modules` and reinstall
- Check TypeScript errors with `npm run build`

## 📧 Contact

For questions or issues, check the console logs or inspect elements in browser dev tools.

## 📄 License

MIT License - Feel free to use for your portfolio!