import React from "react"
import { Carousel, initMDB } from "mdb-ui-kit";
import { useContext } from "react";

function Slider() {
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


export const Slider = () => {

    return (

        <div id="carouselMaterialStyle" className="carousel slide carousel-fade container" data-mdb-ride="carousel" data-mdb-carousel-init>

            <div className="carousel-indicators">
                <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
            </div>


            <div className="carousel-inner rounded-5 shadow-4-strong">

                <div className="carousel-item active">
                    <img src="https://picsum.photos/id/238/400/150" className="d-block w-100"
                        alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>


                <div className="carousel-item">
                    <img src="https://picsum.photos/id/237/400/150" className="d-block w-100"
                        alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>


                <div className="carousel-item">
                    <img src="https://picsum.photos/id/239/400/150" className="d-block w-100"
                        alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
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