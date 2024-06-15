import React from 'react'
import heroImg from '../assets/images/hero-bg.jpg'
import aboutImg from '../assets/images/john-doe-about.jpg'

const Home = () => {
  return (
    <main>
      <section className='hero-banner'>
        <img src={heroImg} alt="banner image"></img>
        <div className="content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className='btn btn-primary fw-bold px-4'>En savoir plus</button>
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <div className="about-content">
            <h3>À propos</h3>
            <article>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est modi quia voluptatum, tempore a in. Quibusdam fugit reprehenderit ea impedit esse amet dolor cum quos, necessitatibus praesentium cumque nihil nemo! Veniam, placeat sint. Quibusdam in necessitatibus molestias molestiae voluptatibus ipsum. Dolorem autem fugiat aut facilis, accusamus atque illo excepturi commodi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque architecto corrupti et tenetur cupiditate ipsam veritatis. Hic accusamus, a saepe atque nesciunt ipsum quia quisquam recusandae officiis iste sapiente!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro asperiores, adipisci impedit ullam consequatur nemo cumque quae sapiente laboriosam iste.
              </p>
            </article>
          </div>
          <div className="skills">
            <img src={aboutImg} alt="about image"></img>
            <h4>Mes compétences</h4>
          </div>
        </div>    
      </section>    
    </main>
    
  )
}

export default Home