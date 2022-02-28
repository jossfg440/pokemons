import React from 'react'
import iconoMas from '../images/plus-solid.svg'

const BuscarPokemons = (props) => {
    return (
	<div class="header">
	     <p> Listado de Pokemon </p>
	    <input className="inputSearch" placeholder="Buscar" value ={props.patronBusqueda}  onChange={props.onChange} />
	    <button  className="btnNuevo" onClick={props.onClickNuevo}>
	    <img src={iconoMas} background="#" height="14" width="10" alt="Nuevo"/><span>Nuevo</span>
	    </button>
	</div>
    )
}

export default BuscarPokemons



