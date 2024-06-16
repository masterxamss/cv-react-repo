import React from "react";
import Banner from "../components/Banner";
import ImgCard1 from "../assets/images/blog/coder.jpg";
import ImgCard2 from "../assets/images/blog/croissance.jpg";
import ImgCard3 from "../assets/images/blog/google.jpg";
import ImgCard4 from "../assets/images/blog/screens.jpg";
import ImgCard5 from "../assets/images/blog/seo.jpg";
import ImgCard6 from "../assets/images/blog/technos.png";


const Blog = () => {
  return (
    <main>
      <Banner />
      <section className="blog-container">
        <h1 className="text-uppercase text-center fluid pt-4">Blog</h1>
        <h2 className="text-center fluid fs-5">
          Retrouvez ici quelques articles sur le développement web.
        </h2>
        <span></span>
        {/* CARDS */}
        <div className="container">

          <div className="row">

            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card">
                <img src={ImgCard1} className="card-img-top" alt="image code"></img>
                <div className="card-body">
                  <h5 className="card-title">Coder son site en HTML/CSS</h5>
                  <p className="card-text">
                    Some quick example text to build on the carde title ande make up the bulk of card's content
                  </p>
                  <button type="button" className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publié le 22 août 2022
                  </small>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card">
                <img src={ImgCard2} className="card-img-top" alt="image money"></img>
                <div className="card-body">
                  <h5 className="card-title">Vendre ses produits sur le web</h5>
                  <p className="card-text">
                    Some quick example text to build on the carde title ande make up the bulk of card's content
                  </p>
                  <button type="button" className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publié le 20 août 2022
                  </small>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card">
                <img src={ImgCard3} className="card-img-top" alt="image google"></img>
                <div className="card-body">
                  <h5 className="card-title">Se positionner sur Google</h5>
                  <p className="card-text">
                    Some quick example text to build on the carde title ande make up the bulk of card's content
                  </p>
                  <button type="button" className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publié le 1 août 2022
                  </small>
                </div>
              </div>
            </div>


            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card">
                <img src={ImgCard4} className="card-img-top" alt="image code"></img>
                <div className="card-body">
                  <h5 className="card-title">Coder en responsive design</h5>
                  <p className="card-text">
                    Some quick example text to build on the carde title ande make up the bulk of card's content
                  </p>
                  <button type="button" className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publié le 31 juillet 2022
                  </small>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card">
                <img src={ImgCard5} className="card-img-top" alt="image money"></img>
                <div className="card-body">
                  <h5 className="card-title">Techniques de référencement</h5>
                  <p className="card-text">
                    Some quick example text to build on the carde title ande make up the bulk of card's content
                  </p>
                  <button type="button" className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publié le 30 juillet 2022
                  </small>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="card">
                <img src={ImgCard6} className="card-img-top" alt="image google"></img>
                <div className="card-body">
                  <h5 className="card-title">Apprendre à coder</h5>
                  <p className="card-text">
                    Some quick example text to build on the carde title ande make up the bulk of card's content
                  </p>
                  <button type="button" className="btn btn-primary btn-sm">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Publié le 12 juillet 2022
                  </small>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>
    </main>
  );
};

export default Blog;
