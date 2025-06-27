import React from 'react';
import { MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  // Profile data - easily modifiable
  const profileData = {
    name: "Davide Presti",
    title: "Comic Artist",
    company: "Free-lancing",
    location: "Bologna, Italy",
    projects: 25, // You can update this number as you add projects
    profileImage: "profile-image/Davide.jpg" // Placeholder image
  };

  // Social media links - easily extensible
  const socialLinks = [
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/danmora",
      color: "facebook-link"
    },
    {
      name: "Instagram", 
      icon: "instagram",
      url: "https://www.instagram.com/presti_davide",
      color: "instagram-link"
    }
  ];

  // Handle message button click
  const handleMessage = () => {
    // You can customize this to open a contact form, email client, etc.
    window.location.href = `mailto:contact@danmora.com?subject=Portfolio Inquiry`;
  };

  // Social media icon component
  const SocialIcon = ({ platform, color, url, name }) => {
    const getIconPath = (platform) => {
      switch (platform) {
        case "facebook":
          return "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z";
        case "instagram":
          return "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";
        default:
          return "";
      }
    };

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${color}`}
      >
        <div className="social-content">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d={getIconPath(platform)} />
          </svg>
          <span className="social-name">{name}</span>
        </div>
        <ExternalLink className="external-icon" />
      </a>
    );
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        {/* Profile Picture */}
        <div className="profile-picture-container">
          <div className="profile-picture-gradient">
            <img
              src={profileData.profileImage}
              alt={`${profileData.name} profile`}
              className="profile-picture"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="profile-name">
          {profileData.name}
        </h1>
        
        {/* Professional Info */}
        <div className="profile-info">
          <p className="profile-title">{profileData.title}</p>
          <p className="profile-company">{profileData.company}</p>
          <div className="profile-location">
            <MapPin className="location-icon" />
            {profileData.location}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            onClick={handleMessage}
            className="message-button"
          >
            <MessageCircle className="message-icon" />
            <span>Message</span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-content">
          <div className="stat-item">
            <span className="stat-label">Projects</span>
            <span className="stat-value">{profileData.projects.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-section">
        <h3 className="social-heading">
          Connect
        </h3>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              platform={social.icon}
              color={social.color}
              url={social.url}
              name={social.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;