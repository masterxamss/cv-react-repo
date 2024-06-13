import React from 'react'

const Header = () => {
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-dark text-ligth text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand text-light" href="#">John Doe</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-dark text-light rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1 text-secondary">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded text-secondary" href="#">Services</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Réalisations</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Blog</a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Me Contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header