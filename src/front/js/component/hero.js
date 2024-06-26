import React from "react";


export const Hero = () => {

    return (



        <div className="p-5 text-start bg-image rounded-3 mb-5" style={{
            background: "url('https://www.spain.info/.content/images/cabeceras-grandes/madrid/Parque-Nat-Cumbre-cirso-Lagunas-Penalara-t2800952.jpg') no-repeat",
            backgroundSize: "cover",
            height: "100vh"
        }}>
            <div className="mask h-100">
                <div className="d-flex flex-column justify-content-center align-items-start h-100 w-100">
                    <div className="text-white">
                        <h1 className="mb-3">UNA COMPAÑÍA QUE R-ACCIONA</h1>
                        <h4 className="mb-3">En ACCIONA creemos que el cambio empieza por nosotros</h4>
                        <a data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="/demo" role="button">+info</a>
                    </div>
                </div>
            </div>
        </div>








    )
}

