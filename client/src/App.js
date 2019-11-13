import React, { Component } from 'react'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'
import PokemonInfo from './components/Pokemon/PokemonInfo'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from './Assets/background.jpg'

class App extends Component {
  render() {
    return(
      <Router>
        <div className='App' style={{background: `url(${backgroundImage})`}}>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={DashBoard} />
              <Route exact path='/pokemon/:pokemonIndex' component={PokemonInfo} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App