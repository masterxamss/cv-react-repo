import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-dark text-ligth text-uppercase" id="mainNav">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold" to="/">John Doe</Link>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-dark text-light rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link py-3 px-0 px-lg-3 text-secondary fw-bold" to="/">Accueil</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link py-3 px-0 px-lg-3 text-secondary fw-bold" to="services">Services</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link py-3 px-0 px-lg-3 text-secondary fw-bold" to="achievements">Réalisations</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link py-3 px-0 px-lg-3 text-secondary fw-bold" to="blog">Blog</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link py-3 px-0 px-lg-3 text-secondary fw-bold" to="contact">Me Contacter</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar