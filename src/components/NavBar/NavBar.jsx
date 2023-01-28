import CartWidget from "./CartWidget"

function NavBar () {

  return(
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Calzados</a>
          <div class="navbar-collapse" id="navbarNavDropdown">
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
          <CartWidget/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar