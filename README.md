# 🚀 Kasun Akalanka – Software Engineer Portfolio

Welcome to my personal portfolio website! This project serves as a comprehensive showcase of my skills, professional experience, and passion for crafting robust and scalable web applications. Explore my work, learn about my technical proficiencies, and get a glimpse into my journey as a software engineer.

## ✨ Features

This portfolio is designed with a focus on modern web standards and user experience:

- **Responsive & Adaptive Design:** Ensures a seamless and visually appealing experience across various devices, from mobile phones to large desktop screens.
- **Dynamic Theme Toggle:** Provides a user-friendly button to effortlessly switch between a sleek dark mode and a clean light mode, with smooth transitions.
- **Sticky Navigation:** A fixed header that remains visible while scrolling, offering easy access to all sections of the portfolio.
- **Smooth Section Scrolling:** Utilizes native browser smooth scrolling enhanced with a custom offset to perfectly position content below the fixed header.
- **Interactive UI Elements:** Subtle hover effects on navigation links, profile images, and project cards to enhance user engagement.
- **Comprehensive Project Showcase:** A dedicated section detailing key projects, complete with descriptions, technologies used, and direct links to their GitHub repositories.
- **Detailed Experience & Education Timelines:** Clearly structured timelines presenting my professional journey and academic achievements.
- **Skills & Tools Overview:** A categorized display of programming languages, frameworks, libraries, and tools I'm proficient with.
- **Professional Contact Links:** Convenient access to my GitHub, LinkedIn, and email for networking and inquiries.

## 🛠️ Technologies Used

This project is built using a modern and efficient web development stack:

### Frontend Core:
- **HTML5:** For structuring the semantic content of the portfolio.
- **CSS3:** Custom styling and animations, leveraging CSS Variables for dynamic theming.
- **JavaScript (ES6+):** Powers interactive elements, theme toggling logic, and dynamic content manipulation.

### Styling & Icons:
- **Tailwind CSS:** A utility-first CSS framework that enables rapid and consistent UI development.
- **Lucide Icons:** A collection of beautiful, customizable, and tree-shakable SVG icons used throughout the site.
- **Google Fonts:** Inter for body text and Poppins for headings, providing a clean and modern typographic aesthetic.

### Development & Deployment Tools:
- **Vite:** A next-generation frontend tooling that provides a blazing fast development experience and optimized builds.
- **PostCSS:** A tool for transforming CSS with JavaScript plugins, used by Tailwind CSS.
- **Autoprefixer:** A PostCSS plugin that automatically adds vendor prefixes to CSS rules.
- **gh-pages:** A command-line utility for publishing content to GitHub Pages.

## 🚀 Getting Started

To set up and run this project on your local machine, follow these simple steps.

### Prerequisites
Ensure you have Node.js and npm (or Yarn) installed:
- **Node.js (LTS)**
- **npm (comes with Node.js)** or **Yarn**

### Installation

Clone the repository:

```bash
git clone https://github.com/sightser/sightser.github.io.git
cd sightser.github.io
```

Install project dependencies:

```bash
npm install
# or
yarn install
```

### Development

To start the local development server and view the portfolio in your browser:

```bash
npm run dev
# or
yarn dev
```

This will typically open your project at http://localhost:5173 (or another available port). Changes made to the source code will hot-reload automatically.

### Building for Production

To compile and optimize the project for deployment:

```bash
npm run build
# or
yarn build
```

This will create a `dist/` directory containing the minified and optimized production assets.

### Deployment to GitHub Pages

This project is configured for seamless deployment to GitHub Pages.

#### Verify vite.config.js base:

For a User/Organization Page (e.g., sightser.github.io), ensure `base: '/'` is set in `vite.config.js`.  
(Your current vite.config.js is set to `base: '/'`, which is correct for a user page.)

Run the deploy script:

```bash
npm run deploy
# or
yarn deploy
```

This command will build your project and push the contents of the `dist` directory to the `gh-pages` branch of your repository, making your portfolio live.

## 📂 Project Structure

```
.
├── public/                 # Static assets (e.g., profile image)
├── src/
│   └── style.css           # Main CSS file (Tailwind directives & custom styles)
├── index.html              # The main entry point of the portfolio
├── package.json            # Project metadata and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS custom configurations
└── vite.config.js          # Vite build tool settings
```

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements! If you have any ideas or spot an issue, feel free to:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'feat: Add a new awesome feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request with a clear description of your changes.

## 📄 License

This project is open source and distributed under the MIT License. See the LICENSE file in the repository for full details.

## ✉️ Contact

Feel free to reach out if you have any questions, opportunities, or just want to connect!

**Kasun Akalanka**  
Email: [k3akalanka@gmail.com](mailto:k3akalanka@gmail.com)  
GitHub: [https://github.com/sightser](https://github.com/sightser)  
LinkedIn: [https://linkedin.com/in/kasun-akalanka-k-vithanage](https://linkedin.com/in/kasun-akalanka-k-vithanage)  
Project Link: [https://github.com/sightser/sightser.github.io](https://github.com/sightser/sightser.github.io)