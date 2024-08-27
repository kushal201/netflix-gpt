# Netflix - GPT

- Create React App
- Configured Tailwind CSS
- Put the Images for background and logo
- Implemented React Router
- Built Log in and Sign up form
- Form validation
- useRef hook
- Setup and initialized Firebase
- Deployed into production
- Setup Authentication using "signInWithEmailAndPassword" and "createUserWithEmailAndPassword" APIs
- Created Redux Store
- To get current signed is user's details, "onAuthStateChanged" API is used

Bug Fixes:

- user name not displayed first time when signed up
- if user not logged in, browse route cannot be accessed and if user logged in, login route cannot be accessed.

- Steps to set up firebase
  - npm install firebase
  - npm install -g firebase-tools
  - firebase login
  - firebase init
  - choose yes to proceed and select Hosting option
  - select the project name to host
  - build the app and deploy on firebase by "firebase deploy"
