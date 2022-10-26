import React,{useContext} from 'react';
import context from "../../context"
const Footer = () => {
    const {theme}=useContext(context)
    return (
        <>
            <footer className="bg-light text-center text-white" id={theme}>
               
                <div className="container p-4 pb-0">
                    
                    <section className="mb-4">
                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                       
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                    
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                        
                        <a
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#333333" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © {new Date().getFullYear()} Copyright:
                    <a className="text-white mx-2" href="tel://+998997867075">Abduhamid Botirov</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
};

export default Footer;