import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <i className="fa-solid fa-camera fa-beat fa-xl" style={{color: "#545454", marginRight: '7px'}}></i>
        <span style={{marginRight:'100px'}}>AddPosts</span>
          <Link className="navbar-brand" to="/">
            Главная страница
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="about">
                  О нас
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contacts">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav