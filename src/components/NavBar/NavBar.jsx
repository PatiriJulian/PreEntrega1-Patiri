function NavBar () {

  return(
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Calzados</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Hombre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mujer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Niños</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Niñas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar