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
- Unsubscribed to onAuthStateChanged whenever Headed component unmounts

- Created Tmdb account for generating API key and for using Tmdb API in our application
- while calling API, it calls the API twice. React does it to ensure there are no inconsistencies
- Created redux slice for movie list and also the reducers
- used custom hook to call the API and to get main movie trailer
- updated store with trailer video data
- embedded YouTube video using its iframe and used autoplay and muted it
- used Tailwind CSS on MainContainer component for making it visually appealing
- created SecondaryContainer component to render the MovieList component
- called the "now playing" API from TMDB to render the list of movies
- used Tailwind CSS on the list to handle overflow

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
