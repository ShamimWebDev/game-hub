# 🎮 GameHub

GameHub is a modern web app designed to help users explore, discover, and interact with their favorite games.  
It provides a smooth user experience with authentication, game browsing, and responsive design — built using React and Tailwind CSS.

---

## 🌐 Live Demo  
🔗 [GameHub Live](https://game-hub-9.netlify.app/)

---

## 🧠 Purpose  
The purpose of this project is to create a visually appealing and user-friendly platform where users can:
- Browse and discover new games.
- View detailed game information.
- Sign in or register securely.
- Manage their accounts easily through Firebase authentication.

---

## ✨ Key Features

- 🔐 **User Authentication**
  - Sign in with Email & Password
  - Google Authentication (Firebase)
  - Forgot Password with Email Reset

- 🎨 **Modern UI/UX**
  - Fully responsive layout
  - Clean and interactive design
  - Smooth animations using  Motion

- 🕹️ **Game Library**
  - Browse popular games
  - Interactive cards and hover effects

- ⚙️ **Optimized Development Setup**
  - Vite for fast builds
  - Reusable components with React
  - **Global Error Boundary** for crash protection
  - **SEO Optimized** with meta tags and semantic HTML
  - **Context API** for efficient state management

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend Framework |
| **Vite** | Fast build tool for React |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Framer Motion** | Smooth animations and transitions |
| **Firebase** | Authentication and user management |
| **React Router DOM** | Routing and navigation |
| **React Icons** | Scalable icons for UI |
| **React Toastify** | Toast notifications for user feedback |
| **react-spinners** | Beautiful loading animations and spinners |
| **ESLint** | Code quality and linting |

---

## 📦 NPM Packages Used

```bash
npm install react-router-dom
npm install motion
npm install react-icons
npm install react-toastify
npm install firebase
npm install tailwindcss
npm install DaisyUI
npm install react-spinners
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShamimWebDev/game-hub.git
   cd game-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Footer, GameCard, etc.)
├── context/        # Context API providers (AuthContext, GameContext)
├── layouts/        # Layout wrappers (HomeLayouts, DefaultLayout)
├── pages/          # Page components (Home, AllGames, GameDetails, etc.)
├── routes/         # Router configuration
├── privateRoute/   # Route protection components
└── main.jsx        # Entry point
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.
