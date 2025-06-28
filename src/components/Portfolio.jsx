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
      category: "Comic Page",
      thumbnail: "spiderman-commissione/3colori.jpg",
      pages: [
        "spiderman-commissione/1bozza.jpg",
        "spiderman-commissione/wip.jfif",
        "spiderman-commissione/2inchiostri.jpg",
        "spiderman-commissione/3colori.jpg",
      ],
    },
    {
      id: 2,
      title: "Demon Slayer",
      category: "Commission",
      thumbnail: "demon-slayer-commissione/3 demon slayer colori.jpg", 
      pages: [
        "demon-slayer-commissione/2 demon slayer commissione.jpg",
        "demon-slayer-commissione/3 demon slayer colori.jpg"
      ],
    },
    {
      id: 3,
      title: "The Amazing Spiderman",
      category: "Comic",
      thumbnail: "the-amazing-spiderman/3 spider-man.jpg",
      pages: [
        "the-amazing-spiderman/1 spider-man.jpg",
        "the-amazing-spiderman/2 spider-man.jpg",
        "the-amazing-spiderman/3 spider-man.jpg",
        "the-amazing-spiderman/4 spider-man.jpg",
        "the-amazing-spiderman/5 spider-man.jpg"

      ],
    },
    {
      id: 4,
      title: "Wolverine",
      category: "Character Design", 
      thumbnail: "wolverine/6 wolverine colorato.jpg",
      pages: [
        "wolverine/5 wolwerine ink.jpg",
        "wolverine/6 wolverine colorato.jpg",
      ],
    },
    {
      id: 5,
      title: "Wolverine vs Deadpool",
      category: "Comic Scene",
      thumbnail: "deadpool-vs-wolverine/8 deadpool vs wolverine colorata.jpg",
      pages: [
        "deadpool-vs-wolverine/7 deadpool vs wolwerine ink.jpg",
        "deadpool-vs-wolverine/8 deadpool vs wolverine colorata.jpg"
      ],
    },
    {
      id: 6,
      title: "Tavole Bugs",
      category: "Comic",
      thumbnail: "tavole-bugs/TAV.4.jpg",
      pages: [
        "story-board-samuel/1.jpg",
        "story-board-samuel/2.jpg",
        "story-board-samuel/3.jpg",
        "story-board-samuel/4.jpg",
        "tavole-bugs/TAV.1.jpg",
        "tavole-bugs/TAV.2.jpg",
        "tavole-bugs/TAV.3.jpg",
        "tavole-bugs/TAV.4.jpg"
      ],
    },
    {
      id: 7,
      title: "Spider Gwen",
      category: "Comic",
      thumbnail: "spider-gwen/5.jpg",
      pages: [
        "spider-gwen/1.jpg",
        "spider-gwen/2.jpg",
        "spider-gwen/3.jpg",
        "spider-gwen/4.jpg",
        "spider-gwen/5.jpg"
      ],
    },
    {
      id: 8,
      title: "Tigre Character Design",
      category: "Character Design",
      thumbnail: "tigre-character/11 tigre character design.jpg",
      pages: [
        "tigre-character/11 tigre character design.jpg"
      ],
    },
    {
      id: 9,
      title: "Esploratori",
      category: "Comic",
      thumbnail: "esploratori/1 color.jpg",
      pages: [
        "esploratori/1 color.jpg",
        "esploratori/2 color.jpg",
        "esploratori/3 color.jpg",
      ],
    },
    {
      id: 10,
      title: "Francese",
      category: "Comic",
      thumbnail: "portfolio-francese/6.png",
      pages: [
        "portfolio-francese/1.png",
        "portfolio-francese/2.png",
        "portfolio-francese/3.png",
        "portfolio-francese/4.png",
        "portfolio-francese/5.png",
        "portfolio-francese/6.png"
      ],
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
  const handleKeyPress = React.useCallback((e) => {
    if (!selectedArtwork) return;
    
    if (e.key === 'Escape') {
      closeArtwork();
    } else if (e.key === 'ArrowLeft') {
      prevPage();
    } else if (e.key === 'ArrowRight') {
      nextPage();
    }
  }, [selectedArtwork, currentPage]);

  // Add keyboard listener when modal is open
  React.useEffect(() => {
    if (selectedArtwork) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedArtwork, handleKeyPress]);

  return (
    <div className="portfolio-container">
      {/* Portfolio Header */}
      <div className="portfolio-header">
        <h2 className="portfolio-title">Portofolio</h2>
        <p className="portfolio-subtitle">
          A collection of comic illustrations, character designs, and concept art!
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