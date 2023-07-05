import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordForm from './PasswordsForm';
import "./PasswordPage.css"

export default function PasswordsPage() {
  const [showForm, setShowForm] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const navigate = useNavigate();

  const handleSavePassword = (passwordData) => {
    const updatedPasswords = [...passwords, passwordData];
    setPasswords(updatedPasswords);
    setShowForm(false); // Hide the form after saving
  };

  const handleAddPassword = () => {
    setShowForm(true); // Show the form when Add Password is clicked
  };

  const handleCancel = () => {
    setShowForm(false); // Hide the form when Cancel is clicked
  };

  return (
    <div className="passwords-page">
      <h1>Passwords Page</h1>
      {!showForm && <button onClick={handleAddPassword}>Add Password</button>}
      {showForm && (
        <div>
          <PasswordForm onSave={handleSavePassword} onCancel={handleCancel} />
        </div>
      )}
      <div className="passwords-list">
        {passwords.map((password, index) => (
          <div key={index} className="password-item">
            <h4>{password.accountName}</h4>
            <p>{password.username}</p>
            <p>{password.password}</p>
            <p>{password.websiteUrl}</p>
            <p>{password.notes}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
