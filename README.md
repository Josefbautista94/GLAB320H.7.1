# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# GLAB320H.7.1 – React Movie Search App

This project allows users to search for movies using the OMDB API and displays movie details dynamically in a React interface.

## Features

- Built with **React** and **Vite** for fast development.
- Uses **useState** and **useEffect** React hooks.
- Lifts state from child components to App for data sharing.
- Makes async API requests using `fetch`.
- Supports dynamic form input with real-time state tracking.
- Environment variables handled securely with `.env`.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install


2. Create a .env file
In the root directory, add:

VITE_OMDB_API_KEY=your_omdb_api_key_here

3. Run the app

npm run dev

4. Visit http://localhost:5173

Folder Structure

src/
├── components/
│   ├── Form.jsx
│   └── MovieDisplay.jsx
├── App.jsx
├── main.jsx
└── App.css

Credits

OMDB API – for movie data

Per Scholas – GLAB assignment template

