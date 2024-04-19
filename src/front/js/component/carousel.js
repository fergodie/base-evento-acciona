import React, { useState, useEffect } from 'react';

export const Carousel = () =>  {
    // Estado para mantener el índice de la imagen actual
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Datos de las imágenes
    const images = [
      "https://picsum.photos/id/238/400/150",
      "https://picsum.photos/id/237/400/150",
      "https://picsum.photos/id/239/400/150"
    ];
  
    // Función para mostrar la siguiente imagen en el carousel
    const showNextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Efecto para cambiar las imágenes automáticamente cada 3 segundos
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
                  <h5>{`Slide ${index + 1} label`}</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
}

