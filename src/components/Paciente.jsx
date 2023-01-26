import {useEffect} from 'react'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {




  //recibe la props paciente que viene de listado paceintes y es cada elemento del arreglo original pacientes que fue recorrido com map, como cadda elemento del arreglo (paciente) es un objeto, se accede a cada una de sus propiedade spara ser renderizada en el listado de pacientes, tambien se puede aplicar destructuring pra refactorizar el codigo y de esta forma solo se llama a la variablea nombre, propietario, etc al querer renderizarla con el html
  
  //const {nombre,propietario,email,fecha,sintomas}= paciente

  
 // console.log(paciente)
  return (
   
      <div className="shadow-md rounded-lg py-10 px-5 bg-white mb-10 ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre: {' '}<span className="font-normal  normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
      Propietario: {' '}<span className="font-normal  normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
      Email: {' '}<span className="font-normal  normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha Alta: {' '}<span className="font-normal  normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
      Sintomas: {' '}<span className="font-normal  normal-case">{paciente.sintomas}</span>
      </p>
    <div className="flex  justify-between  mt-10">
      <button type="button" className="py-2  px-10  bg-indigo-600  hover:bg-indigo-700  text-white  font-bold  uppercase  rounded  "
      onClick={()=>{
        setPaciente(paciente)
        console.log(paciente)
      }}>
      
      Editar</button>
 <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={()=>{eliminarPaciente(paciente.id)}}
                >Eliminar</button>
    </div>
      </div>
  )
}

export default Paciente
