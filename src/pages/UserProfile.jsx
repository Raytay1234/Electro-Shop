// src/pages/UserProfile.jsx
import React, { useState } from 'react';
import useAuth from '../context/useAuth.jsx';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const { user, login } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const updatedUser = { ...user, name, email };
    login(updatedUser);
    setIsEditing(false);
  };

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Profile</h2>
      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
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
