import React, { Component } from 'react'
import PokemonList from '../Pokemon/PokemonList'

export default class DashBoard extends Component {
  render() {
    return (
      <div className='row'>
				<div className='col'>
					<PokemonList />
				</div>       
      </div>
    )
  }
}
