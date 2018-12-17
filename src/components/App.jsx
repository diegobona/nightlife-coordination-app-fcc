import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// import BarSearch from './BarSearch'
// import BarList from './BarList'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import Loader from './Loader'
import MyBars from './MyBars'
import BarSearcher from './BarSearcher'

import { checkUser, getBars } from '../store/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.user()
  }

  componentWillMount() {
  }

  componentDidMount() {
    if (localStorage.getItem('location')) {
      this.props.findBars(localStorage.getItem('location'))
    }
  }

  render() {
    if (!this.props.loading) return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' render={(props) => <BarSearcher {...props} findBars={this.props.findBars}/>} />
            <Route exact path='/mybars' component={MyBars} />
          </Switch>
          {/* <BarSearcher findBars={this.props.findBars} /> */}
          {/* <BarSearch findBars={this.props.findBars} />
          <Route path='/' exact component={BarList} /> */}
          {this.props.showLoginForm ? <LoginForm /> : null}
        </div>
      </BrowserRouter>
    )
    else return <Loader />
  }
}

const mapStateToProps = (state) => (
  {
    loading: state.loading,
    logged: state.auth.logged,
    showLoginForm: state.showLoginForm
  }
)

const mapDispatchToProps = (dispatch) => (
  { 
    user: () => dispatch(checkUser()),
    findBars: location => dispatch(getBars(location))
  }
)

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App

// {this.props.location && !this.props.error.error ? <BarList barList={this.props.bars} location={this.props.location} loading={this.props.loading}/> : null}