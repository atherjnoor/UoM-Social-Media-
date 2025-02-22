// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MainPage.css';

// const MainFeed = () => {
//     const navigate = useNavigate();
//     const [searchQuery, setSearchQuery] = useState('');
  
//     // Dummy posts data
//     const posts = [
//       {
//         id: 1,
//         username: 'user1',
//         content: 'This is the first post.',
//         timestamp: '2 hours ago',
//       },
//       {
//         id: 2,
//         username: 'user2',
//         content: 'This is the second post.',
//         timestamp: '5 hours ago',
//       },
//       {
//         id: 3,
//         username: 'user3',
//         content: 'This is the third post.',
//         timestamp: '1 day ago',
//       },
//     ];
  
//     const handleSearch = (e) => {
//       e.preventDefault();
//       // Implement search functionality here
//       console.log('Search Query:', searchQuery);
//     };
  
//     const handleProfileClick = () => {
//       navigate('/profile'); // Navigate to the profile page
//     };
  
//     return (
//       <div className="main-feed">
//         {/* Header with Search Bar and Profile Icon */}
//         <div className="header">
//           <form onSubmit={handleSearch} className="search-bar">
//             <input
//               type="text"
//               placeholder="Search posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit">Search</button>
//           </form>
//           <div className="profile-icon" onClick={handleProfileClick}>
//             <img
//               src="https://via.placeholder.com/40" // Replace with your profile icon
//               alt="Profile"
//             />
//           </div>
//         </div>
  
//         {/* Feed (Posts) */}
//         <div className="feed">
//           {posts.map((post) => (
//             <div key={post.id} className="post">
//               <div className="post-header">
//                 <span className="username">{post.username}</span>
//                 <span className="timestamp">{post.timestamp}</span>
//               </div>
//               <div className="post-content">{post.content}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default MainFeed;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MainPage.css';

// const MainPage = () => {
//   const navigate = useNavigate();

//   // Dummy feed data
//   const feedPosts = [
//     {
//       id: 1,
//       username: 'user123',
//       content: 'This is the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       id: 2,
//       username: 'user456',
//       content: 'This is the second post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//       id: 3,
//       username: 'user789',
//       content: 'This is the third post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     },
//   ];

//   return (
//     <div className="main-page">
//       {/* Header Section */}
//       <div className="header">
//         {/* Search Bar */}
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search..."
//         />

//         {/* Profile Button */}
//         <button
//           className="profile-button"
//           onClick={() => navigate('/profile')}
//         >
//           Profile
//         </button>
//       </div>

//       {/* Feed Section */}
//       <div className="feed">
//         {feedPosts.map((post) => (
//           <div key={post.id} className="post">
//             <h3>{post.username}</h3>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainPage;
import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Logo from './Logo.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const MainPage = () => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(false); // State to track loading
  const [page, setPage] = useState(1); // State to track the current page
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy list of suggested friends
  const suggestedFriends = [
    { id: 1, name: 'Alice', username: 'alice123' },
    { id: 2, name: 'Bob', username: 'bob456' },
    { id: 3, name: 'Charlie', username: 'charlie789' },
    { id: 4, name: 'Diana', username: 'diana101' },
  ];

  // Function to fetch more posts (dummy data)
  const fetchPosts = () => {
    setLoading(true);

    // Simulate an API call with setTimeout
    setTimeout(() => {
      const newPosts = Array.from({ length: 5 }, (_, index) => ({
        id: posts.length + index + 1,
        username: `user${posts.length + index + 1}`,
        image: `https://picsum.photos/500/300?random=${posts.length + index + 1}`,
        caption: `This is post #${posts.length + index + 1}`,
      }));

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  };

  // Fetch posts when the component mounts or the page changes
  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Function to handle scroll events
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (!loading) {
        setPage((prevPage) => prevPage + 1); // Load the next page
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-page">
      {/* Header Section */}
      <div className="header">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="logo" />

        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Profile Button */}
        <button
          className="profile-button"
          onClick={() => navigate('/profile')} // Navigate to the profile page
        >
          Profile
        </button>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Feed Section */}
        <div className="feed">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.image} alt={`Post by ${post.username}`} className="post-image" />
              <div className="post-content">
                <h3>{post.username}</h3>
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Friends Section */}
        <div className="suggested-friends">
          <h3>Suggested Friends</h3>
          <ul>
            {suggestedFriends.map((friend) => (
              <li key={friend.id}>
                <span>{friend.name}</span>
                <small>@{friend.username}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && <div className="loading-spinner">Loading...</div>}
    </div>
  );
};

export default MainPage;