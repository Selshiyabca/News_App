import React from 'react';
import '../styles/NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to the newsletter</h2>
      <p>Get a weekly digest of our most important stories direct to your inbox.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  );
};

export default NewsLetter;