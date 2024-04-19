import React, { useState, useEffect } from 'react';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/238/400/150",
    "https://picsum.photos/id/237/400/150",
    "https://picsum.photos/id/239/400/150"
  ];

  // Array para los títulos de las imágenes
  const titles = [
    "Energía limpia",
    "",
    "Nuestra nueva materia prima"
  ];

  const subTitles = [
    "Energía limpia",
    "Monedero virtual",
    "Nuestra nueva materia prima"
  ];

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(showNextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselMaterialStyle" className="carousel slide carousel-fade container" data-mdb-ride="carousel" data-mdb-carousel-init>
      <div className="carousel-inner rounded-5 shadow-4-strong">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{titles[index]}</h5> {/* Aquí se muestra el título correspondiente a la imagen */}
              <p>{subTitles[index]}</p> {/* Aquí se muestra el subtítulo correspondiente a la imagen */}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};


