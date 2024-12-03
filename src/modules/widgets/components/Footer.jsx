import React from "react";
import './footer.css'

export const Footer = () => {
    return (
        <>
            <hr></hr>
            <footer className="x">
                <div className="footer">
                    <div className="texto">
                        <div className="container-izq">
                            <img id="logo_a" src="https://www.popeyes.com.pe/static/version1732798112/frontend/Ngr/popeyes/es_PE/images/logo.svg" alt="Logo"/>
                            <div>
                                Conéctate con nosotros
                                <div className="rs">
                                    <img id="insta" src="/instafoto.webp" alt="ig"></img>
                                    <img id="face" src="/facebook.png" alt="fb"></img>
                                </div>
                            </div>
                        </div>

                        <div className="productos">
                            <ul>
                                <li id="titulo">Nuestros Productos</li>
                                <li>Personales</li>
                                <li>Familiares</li>
                                <li>Banquetes</li>
                                <li>Sandwiches</li>
                            </ul>
                        </div>

                        <div className="ayuda">
                            <ul>
                                <li id="titulo">Ayuda</li>
                                <li>Comprobante Electrónico</li>
                                <li>Política de Datos Personales</li>
                                <li>Términos y Condiciones</li>
                                <li>Derecho de ARCO</li>
                                <li>Nuestro Locales</li>
                            </ul>
                        </div>

                        <div className="container-der">
                            <div className="reclamaciones">
                                <ul>
                                    <li id="titulo">Libro de Reclamaciones</li>
                                    <li>
                                        <a href="https://www.popeyes.com.pe/popeyes-reclamaciones/">
                                        <img id="libro" src="https://www.popeyes.com.pe/static/version1732798112/frontend/Ngr/popeyes/es_PE/images/libro-de-reclamaciones.jpg" alt="Libro"/>
                                        </a>
                                    </li>
                                </ul>       
                            </div>

                            <div className="metodos">
                                <ul className="met">
                                    <li id="titulo">Métodos de Pago</li>
                                    <li id="tarjetas"><img id="visa" src="https://www.popeyes.com.pe/static/version1732798112/frontend/Ngr/popeyes/es_PE/images/payment/visa.jpg" alt="Visa"></img>
                                <img id="master" src="https://www.popeyes.com.pe/static/version1732798112/frontend/Ngr/popeyes/es_PE/images/payment/master.jpg" alt="Mastercard"></img>
                                <img id="amex" src="https://www.popeyes.com.pe/static/version1732798112/frontend/Ngr/popeyes/es_PE/images/payment/amex.jpg" alt="Amex"></img></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                    <div className="copy">
                        <span> &#169; 2024 Grupo 5. Todos los derechos reservados</span>
                    </div>

            </footer>
        </>
    );
}
