// src/pages/UserProfile.jsx
import React, { useState, useEffect } from "react";
import useAuth from "../context/useAuth.jsx";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const { user, login } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setProfilePicture(user?.profilePicture || "");
  }, [user]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePicture(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updatedUser = { ...user, name, email, profilePicture };
    login(updatedUser);
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="user-profile no-user">
        <h2>⚠ Please Log In</h2>
        <p>You need to be logged in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="user-profile fade-in">
      <h2 className="profile-title">My Profile</h2>

      {/* Profile Picture */}
      <div className="profile-image-container">
        <img
          src={profilePicture || "/default-avatar.png"}
          alt="Profile"
          className="profile-image"
        />
        {isEditing && (
          <label className="upload-btn">
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        )}
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        {isEditing ? (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="profile-input"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="profile-input"
            />
            <div className="profile-actions">
              <button className="save-btn" onClick={handleSave}>
                💾 Save
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                ✖ Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              ✏ Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
