# Relume + TailwindCSS Integration

This project integrates a Relume HTML export with TailwindCSS for custom styling and optimization.

## Setup

### Installation
```bash
npm install
```

### Development
Watch mode for CSS changes:
```bash
npm run dev
```

### Production Build
Minified CSS output:
```bash
npm run build
```

### Preview
Serve the site locally:
```bash
npm run serve
# Opens at http://localhost:8080
```

## Relume + TailwindCSS Best Practices

### 1. **Custom Color Tokens**
Relume uses semantic color tokens that are mapped in `tailwind.config.js`:
- `border-primary` → Default border color
- `background-primary` → Main background (white)
- `background-alternative` → Dark backgrounds
- `text-primary` → Main text color
- `text-alternative` → Light text on dark backgrounds

### 2. **Responsive Breakpoints**
Relume follows mobile-first design:
- Default: Mobile styles
- `md:` → Tablet (768px+)
- `lg:` → Desktop (1024px+)

### 3. **Custom Spacing**
Extended spacing values for Relume components:
- `min-h-16`, `min-h-18` → Custom minimum heights
- `py-16`, `py-24`, `py-28` → Section padding

### 4. **Typography**
Custom font sizes for Relume headings:
- `text-9xl` → 7rem (Hero headings)
- `text-10xl` → 8rem (Extra large headings)
- `text-md` → 1.125rem (Body text)

### 5. **Component Classes**
Key Relume component patterns:
- `.container` → Max-width wrapper with auto margins
- `.prose` → Content typography styles
- `.rounded-button` → Button border radius
- `.rounded-image` → Image border radius

## File Structure

```
relume/
├── index.html           # Main HTML file with Relume components
├── src/
│   └── styles.css      # TailwindCSS source file
├── dist/
│   └── styles.css      # Compiled CSS output
├── tailwind.config.js   # Tailwind configuration
└── package.json        # Project dependencies
```

## Customization Tips

1. **Modify Colors**: Update color values in `tailwind.config.js`
2. **Add Components**: Extend styles in `src/styles.css` using `@layer components`
3. **Responsive Adjustments**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.)
4. **Typography**: Adjust font families and sizes in the config file

## Development Workflow

1. Make HTML changes in `index.html`
2. Add custom styles in `src/styles.css`
3. Run `npm run dev` to watch for changes
4. Test responsiveness at different breakpoints
5. Run `npm run build` for production

## CDN Alternative

For quick prototyping without build tools, you can use the TailwindCSS CDN by uncommenting the CDN script in `index.html` and commenting out the compiled stylesheet link.