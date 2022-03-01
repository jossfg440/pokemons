import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NuevoPokemonForm from './NuevoPokemonForm'
import userEvent from '@testing-library/user-event'

test('Probar forma de ingreso <NuevoPokemonForm /> ', () => {
  const nuevoPokemon = jest.fn()
  
  const { container } =  render(<NuevoPokemonForm   onChangeNombre={nuevoPokemon} />)

  const botonGuardar = container.querySelector('.btnGuardar')
  const input = screen.getByAltText('Nombre')  
    
  userEvent.type(input, 'Pikachu' )
  userEvent.click(botonGuardar)
  expect(input.value).toBe('Pikachu')
  
})
