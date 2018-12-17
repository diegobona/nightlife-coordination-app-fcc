import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { showLoginForm } from '../store/actions'

let Navbar = ({ logged, showForm, showMyBars }) => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Night Life App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {
        logged
        ?
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/user/auth/logout">Logout <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mybars" onClick={() => showMyBars()}>My Bars</Link>
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