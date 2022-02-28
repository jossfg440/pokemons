import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NuevoPokemonForm from './NuevoPokemonForm'
import userEvent from '@testing-library/user-event'

test('Probar forma de ingreso <NuevoPokemonForm /> ', () => {
  const nuevoPokemon = jest.fn()
  
  render(<NuevoPokemonForm onSubmit={nuevoPokemon} />)

  const input = screen.getByAltText('Nombre')  
  const botonGuardar = screen.getByText('GUARDAR')
   
  userEvent.type(input, 'Pikachu' )
  userEvent.click(botonGuardar)
    
  expect(nuevoPokemon.mock.calls).toHaveLength(1)
  
})
