import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Sample artwork data - easily modifiable
  const artworkData = [
    {
      id: 1,
      title: "Spider-Man Comic Page",
      category: "Comics",
      thumbnail: "testing-images/Spiderman-Davide.jpg",
      pages: [
        "testing-images/Spiderman-Davide.jpg",
        "testing-images/Wolverine-Davide.jpg",
        "/api/placeholder/800/1000"
      ],
      description: "Amazing Spider-Man comic book illustration featuring web-slinging action through New York City."
    },
    {
      id: 2,
      title: "BOOM! Studios Logo",
      category: "Branding",
      thumbnail: "/api/placeholder/400/300", 
      pages: [
        "/api/placeholder/800/600"
      ],
      description: "Professional logo design for BOOM! Studios entertainment company."
    },
    {
      id: 3,
      title: "Power Rangers Team",
      category: "Character Design",
      thumbnail: "/api/placeholder/500/400",
      pages: [
        "/api/placeholder/1000/800",
        "/api/placeholder/1000/800"
      ],
      description: "Dynamic team illustration featuring the iconic Power Rangers in action poses."
    },
    {
      id: 4,
      title: "Red Ranger Portrait",
      category: "Character Design", 
      thumbnail: "/api/placeholder/400/400",
      pages: [
        "/api/placeholder/800/800"
      ],
      description: "Detailed character portrait of the Red Power Ranger with dynamic lighting."
    },
    {
      id: 5,
      title: "Joker Character Study",
      category: "Character Design",
      thumbnail: "/api/placeholder/400/500",
      pages: [
        "/api/placeholder/800/1000"
      ],
      description: "Dark and twisted character interpretation of the iconic Batman villain."
    },
    {
      id: 6,
      title: "Fantasy Character",
      category: "Concept Art",
      thumbnail: "/api/placeholder/400/500",
      pages: [
        "/api/placeholder/800/1000",
        "/api/placeholder/800/1000"
      ],
      description: "Original fantasy character design with detailed armor and weapon concepts."
    },
    {
      id: 7,
      title: "Thor Winter Battle",
      category: "Comics",
      thumbnail: "/api/placeholder/600/400",
      pages: [
        "/api/placeholder/1200/800"
      ],
      description: "Epic battle scene featuring Thor in a frozen wasteland with dramatic action."
    },
    {
      id: 8,
      title: "Winter Warriors Sketch",
      category: "Sketches",
      thumbnail: "/api/placeholder/600/400",
      pages: [
        "/api/placeholder/1200/800",
        "/api/placeholder/1200/800",
        "/api/placeholder/1200/800"
      ],
      description: "Concept sketches showing warriors battling in harsh winter conditions."
    }
  ];

  // Open artwork modal
  const openArtwork = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentPage(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close artwork modal
  const closeArtwork = () => {
    setSelectedArtwork(null);
    setCurrentPage(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Navigate to next page
  const nextPage = () => {
    if (selectedArtwork && currentPage < selectedArtwork.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyPress = (e) => {
    if (!selectedArtwork) return;
    
    if (e.key === 'Escape') {
      closeArtwork();
    } else if (e.key === 'ArrowLeft') {
      prevPage();
    } else if (e.key === 'ArrowRight') {
      nextPage();
    }
  };

  // Add keyboard listener when modal is open
  React.useEffect(() => {
    if (selectedArtwork) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedArtwork, currentPage]);

  return (
    <div className="portfolio-container">
      {/* Portfolio Header */}
      <div className="portfolio-header">
        <h2 className="portfolio-title">My Artwork</h2>
        <p className="portfolio-subtitle">
          A collection of comic illustrations, character designs, and concept art
        </p>
      </div>

      {/* Artwork Grid */}
      <div className="artwork-grid">
        {artworkData.map((artwork) => (
          <div
            key={artwork.id}
            className="artwork-card"
            onClick={() => openArtwork(artwork)}
          >
            <div className="artwork-image-container">
              <img
                src={artwork.thumbnail}
                alt={artwork.title}
                className="artwork-thumbnail"
              />
              <div className="artwork-overlay">
                <Eye className="view-icon" />
                <span className="view-text">View Artwork</span>
                {artwork.pages.length > 1 && (
                  <span className="page-count">{artwork.pages.length} pages</span>
                )}
              </div>
            </div>
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              <p className="artwork-category">{artwork.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div className="artwork-modal" onClick={closeArtwork}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h3 className="modal-title">{selectedArtwork.title}</h3>
                <p className="modal-category">{selectedArtwork.category}</p>
              </div>
              <button className="close-button" onClick={closeArtwork}>
                <X className="close-icon" />
              </button>
            </div>

            {/* Image Display */}
            <div className="modal-image-container">
              <img
                src={selectedArtwork.pages[currentPage]}
                alt={`${selectedArtwork.title} - Page ${currentPage + 1}`}
                className="modal-image"
              />
              
              {/* Navigation Buttons */}
              {selectedArtwork.pages.length > 1 && (
                <>
                  <button
                    className={`nav-button prev-button ${currentPage === 0 ? 'disabled' : ''}`}
                    onClick={prevPage}
                    disabled={currentPage === 0}
                  >
                    <ChevronLeft className="nav-icon" />
                  </button>
                  <button
                    className={`nav-button next-button ${currentPage === selectedArtwork.pages.length - 1 ? 'disabled' : ''}`}
                    onClick={nextPage}
                    disabled={currentPage === selectedArtwork.pages.length - 1}
                  >
                    <ChevronRight className="nav-icon" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <p className="artwork-description">{selectedArtwork.description}</p>
              {selectedArtwork.pages.length > 1 && (
                <div className="page-indicator">
                  <span className="page-info">
                    Page {currentPage + 1} of {selectedArtwork.pages.length}
                  </span>
                  <div className="page-dots">
                    {selectedArtwork.pages.map((_, index) => (
                      <button
                        key={index}
                        className={`page-dot ${index === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;