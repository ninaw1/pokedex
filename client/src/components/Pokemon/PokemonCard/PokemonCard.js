import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Sprite = styled.img`
  width: 5em;
  height: 15em;
`

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 15px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.25);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: black; 
  &:focus, 
  &:hover, 
  &:visited, 
  &:link,
  &:active {
    text-decoration: none;
  }
`

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
  }

  componentDidMount() {
    const { name, url } = this.props
    // split url up by '/', and grab [] it by the end by doing url.split (get length of array it will build
    // subtract by 2 because we don't want the slash we want to number of the index 
    const pokemonIndex = url.split('/')[url.split('/').length - 2]
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
    
    this.setState({ 
      name: name, 
      imageUrl: imageUrl, 
      pokemonIndex: pokemonIndex 
    })
  }

  render() {
    return (
      <div className='col-md-3 col-sm-6 mb-5'>
      <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
				<Card className='card'>
						<h5 className='card-header'>{this.state.pokemonIndex}</h5>
            <Sprite 
              className='card-img-top rounded mx-auto mt=2'
              src={this.state.imageUrl}>
            </Sprite>
            <div className='card-body mx-auto'>
              <h6 className='card-title'>
              {/* this is because we want to map over pokemon with spaces in their name */}
              {/* we split with the space, map over with letters at index 0 then join it at subString 1 */}
              {this.state.name
                .toLowerCase()
                .split(' ')
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join(' ')}
              </h6>
            </div>
				</Card>	
      </StyledLink>
      </div>
    )
  }
}
