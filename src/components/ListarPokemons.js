import React from 'react'
import iconoEditar from '../images/pencil-solid.svg'
import iconoEliminar from '../images/trash-can-regular.svg'

const Button = (props) => (
  <button onClick={props.handleClick}>
	<img src={props.text==='Editar'?iconoEditar:iconoEliminar} height="14" width="10" alt={props.text} />
  </button>
)


const ListarPokemons = (props) => {
  
    return (
	<div class="content">
	<table className="tabla">
  <tbody>
    <tr>
      <th>Nombre </th>
      <th>Imagen </th>
      <th>Ataque </th>
      <th>Defensa </th>
      <th>Acciones </th>
    </tr>
   </tbody>
    
        
            { props.listaPokemonsMostrar.map( pokemon =>
					     <tr key={pokemon.id}>
					      <td  className="tablaNombre"> { pokemon.name} </td>
					      <td className="tablaImagen"> <img src={pokemon.image} height="14" width="10" alt="Imagen" /> </td>
					      <td className="tablaAtaque"> {pokemon.attack} </td>
					      <td className="tablaDefensa"> {pokemon.defense} </td>
					      <td className="tablaAcciones"> 
					      <Button handleClick={() => props.editarPokemon(pokemon.id,pokemon.name,pokemon.image,pokemon.attack,pokemon.defense)} text="Editar" />
					      <Button handleClick={() => props.eliminarPokemon(pokemon.id,pokemon.name)} text="Eliminar" />
					      </td>
  
					      
			                      </tr>                 
		      )
	 }	    
	
       </table>
      </div>
    
    )
}

export default ListarPokemons


