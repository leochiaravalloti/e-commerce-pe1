import { CartWidget } from "./CartWidget";
import "./navbar.scss"

const NavBar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" id="navbar">
            <div className="container-fluid navbar__div" >
                <a className="navbar-brand navbar__div__logo" href="#">LEADMEC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar__div__articulos" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Incubadoras</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Cunas termicas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fotoestimuladores</a>
                        </li>
                        <li className="nav-item navbar__articulo__carrito">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default NavBar