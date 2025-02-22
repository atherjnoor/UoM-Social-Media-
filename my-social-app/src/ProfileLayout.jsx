// import React from 'react';
// import './ProfileLayout.css'; // For styling

// const ProfileLayout = ({ profile }) => {
//   const { name, username, major, education, courses, interests, skills } = profile;

//   return (
//     <div className="profile-layout">
//       {/* Header Section */}
//       <div className="profile-header">
//         <h1>{name}</h1>
//         <p className="username">@{username}</p>
//         <button className="follow-button">Follow</button>
//       </div>

//       {/* Main Content Section */}
//       <div className="profile-content">
//         {/* Posts Section */}
//         <div className="posts-section">
//           <h2>Posts</h2>
//           <div className="post">
//             <p>This is a sample post.</p>
//           </div>
//           <div className="post">
//             <p>Another post here.</p>
//           </div>
//         </div>

//         {/* Sidebar Section */}
//         <div className="sidebar">
//           <div className="sidebar-section">
//             <h3>Major</h3>
//             <p>{major}</p>
//           </div>

//           <div className="sidebar-section">
//             <h3>Education</h3>
//             <p>{education}</p>
//           </div>

//           <div className="sidebar-section">
//             <h3>Courses Taken</h3>
//             <p>{courses}</p>
//           </div>

//           <div className="sidebar-section">
//             <h3>Interests</h3>
//             <p>{interests}</p>
//           </div>

//           <div className="sidebar-section">
//             <h3>Skills</h3>
//             <p>{skills}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileLayout;
import React, { useState } from 'react';
import './ProfileLayout.css'; // For styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaHome } from 'react-icons/fa'; // Import the home icon from react-icons

const ProfileLayout = ({ profile, onEdit }) => {
  const { name, username, major, YearOfStudy, courses, interests, skills, pronouns, profilePicture } = profile;
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEditClick = () => {
    setIsEditing(true);
    onEdit();
  };

  return (
    <div className="profile-layout">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-picture">
          <img src={profilePicture || 'https://via.placeholder.com/150'} alt="Profile" />
        </div>
        <h1>{name}</h1>
        <p className="username">@{username}</p>
        <p className="pronouns">@{pronouns}</p>

        {/* Home Button, Followers, and Following */}
        <div className="profile-actions">
          <button
            className="home-button"
            onClick={() => navigate('/feed')} // Navigate to the feed page
          >
            <FaHome /> {/* Home icon */}
            <span>Home</span> {/* Optional text */}
          </button>

          {/* Followers and Following */}
          <div className="follow-stats">
            <span className="followers">1.2K Followers</span>
            <span className="following">500 Following</span>
          </div>
        </div>

        {/* Edit Button */}
        <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
      </div>

      {/* Main Content Section */}
      <div className="profile-content">
        {/* Posts Section */}
        <div className="posts-section">
          <h2>Posts</h2>
          <div className="post">
            <p>This is a sample post.</p>
          </div>
          <div className="post">
            <p>Another post here.</p>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Major</h3>
            <p>{major}</p>
          </div>

          <div className="sidebar-section">
            <h3>YearOfStudy</h3>
            <p>{YearOfStudy}</p>
          </div>

          <div className="sidebar-section">
            <h3>Courses Taken</h3>
            <p>{courses}</p>
          </div>

          <div className="sidebar-section">
            <h3>Interests</h3>
            <p>{interests}</p>
          </div>

          <div className="sidebar-section">
            <h3>Skills</h3>
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;