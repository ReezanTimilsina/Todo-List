import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

export default function PasswordForm({ onSave }) {
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const savedPasswords = localStorage.getItem('savedPasswords');
    if (savedPasswords) {
      setSavedData(JSON.parse(savedPasswords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedPasswords', JSON.stringify(savedData));
  }, [savedData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordData = {
      accountType,
      accountName,
      username,
      password,
      websiteUrl,
      notes,
    };

    onSave(passwordData);
    setSavedData([...savedData, passwordData]);
    setAccountType('');
    setAccountName('');
    setUsername('');
    setPassword('');
    setWebsiteUrl('');
    setNotes('');
  };

  const handleSaveAsJson = () => {
    const jsonContent = JSON.stringify(savedData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    saveAs(blob, 'savedData.json');
  };

  return (
    <div className="total">
      <h4>New Account</h4>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="account-type">Account Type:</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="login-radio"
                name="account-type"
                value="login"
                checked={accountType === 'login'}
                onChange={() => setAccountType('login')}
              />
              <label htmlFor="login-radio">Login</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="payment-card-radio"
                name="account-type"
                value="payment-card"
                checked={accountType === 'payment-card'}
                onChange={() => setAccountType('payment-card')}
              />
              <label htmlFor="payment-card-radio">Payment Card</label>
            </div>
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="account-name">Account Name:</label>
          <br />
          <input
            type="text"
            id="account-name"
            name="account-name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter account name"
          />
          <br />
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="xyz@gmail.com"
          />
          <br />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <br />
        </div>

        <div>
          <label htmlFor="website-url">Website URL:</label>
          <br />
          <input
            type="text"
            id="website-url"
            name="website-url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="www.example.com"
          />
          <br />
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <br />
          <textarea
            id="notes"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anything you want to note"
          />
        </div>

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>

      {savedData.length > 0 && (
        <div className="saved-data">
          <h4>Saved Data:</h4>
          <ul>
            {savedData.map((data, index) => (
              <li key={index}>
                Account Name: {data.accountName}, Username: {data.username}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleSaveAsJson}>Save as JSON</button>
    </div>
  );
}
