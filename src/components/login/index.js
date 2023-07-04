import React from 'react';
import "./index.css";

export default function index() {
  return (
    <div className='total'>
      <h4>New Account</h4>
      <form>
        <div className='container'>
            <label htmlFor="account-type">Account Type:</label>
            <div class="radio-group">
                <div class="radio-option">
                    <input type="radio" id="login-radio" name="account-type" value="login" />
                    <label for="login-radio">Login</label>
                </div>
                <div class="radio-option">
                    <input type="radio" id="payment-card-radio" name="account-type" value="payment-card" />
                    <label for="payment-card-radio">Payment Card</label>
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
            placeholder='Enter account name'
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
            placeholder='xyz@gmail.com'
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
            placeholder='Enter password'
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
            placeholder='www.example.com'
          />
          <br />
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <br />
          <textarea
            id="notes"
            name="notes"
            placeholder='Anything you want to note'
          />
        </div>

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}



