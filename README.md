# NEW MAST – Chef Menu Management App

A cross-platform React Native application developed for **Christoffel**, a private chef renowned for his personalized culinary experiences.  
The app allows the chef to manage dynamic menus, add dishes, and display them beautifully for clients.

---

##  Features
- Add new menu items (dish name, description, course, and price)
- Choose from predefined courses (Starters, Mains, Desserts)
- View the full menu on the home screen
- Display total number of menu items
- Elegant beige, dark brown, and light brown theme
- Built with **TypeScript** and **React Native**
- Navigation between screens using React Navigation
- Animations for improved user experience

---

##  Tech Stack
- **React Native** `0.81.4`
- **React** `19.1.0`
- **Expo** `^51.0.0`
- **TypeScript** `^5.0.0`
- **React Navigation** `7.1.17`
- **React Native Reanimated** `4.1.0`
- **React Native Screens**, **Safe Area Context**, **Gesture Handler**
- **@react-native-picker/picker** for course selection

---

## Installation Guide

### 1️ Clone the project
```bash
git clone https://github.com/YOUR_USERNAME/NEW-MAST.git
cd NEW-MAST
2️ Install dependencies

This ensures React, React DOM, and React Native use matching versions.

rd /s /q node_modules
del package-lock.json
npm install

3️ Verify React versions

Make sure both are the same:

npm list react react-dom react-native


Expected output:

react@19.1.0
react-dom@19.1.0
react-native@0.81.4


If not, reinstall them manually:

npm install react@19.1.0 react-dom@19.1.0 --force

 Project Dependencies
npm install \
expo@^51.0.0 \
expo-status-bar@~1.12.0 \
react@19.1.0 \
react-dom@19.1.0 \
react-native@0.81.4 \
@react-navigation/native@^7.1.17 \
@react-navigation/native-stack@^7.3.26 \
react-native-gesture-handler@~2.28.0 \
react-native-reanimated@~4.1.0 \
react-native-safe-area-context@5.6.1 \
react-native-screens@4.16.0 \
@react-native-picker/picker@^2.8.1 \
typescript@^5.0.0

 How to Run the App
npx expo start -c


Then:

Press a to launch on Android

Press w to open in web

Press r to reload the project

🧩 Folder Structure
NEW-MAST/
│
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── AddMenuScreen.tsx
│   │   ├── MenuDetailScreen.tsx
│   │   └── AboutScreen.tsx
│   ├── theme/
│   │   └── colors.ts
│   └── types/
│       └── types.ts
│
├── App.tsx
├── package.json
└── README.md

 Troubleshooting
 Error: React and React Native versions mismatch

Fix:

npm install react@19.1.0 react-dom@19.1.0 --force

 Error: Nested NavigationContainer

Fix:
Ensure only one <NavigationContainer> exists in your app.
Your App.tsx should wrap everything inside a single container.

 Expo not found

Run:

npm install expo --force

 Author

Rixile Ndlovu
rixilendlovu319@gmail.com

 The Independent Institute of Education (Pty) Ltd, 2025

 License

This project is for educational purposes only under the supervision of The Independent Institute of Education (Pty) Ltd (IIE).

 References (Harvard Anglia Style)

Facebook Inc., 2025. React Native Documentation. [online] Available at: https://reactnative.dev/docs
 [Accessed 6 October 2025].

Expo Dev Team, 2025. Expo Documentation. [online] Available at: https://docs.expo.dev/
 [Accessed 6 October 2025].

React Navigation Contributors, 2025. React Navigation Documentation. [online] Available at: https://reactnavigation.org/docs/getting-started
 [Accessed 6 October 2025].

TypeScript Team, 2025. TypeScript Handbook. [online] Available at: https://www.typescriptlang.org/docs/
 [Accessed 6 October 2025].

npm Inc., 2025. npm Documentation. [online] Available at: https://docs.npmjs.com/
 [Accessed 6 October 2025].

The Independent Institute of Education (IIE), 2025. Academic Referencing Guidelines: Harvard Anglia Style. Johannesburg: IIE.
