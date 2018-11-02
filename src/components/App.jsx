import React, { Component } from 'react'
import BarSearch from './BarSearch'
import BarList from './BarList'
import Navbar from './Navbar'
import Loader from './Loader'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import parseBar from '../helpers/parseBar'

import async from 'async'


const _checkUser = () => {
  fetch('/user/auth')
  .then(response => {
    if (response.status !== 200) {  
      return Promise.reject('Zapytanie się nie powiodło');  
    }
    return response.json()
  })
  .then(data => {
    localStorage.setItem('user', JSON.stringify(data))
    console.log(data)
    return data
  })
}

class App extends Component {
  constructor(props) {
    super(props)
    _checkUser()

    this.state = {
      bars: [],
      location: '',
      logged: JSON.parse(localStorage.getItem('user')).user == false ? false : true,
      loading: false
    }

    this.findBars = this.findBars.bind(this)
  }

  findBars(e) {
    e.persist()
    e.preventDefault()
    
    fetch('/bar?location=' + e.target[0].value)  
    .then(response => {  
        // response jest instancją interfejsu Response
        if (response.status !== 200) {  
            return Promise.reject('Zapytanie się nie powiodło');  
        }
        
        // console.log(JSON.parse(localStorage.getItem('search')))
        // zwracamy obiekt typu Promise zwracający dane w postaci JSON
        return response.json()
    })
    .then(data => {
      localStorage.setItem('bars', JSON.stringify(parseBar(data)))
      localStorage.setItem('location', e.target[0].value)
      this.setState( { bars: parseBar(data), location: e.target[0].value })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    if (localStorage.getItem('bars')) {
      this.setState({ bars: JSON.parse(localStorage.getItem('bars')) })
      this.setState({ location: localStorage.getItem('location') })
    }
  }

  render() {
    console.log(this.state.logged)
    if (this.state.loading) return <div className='container'><Loader /></div>

    return (
      // <Route path="/" onEnter>
      //   <Route path="login" component={Navbar} />
      //   <Route path="logout" component={Logout} />
      //   <Route path="checkout" component={Checkout} />
      // </Route>
      <div className='container'>
        <Navbar />
        <BarSearch findBar={this.findBars}/>
        {this.state.bars.length > 0 ? <BarList barList={this.state.bars} location={this.state.location}/> : null}
      </div>
    )
  }
}

export default App