import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import BarSearch from './BarSearch'
import BarList from './BarList'
import Navbar from './Navbar'

import { checkUser, getBars } from '../store/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.checkUser()
  }

  componentDidMount() {
    if (localStorage.getItem('location')) {
      this.props.findBars(localStorage.getItem('location'))
    }
  }

  render() {
    console.log('Logged: ' + this.props.logged)
    // if (true) return <div className='container'><Loader /></div>

    return (
      // <Route path="/" onEnter>
      //   <Route path="login" component={Navbar} />
      //   <Route path="logout" component={Logout} />
      //   <Route path="checkout" component={Checkout} />
      // </Route>
      <div className='container'>
        <Navbar />
        <BarSearch findBars={this.props.findBars} />
        {this.props.location && !this.props.error ? <BarList barList={this.props.bars} location={this.props.location} loading={this.props.loading}/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    loading: state.loading,
    logged: state.auth.logged,
    bars: state.bars.bars,
    location: state.bars.location,
    error: state.error
  }
)

const mapDispatchToProps = (dispatch) => (
  { 
    checkUser: () => dispatch(checkUser()),
    findBars: location => dispatch(getBars(location))
  }
)

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App