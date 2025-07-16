// src/pages/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import useAuth from '../context/useAuth.jsx';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const { user, login } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || '');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(user?.name || '');
    setEmail(user?.email || '');
    setProfilePicture(user?.profilePicture || '');
  }, [user]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result); // base64 image string
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updatedUser = { ...user, name, email, profilePicture };
    login(updatedUser);
    setIsEditing(false);
  };

  if (!user) {
    return <p className="user-profile">Please log in to view your profile.</p>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      
      <div className="profile-image-container">
        <img
          src={profilePicture || '/default-avatar.png'}
          alt="Profile"
          className="profile-image"
        />
      </div>

      {isEditing ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="image-upload"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
