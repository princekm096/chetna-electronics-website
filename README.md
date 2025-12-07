# Chetna Electronics Website

A professional, responsive website for Chetna Electronics - a leading security and electronics solutions provider in Allahabad, operating since 2002.

## About

This website showcases Chetna Electronics' services including professional CCTV installation, monitoring, security system rentals, and maintenance services. The site features a modern design with smooth animations, mobile responsiveness, and an integrated contact form.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth scroll animations and transitions
- **Service Showcase**: Detailed sections highlighting security solutions and services
- **Contact Form**: Integrated EmailJS contact form for customer inquiries
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Scroll Animations**: Intersection Observer API for elegant scroll-based animations
- **Statistics Counter**: Animated statistics showcasing business achievements

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- EmailJS for contact form functionality
- Font Awesome icons

## Project Structure

```
chetna-electronics-website/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet
├── script.js               # JavaScript functionality
├── config.example.js       # EmailJS config template (committed)
├── config.js               # EmailJS credentials (gitignored, create from example)
├── EMAIL_SETUP_GUIDE.md    # EmailJS configuration guide
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chetna-electronics-website
   ```

2. **Configure EmailJS** (for contact form functionality)
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Copy the example config file and add your credentials:
     ```bash
     cp config.example.js config.js
     ```
   - Edit `config.js` and replace the placeholders with your actual EmailJS credentials:
     - `publicKey`: Your EmailJS public key
     - `serviceId`: Your EmailJS service ID
     - `templateId`: Your EmailJS template ID
   - **Important**: `config.js` is gitignored and will not be committed to version control
   - See `EMAIL_SETUP_GUIDE.md` for detailed instructions

3. **Run the website**
   - Simply open `index.html` in your web browser, or
   - Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js http-server (install globally first: npm install -g http-server)
     http-server
     ```

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select the branch (usually `master` or `main`) and root folder
4. Click Save
5. Your site will be available at `https://yourusername.github.io/repository-name/`

### Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Deploy

### Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy

## Customization

To customize the website for your needs:

1. **Content**: Edit `index.html` to update text, services, and contact information
2. **Styling**: Modify `styles.css` to change colors, fonts, and layout
3. **Functionality**: Update `script.js` to add or modify interactive features
4. **Colors**: The main color scheme is defined in CSS variables in `styles.css`:
   - Primary Color: `#1a2b4a` (Dark Blue)
   - Secondary Color: `#e63946` (Red)
   - Accent Color: `#f77f00` (Orange)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact

For inquiries about Chetna Electronics services:
- Email: info@chetnaelectronics.com
- Visit the website and use the contact form

## License

This project is proprietary and confidential. All rights reserved by Chetna Electronics.

---

Built with care for Chetna Electronics - Your Trusted Partner in Security Solutions Since 2002
