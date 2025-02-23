import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'; // Ensure this path is correct

const CreatePost = () => {
  const [image, setImage] = useState(null); // State for the uploaded image
  const [caption, setCaption] = useState(''); // State for the caption
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate posting logic (e.g., API call)
    console.log('Posting:', { image, caption });
    navigate('/feed'); // Redirect to the home page after posting
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/feed'); // Redirect to the home page on cancel
  };

  return (
    <div className="create-post-page">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="form-group">
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>

        {/* Caption Input */}
        <div className="form-group">
          <label>Write a Caption:</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="What's on your mind?"
            required
          />
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;