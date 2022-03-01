import React, { useState,useEffect } from 'react'
import axios from 'axios'
import BuscarPokemons from './components/BuscarPokemons'
import ListarPokemons from './components/ListarPokemons'
import NuevoPokemonForm from './components/NuevoPokemonForm'
import pokemonServicio from './servicios/pokemons'


const  App = () => {
  const [ pokemons, setPokemons ] = useState([])
  const [ nuevoId, setNuevoId ] = useState('') 
  const [ nuevoNombre, setNuevoNombre ] = useState('')
  const [ nuevaImagen, setNuevaImagen ] = useState('')
  const [ nuevoAtaque, setNuevoAtaque ] = useState('')
  const [ nuevaDefensa, setNuevaDefensa ] = useState('')
  const [ nuevaBusqueda, setNuevaBusqueda ] = useState('') 

    useEffect(() => {
       axios
	  .get('https://pokemon-pichincha.herokuapp.com/pokemons')
	  .then(res => {
	     setPokemons(res.data)
           })
      
    }, [])

    
   const addPokemon = (event) => {
    event.preventDefault()
     const pokemonObject ={
		   name: nuevoNombre,
		   imagen: nuevaImagen,
		   attack: nuevoAtaque,
		   defense: nuevaDefensa,
		   id: pokemons.length + 1,
		   hp: 0,
		   idAuthor: 1,
		   type: "normal" 
		}  
       console.log('p',pokemonObject)
     let pokemonDuplicado = pokemons.filter ( pokemon =>  {
    	
	    if ( pokemon.name === nuevoNombre) {
		return nuevoNombre
	    } else
		return false
         			      
     } )

     if ( pokemonDuplicado.length === 0)
     {
	
	 pokemonServicio
	  .create(pokemonObject)
	  .then(returnarPokemon => {
	      setPokemons(pokemons.concat(returnarPokemon))
	      console.log(returnarPokemon)
	      setNuevoNombre('')
	      setNuevaImagen('')
	      setNuevoAtaque('')
	      setNuevaDefensa('')
	      setNuevoId('')
          })
	  .catch(error => {
	      console.log('E::',error.response.data)
	         
		
	  })
	 
     }else {
	 const pokemonUpdate = pokemonDuplicado[0]
	 
	  if( window.confirm(`${pokemonUpdate.name} sera actualizado. Desea continuar?`) )
	 {
	        
	     pokemonUpdate.name = nuevoNombre
	     pokemonUpdate.image = nuevaImagen
	     pokemonUpdate.attack = nuevoAtaque
	     pokemonUpdate.defense = nuevaDefensa
	     pokemonUpdate.hp=  pokemonObject.hp
	     pokemonUpdate.idAuthor=  pokemonObject.idAuthor
	     pokemonUpdate.type=  pokemonObject.type
	     
            pokemonServicio
	    .update(pokemonUpdate.id, pokemonUpdate)
	      .then(returnaPokemon => {
	      
	         
	       pokemonServicio
		.getAll()
	        .then(inicializaPokemons => {
	            setPokemons(inicializaPokemons)
		})   
	
	  })
	  .catch(error => {
	      console.log("ocurrio un error",error)	     
		
	  })   
	}

     }	 

   }    
   const handleCambiosBusqueda = (event) => {
	setNuevaBusqueda(event.target.value)
   }
   const handleCambioNombre = (event) => {
    setNuevoNombre(event.target.value)
     
   }
   const handleCambioImagen = (event) => {
    setNuevaImagen(event.target.value)
     
   }
   const handleCambioAtaque = (event) => {
    setNuevoAtaque(event)
     
   }
   const handleCambioDefensa = (event) => {
      setNuevaDefensa(event)
   }

  const handleLimpiarForma = (event) => {
      setNuevoNombre('')
	      setNuevaImagen('')
	      setNuevoAtaque('')
	      setNuevaDefensa('')
	      setNuevoId('')	
  }
  const listaPokemonsMostrar = nuevaBusqueda.length<0? pokemons:pokemons.filter(pokemon => pokemon.name.toLowerCase().match(nuevaBusqueda.toLowerCase()) )   

  const eliminarPokemon = (id,name) => {
	if( window.confirm(`Desea eliminar ${name}?`) )
	{    
 	 pokemonServicio
	   .deletePokemon(id)
	   .then(returnaPokemon => {
	       console.log(returnaPokemon)
	       pokemonServicio
		.getAll()
	        .then(iniciarPokemons => {
	            setPokemons(iniciarPokemons)
		     
           })
	       
	   })
	}    
  }
    
    const editarPokemon = (id,name,imagen,ataque,defensa) => {
      setNuevoNombre(name)
      setNuevaImagen(imagen)
      setNuevoAtaque(ataque)
      setNuevaDefensa(defensa)
      setNuevoId(id)	
	
  }	
  return (
	  <div className="container">
	 
          <BuscarPokemons patronBusqueda ={nuevaBusqueda} onChange={handleCambiosBusqueda} onClickNuevo ={handleLimpiarForma} />
	  <ListarPokemons listaPokemonsMostrar ={listaPokemonsMostrar} eliminarPokemon={eliminarPokemon} editarPokemon={editarPokemon} />
	 
	  <NuevoPokemonForm
                   nuevoNombre={nuevoNombre}
                   nuevaImagen={nuevaImagen}
                   nuevoAtaque={nuevoAtaque}
                   nuevaDefensa={nuevaDefensa}
      onChangeNombre={handleCambioNombre}
      onChangeImagen={handleCambioImagen}
      onChangeAtaque={handleCambioAtaque}
      onChangeDefensa={handleCambioDefensa}
      onSubmit={addPokemon}
          />
    </div>	  
  )
}

export default App;
