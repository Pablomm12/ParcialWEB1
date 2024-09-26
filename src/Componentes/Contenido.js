import React, { useState, useEffect } from 'react';

const ContentFeed = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/350?random=${i + 1}`);
      setImages(urls);
    };
    fetchImages();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {images.map((imageUrl, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <img src={imageUrl} alt="Random" className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFeed;
