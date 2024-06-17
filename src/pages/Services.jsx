import React from 'react'
import Banner from '../components/Banner'

const Services = () => {
  return (
    <main>
      <Banner />
      <section className='services-container'>
        <div className="section-title">
          <h1 className="text-uppercase text-center fluid pt-4">Mon offre de services</h1>
          <h2 className="text-center fluid fs-5">
            Voici les prestations sur lesquelles je peux intervenir.
          </h2>
          <span></span>
          </div>
          <div className="services-content row p-5">
            <div className="col-sm-12 col-md-4 py-1">
              <article className='text-center shadow-sm p-3 mb-1 bg-body m-1 d-flex flex-column justify-content-center' style={{borderRadius: '10px', minHeight: "300px"}}>
                <i className="fa-solid fa-display" style={{color: '#0d6efd', fontSize: '30px'}}></i>
                <h5 className='text-uppercase mt-2'>Ux design</h5>
                <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilizateur. Son but est d'offrir une expérience de navigation optimale a l'internaute</p>
              </article>
            </div>
            
            <div className="col-sm-12 col-md-4 py-1">
              <article className='text-center shadow-sm p-3 mb-1 bg-body m-1 d-flex flex-column justify-content-center' style={{borderRadius: '10px', minHeight: "300px"}}>
                <i className="fa-solid fa-file-code" style={{color: '#0d6efd', fontSize: '30px'}}></i>
                <h5 className='text-uppercase mt-2'>Développement web</h5>
                <p>Le <strong>développement de sites web</strong> repose sur l'utilization des langages <i>HTML, CSS, JavaScript et PHP.</i></p>
              </article>
            </div>
            
            <div className="col-sm-12 col-md-4 py-1">
              <article className="text-center shadow-sm p-3 mb-1 bg-body m-1 d-flex flex-column justify-content-center" style={{borderRadius: "10px", minHeight: "300px"}}> 
                <i className="fa-solid fa-magnifying-glass-dollar" style={{color: "#0d6efd", fontSize: "30px"}}></i>
                <h5 className="text-uppercase mt-2">Référencement</h5>
                <p>Le <strong>référencement naturel d'un site,</strong> aussi appelé <i>SEO</i>, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultas de moteurs de recherche.</p>
              </article>
            </div>
              
          
        </div>
        
      </section>
    </main>
  )
}

export default Services