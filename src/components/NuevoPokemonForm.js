import React from 'react'
import { Slider } from 'material-ui-slider';
import iconoGuardar from '../images/floppy-disk-solid.svg'
import iconoCancelar from '../images/xmark-solid.svg'

const NuevoPokemonForm = (props) => {
  
    return (
	 <form onSubmit={props.onSubmit}>
         <div className="footer">
	  <table className="tablaNuevoPokemon">
	    <tbody>
	    <tr>
	    <td colSpan="5" align="center">Nuevo Pokemon </td>
	    </tr>
	    </tbody><tbody>
	    <tr>
	    <td align="right">Nombre:<br/>
	    </td>
	    <td><input className="nuevoPokemonNombre" value={props.nuevoNombre} onChange={props.onChangeNombre} alt="Nombre" /></td>
	    <td><br/>
	    </td>
	    <td align="right">Ataque:</td>
	    <td>
	    <div className="slidecontainer"> 0<Slider defaultValue={props.nuevoAtaque===''?50:props.nuevoAtaque} step={10}  onChange={props.onChangeAtaque}></Slider>100</div>
	    </td>
	    </tr>
	    <tr>
	    <td align="right">Imagen:</td>
	    <td><input className="nuevoPokemonImagen" value={props.nuevaImagen} onChange={props.onChangeImagen}  /></td>
	    <td><br/>
	    </td>
	    <td align="right">Defensa:</td>
	    <td>
	    <div className="slidecontainer"> 0<Slider defaultValue={props.nuevoDefensa===''?50:props.nuevoDefensa} step={10} onChange={props.onChangeDefensa}></Slider>100</div>
	    </td>
	    </tr>
	    <tr>
	    <td><br/>
	    </td>
	    <td><br/>
	    </td>
	    <td><br/>
	    </td>
	    <td><br/>
	    </td>
	    <td><br/>
	    </td>
	    </tr>
	    <tr>
	    <td><br/>
	    </td>
	    <td colSpan="2" align="right"><button type="submit" className="btnGuardar" disabled={!props.nuevoAtaque}> <img src={iconoGuardar} background="#" height="14" width="10"   /><span>Guardar</span> </button></td>
	    <td colSpan="2"><button  className="btnCancelar">
	    <img src={iconoCancelar} background="#" height="14" width="10" /><span>Cancelar</span> </button></td>
	    <td><br/>
	    </td>
	    </tr>
	    </tbody>
	   </table>
	  </div>

        </form>
	    
    )
}

export default NuevoPokemonForm



