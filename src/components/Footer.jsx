import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid py-3">
        <div className="row my-2">
            <div className="col-sm-12 col-md-6 col-lg-3 my-4 px-4">
                <div className="">
                    <h5>John Doe</h5>
                    <address>
                        40 Rue Laure Diebold <br/>
                        69009 Lyon, France <br/>
                        Téléphone : 06 20 30 40 50 
                    </address>
                    <div className='social-icons'>
                        <span>
                            <a href="https://github.com/github-john-doe" target='_blank'><i className="fa-brands fa-github"></i></a>
                        </span>
                        <span>
                            <a href="https://x.com/John_Doe_Crypt" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/john-doe-32a416248?trk=people-guest_people_search-card" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        </span>
                    </div>         
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-4 px-4">
                <div className="">
                    <h5>Liens utiles</h5>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="/">Accueil</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="/components/Infos">À propos</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="Services">Services</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="Contact">Me contacter</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="LegalMentions">Mention légales</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-4 px-4">
                <div className="">
                <h5>Mes dernières Réalisations</h5>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="">Fresh food</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="">Restaurant Akira</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="">Espace bien-être</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-4 px-4">
                <div className="">
                    <h5>Mes dernières articles</h5>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="">Coder son site en HTML/CSS</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="">Vendre ses produits sue le web</Link>
                    </div>
                    <div>
                        <i className="fa-solid fa-chevron-right fa-rotate-by" style={{color: '#0d6efd'}}></i>
                        <Link to="">Se positionner sur Google</Link>
                    </div>
                </div>
            </div>

            <div className="col text-center text-light bg-dark py-3">
                <small className='fw-bold'>&copy; Design by John Doe</small>
            </div>
            
        </div>
      </div>
      
    </footer>
  )
}

export default Footer