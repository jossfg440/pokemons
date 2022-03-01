import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListarPokemons from './ListarPokemons'

test('lista pokemons', () => {
    const listaPokemonsMostrar =[{
		   name: 'pikachu',
		   imagen: 'https://pokemon/picaku.png',
		   attack: 50,
	           defense: 60,
	           id: 1,
	           hp: 0,
	           idAuthor: 1,
	           type: 'normal'
		    
    }]  

  render(<ListarPokemons listaPokemonsMostrar={listaPokemonsMostrar} />)
  const element = screen.findAllByText('pikachu')
  expect(element).toBeDefined()
})

test('click en el boton eliminar una vez', async () => {
 const pokemon =[{
		   name: 'pikachu',
		   imagen: 'https://pokemon/picaku.png',
		   attack: 50,
	           defense: 60,
	           id: 1,
	           hp: 0,
	           idAuthor: 1,
	           type: 'normal'
		    
    }]

  const mockHandler = jest.fn()

    render(
	
	 <ListarPokemons listaPokemonsMostrar={pokemon} eliminarPokemon={mockHandler} /> 
  )

    const button = screen.queryAllByRole('button')
   
    userEvent.click(button[1])
     
  expect(mockHandler.mock.calls).toHaveLength(1)
})
