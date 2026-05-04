# Satish Kumar Gupta — Portfolio

A personal developer portfolio built with React, featuring dark/light theme, smooth animations, and a fully responsive layout.

---

## Tech Stack

| | Library |
|---|---|
| UI | React 18 |
| Animations | Framer Motion |
| Icons | React Icons |
| Contact | EmailJS |
| Styling | CSS Variables + BEM |

---

## Features

- Dark / Light theme toggle
- Animated hero with typing effect and spinning border
- Skills grouped by category in a single card
- Filterable portfolio with skeleton image loading
- Contact form with toast notifications and loading state
- Scroll progress bar, back-to-top, preloader splash screen
- Fully responsive (mobile-first)

---

## Getting Started

```bash
npm install
npm start         # development — http://localhost:3000
npm run build     # production build
```

---

## Project Structure

```
src/
├── components/
│   ├── Header/         # Navbar + theme toggle
│   ├── Home/           # Hero section
│   ├── About/          # Bio + stats
│   ├── Skills/         # Tech stack card
│   ├── Qualification/  # Experience & education
│   ├── Work/           # Portfolio projects + modal
│   ├── Contact/        # EmailJS contact form
│   ├── Footer/
│   ├── Toast/          # Notification system
│   ├── Preloader/
│   └── ScrollProgress/
├── context/
│   └── ThemeContext.js
└── assests/            # Images
```

---

## Adding a Project

Add an object to `projectsData` in `src/components/Work/Data.jsx`:

```js
{
  id: 10,
  image: Work6,
  title: "Project Name",
  description: "Short description.",
  category: "fullstack",  // fullstack | frontend | backend | mobile
  tags: ["React", "Node.js"],
  link: "https://live-demo.com",       // null if no live demo
  gitHubLink: "https://github.com/satishgupta07/repo",
}
```

---

## Contact

**Satish Kumar Gupta**
[LinkedIn](https://www.linkedin.com/in/satishkumargupta07/) · [GitHub](https://github.com/satishgupta07) · satishgupta.cse01@gmail.com
