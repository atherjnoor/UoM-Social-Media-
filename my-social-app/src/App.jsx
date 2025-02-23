// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import OpeningPage from './opening'; // Ensure this path is correct
// import SignUp from './signup'; // Ensure this path is correct
// import Profile from './Profile'; // Ensure this path is correct
// import LoginForm from './LoginForm';
// import ProfileLayout from './ProfileLayout';
// import MainPage from './MainPage'; 
// import './opening.css'; // Ensure this path is correct
// import './signup.css'; // Ensure this path is correct
// import './Profile.css'; // Ensure this path is correct
// // import './ProfileDisplay.css'; // Ensure this path is correct
// import './ProfileLayout.css'
// import './App.css';
// import './LoginForm';
// import './MainPage.css'; // Import the CSS file

// function App() {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleProfileSubmit = (profileData) => {
//     console.log("Profile Data Received:", profileData); // Debug
//     const fullProfile = {
//       name: 'Full name',
//       username: 'username',
//       profilePicture: 'https://via.placeholder.com/150', // Default profile picture
//       ...profileData,
//     };
//     setProfile(fullProfile);
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Opening Page */}
//         <Route path="/" element={<OpeningPage />} />

//         {/* Signup Page */}
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<LoginForm />} />

//          {/* Main Feed Page */}
//          <Route path="/feed" element={<MainPage />} />
//         {/* Profile Pages */}
//         <Route
//           path="/profile"
//           element={
//             profile && !isEditing ? (
//               <ProfileLayout profile={profile} onEdit={handleEdit} />
//             ) : (
//               <Profile onSubmit={handleProfileSubmit} /> // Ensure onSubmit is passed correctly
//             )
//           }
//         />

//         {/* Redirect to Opening Page if route not found */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OpeningPage from './opening'; // Ensure this path is correct
import SignUp from './signup'; // Ensure this path is correct
import Profile from './Profile'; // Ensure this path is correct
import LoginForm from './LoginForm';
import ProfileLayout from './ProfileLayout';
import MainPage from './MainPage'; // Ensure this path is correct
import CreatePost from './CreatePost'; // Import the CreatePost component
import './opening.css'; // Ensure this path is correct
import './signup.css'; // Ensure this path is correct
import './Profile.css'; // Ensure this path is correct
import './ProfileLayout.css'; // Ensure this path is correct
import './App.css';
import './MainPage.css'; // Ensure this path is correct
import './CreatePost.css'; // Ensure this path is correct

function App() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileSubmit = (profileData) => {
    console.log('Profile Data Received:', profileData); // Debug
    const fullProfile = {
      name: 'Full name',
      username: 'username',
      profilePicture: 'https://via.placeholder.com/150', // Default profile picture
      ...profileData,
    };
    setProfile(fullProfile);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Router>
      <Routes>
        {/* Opening Page */}
        <Route path="/" element={<OpeningPage />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginForm />} />

        {/* Main Feed Page */}
        <Route path="/feed" element={<MainPage />} />

        {/* Create Post Page */}
        <Route path="/create-post" element={<CreatePost />} />

        {/* Profile Pages */}
        <Route
          path="/profile"
          element={
            profile && !isEditing ? (
              <ProfileLayout profile={profile} onEdit={handleEdit} />
            ) : (
              <Profile onSubmit={handleProfileSubmit} />
            )
          }
        />

        {/* Redirect to Opening Page if route not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;