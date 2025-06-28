# Wit - Outfit Sharing App

Wit is a mobile-first social application designed for users to share their daily outfits with friends and followers. Built with modern web technologies, it offers a seamless and interactive experience.

## ✨ Features

- **User Authentication:** Secure sign-up and sign-in functionality.
- **Outfit Sharing:** Users can upload photos of their outfits.
- **Interactive Posts:** Add links to clothing items directly on the outfit photos.
- **Social Feed:** Browse a feed of outfits from users you follow.
- **User Profiles:** View user profiles, including their posts, followers, and following lists.
- **Profile Customization:** Users can edit their profile information and photo.
- **Follow System:** Follow and be followed by other users to build your network.

## 🛠️ Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
  - [Ionic Framework](https://ionicframework.com/) - UI components for building cross-platform apps
  - [Recoil](https://recoiljs.org/) - State Management
  - [React Router](https://reactrouter.com/) - Declarative routing
- **Backend & Database:**
  - [Firebase](https://firebase.google.com/) - Used for authentication, database, and storage.
- **Mobile & PWA:**
  - [Capacitor](https://capacitorjs.com/) - Cross-platform native runtime for web apps.
- **Styling:**
  - [Sass](https://sass-lang.com/)
- **Linting & Formatting:**
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/akifhanilgaz/wit.git
    cd wit
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up Firebase:**
    - Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    - Obtain your Firebase project configuration (apiKey, authDomain, etc.).
    - Update the configuration in `src/api/firebase/firebase.js` with your project's credentials.

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The app will be available at the local address provided by Vite.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the codebase for potential errors.
- `npm run preview`: Serves the production build locally.

## 📦 Deployment

This project is configured for automatic deployment to [GitHub Pages](https://pages.github.com/). Any push or merge to the `main` branch will trigger a build and deployment workflow.