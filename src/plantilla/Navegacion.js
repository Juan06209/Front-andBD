import React from 'react'
import { Link } from 'react-router-dom'
export default function Navegacion() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                
                <Link  className="navbar-brand" to="/" style={{marginLeft: '15px '}}>Avanfitt</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">compras </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/crear">Registrar Compra</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}