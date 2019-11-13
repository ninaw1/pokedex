import React, { Component, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class NavBar extends Component {
	state = {
		pokeName: '', 
		pokemon: { }
	}

	handleFindChar = event => {
		event.preventDefault()
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeName}`)
			.then(({ data }) => {
				console.log(data)
				this.setState({ pokeName: '' })
			})
			.catch(e => console.log(e))
	}
	
	handleInputChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

  render() {
    return (
      <div>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top' 
				style={{
					backgroundColor: '#cc6699'
				}}>
					<a 
					href="#"
					className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>
						Pokedex
					</a>
					<form className='form-inline'>
						<input className='form-control mr-sm-2' type='text' placeholder='Search Pokemon' aria-label='Search' id='pokeName' onChange={this.handleInputChange} value={this.state.pokeName} />
						<button className='btn btn-outline-danger my-2 my-sm-0' onClick={this.handleFindChar} type='submit'>Search</button>
					</form>
				</nav>
      </div>
    )
  }
}


// import React, { useState } from 'react'
// import axios from 'axios'

// const SearchBar = _ => {
//   const [ pokeState, setPokeState ] = useState({ 
//     poke_name: '', 
//     pokemon: { }
//   })

//   pokeState.handleInputChange = event => {
//     setPokeState({ ...pokeState, [event.target.id]: event.target.value })
//   }

//   pokeState.handleFindChar = event => {
//     event.preventDefault()
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeState.poke_name}`)
//       .then(({ data }) => {
//         console.log(data)
//         setPokeState({ ...pokeState, pokemon: data })
//       })
//       .catch(e => console.error(e))
//   }

//   return (
//     <div>
//       <form>
//         <p>
//           <label htmlFor='poke_name'>Pokemon</label>
//           <br />
//           <input id='poke_name' type='text' onChange={pokeState.handleInputChange} value={pokeState.poke_name} />
//         </p>
//         <p>
//           <button onClick={pokeState.handleFindChar}>Search!</button>
//         </p>
//       </form>
//     </div>
//   )
// }

// export default SearchBar

