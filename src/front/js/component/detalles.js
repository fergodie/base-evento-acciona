import React from "react";



export const Detalles = () => {
    return (

        <div className="container">
            <section className="text-center mt-5 p-5">
                <div className="row">

                <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                        <i className="fas fa-location-dot fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">400+</h5>
                        <h6 className="fw-normal mb-0">Puntos de R-acciona</h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
                        <i className="fas fa-solid fa-person fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">50mil+</h5>
                        <h6 className="fw-normal mb-0">Usuario activos</h6>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                        <i className="fas fa-solid fa-handshake fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">45+</h5>
                        <h6 className="fw-normal mb-0">Socios</h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                    </div>

                
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
                        <i className="fas fa-earth-americas fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">3m+</h5>
                        <h6 className="fw-normal mb-0"> Plastico recuperado</h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                    </div>

                    
                </div>
            </section>
        </div>
    );
};