import { CartWidget } from "./CartWidget";
import {Link} from 'react-router-dom'

import "./navbar.scss"

const NavBar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" id="navbar">
            <div className="container-fluid navbar__div" >
                <Link className="navbar-brand navbar__div__logo" to='/'>LEADMEC</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar__div__articulos" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active"  to="/categorias/incubadoras">Incubadoras</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/categorias/servocunas">Servocunas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/otros">Otros</Link>
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