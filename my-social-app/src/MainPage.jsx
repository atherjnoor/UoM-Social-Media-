
// import React, { useState, useEffect } from 'react';
// import './MainPage.css';
// import Logo from './Logo.png'; // Ensure this path is correct
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// const MainPage = () => {
//   const [posts, setPosts] = useState([]); // State to store posts
//   const [loading, setLoading] = useState(false); // State to track loading
//   const [page, setPage] = useState(1); // State to track the current page
//   const [searchQuery, setSearchQuery] = useState(''); // State for search query
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Dummy list of suggested friends
//   const suggestedFriends = [
//     { id: 1, name: 'Alice', username: 'alice123' },
//     { id: 2, name: 'Bob', username: 'bob456' },
//     { id: 3, name: 'Charlie', username: 'charlie789' },
//     { id: 4, name: 'Diana', username: 'diana101' },
//   ];

//   // Function to fetch more posts (dummy data)
//   const fetchPosts = () => {
//     setLoading(true);

//     // Simulate an API call with setTimeout
//     setTimeout(() => {
//       const newPosts = Array.from({ length: 5 }, (_, index) => ({
//         id: posts.length + index + 1,
//         username: `user${posts.length + index + 1}`,
//         image: `https://picsum.photos/500/300?random=${posts.length + index + 1}`,
//         caption: `This is post #${posts.length + index + 1}`,
//       }));

//       setPosts((prevPosts) => [...prevPosts, ...newPosts]);
//       setLoading(false);
//     }, 1000); // Simulate a 1-second delay
//   };

//   // Fetch posts when the component mounts or the page changes
//   useEffect(() => {
//     fetchPosts();
//   }, [page]);

//   // Function to handle scroll events
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop >=
//       document.documentElement.offsetHeight - 100
//     ) {
//       if (!loading) {
//         setPage((prevPage) => prevPage + 1); // Load the next page
//       }
//     }
//   };

//   // Add scroll event listener
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="main-page">
//       {/* Header Section */}
//       <div className="header">
//         {/* Logo */}
//         <img src={Logo} alt="Logo" className="logo" />

//         {/* Search Bar */}
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />

//         {/* Profile Button */}
//         <button
//           className="profile-button"
//           onClick={() => navigate('/profile')} // Navigate to the profile page
//         >
//           Profile
//         </button>
//       </div>

//       {/* Main Content Section */}
//       <div className="content">
//         {/* Feed Section */}
//         <div className="feed">
//           {posts.map((post) => (
//             <div key={post.id} className="post">
//               <img src={post.image} alt={`Post by ${post.username}`} className="post-image" />
//               <div className="post-content">
//                 <h3>{post.username}</h3>
//                 <p>{post.caption}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Suggested Friends Section */}
//         <div className="suggested-friends">
//           <h3>Suggested Friends</h3>
//           <ul>
//             {suggestedFriends.map((friend) => (
//               <li key={friend.id}>
//                 <span>{friend.name}</span>
//                 <small>@{friend.username}</small>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Loading Spinner */}
//       {loading && <div className="loading-spinner">Loading...</div>}
//     </div>
//   );
// };

// export default MainPage;
import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Logo from './Logo.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaHome, FaPlus, FaThumbsUp, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa'; // Import icons from react-icons

const MainPage = () => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(false); // State to track loading
  const [page, setPage] = useState(1); // State to track the current page
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
        likes: 0, // Initialize likes
        dislikes: 0, // Initialize dislikes
        comments: [], // Initialize comments
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

  // Function to handle like/dislike
  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    );
  };

  // Function to handle adding a comment
  const handleAddComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  // Function to handle sharing a post
  const handleShare = (postId) => {
    const postLink = `${window.location.origin}/post/${postId}`; // Generate a shareable link
    navigator.clipboard.writeText(postLink).then(() => {
      alert('Link copied to clipboard!');
    });
  };

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
          {/* Create New Post Button */}
          <button
            className="create-post-button"
            onClick={() => navigate('/create-post')} // Navigate to the create post page
          >
            <FaPlus /> {/* Plus icon */}
            <span>Create New Post</span> {/* Button text */}
          </button>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.image} alt={`Post by ${post.username}`} className="post-image" />
              <div className="post-content">
                <h3>{post.username}</h3>
                <p>{post.caption}</p>

                {/* Like/Dislike Buttons */}
                <div className="post-actions">
                  <button onClick={() => handleLike(post.id)}>
                    <FaThumbsUp /> {post.likes}
                  </button>
                  <button onClick={() => handleDislike(post.id)}>
                    <FaThumbsDown /> {post.dislikes}
                  </button>
                </div>

                {/* Comment Section */}
                <div className="comment-section">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        handleAddComment(post.id, e.target.value.trim());
                        e.target.value = ''; // Clear the input
                      }
                    }}
                  />
                  <ul>
                    {post.comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                </div>

                {/* Share Button */}
                <button className="share-button" onClick={() => handleShare(post.id)}>
                  <FaShare /> Share
                </button>
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