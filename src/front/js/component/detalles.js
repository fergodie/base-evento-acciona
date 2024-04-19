import React from "react";



export const Detalles = () => {
    return (

        <div className="container">
            <section className="text-center mt-5 p-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                        <i className="fas fa-cubes fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">5000+</h5>
                        <h6 className="fw-normal mb-0">Components</h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                        <i className="fas fa-layer-group fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">490+</h5>
                        <h6 className="fw-normal mb-0">Design blocks</h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
                        <i className="fas fa-image fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">100+</h5>
                        <h6 className="fw-normal mb-0">Templates</h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
                        <i className="fas fa-plug fa-3x text-danger mb-4"></i>
                        <h5 className="text-secondary fw-bold mb-3">28</h5>
                        <h6 className="fw-normal mb-0">Plugins</h6>
                    </div>
                </div>
            </section>
        </div>
    );
};