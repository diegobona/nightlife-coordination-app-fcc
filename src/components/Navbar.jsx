import React from 'react'
import { connect } from 'react-redux'

import { showLoginForm } from '../store/actions'

let Navbar = ({ logged, showForm }) => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Night Life App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {
        logged
        ?
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/user/logout">Logout <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">My Bars</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
        :
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href={null} onClick={() => showForm(true)}>Login <span className="sr-only">(current)</span>
                    </a>
                </li>
            </ul>
        </div>
        }
    </nav>
)

const mapStateToProps = state => (
    {
        logged: state.auth.logged
    }
)

const mapDispatchToProps = dispatch => (
    { 
        showForm: bool => dispatch(showLoginForm(bool))
    }
)

Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default Navbar