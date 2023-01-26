import{useEffect} from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  //Recibe la props pacientes que ya ha sido modificada en el formualrio con el modificador setPaceintes
     
  //console.log(pacientes);

  useEffect(()=>{
    if((pacientes.length >0)){
        console.log('Nuevo Paciente');
    }
  },[pacientes])
  return (

    <div className="md:w-1/2 lg:w-3/5 px-10 md:h-screen overflow-y-scroll">
    {pacientes && pacientes.length ? (
      <>
      <h2 className="font-black text-3xl text-center  mt-5 mb-10">Listado de Pacientes</h2>
      <p className="text-center">Administra tus{' '}<span className="text-indigo-600 font-bold ">Pacientes y Citas</span></p>

      

 {pacientes.map( paciente => (
     <Paciente     
       key ={paciente.id}                                        
        paciente={paciente}   
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        
        />   
        
         //Consulta si el arreglo paceintes no viene vacio, si es true, crea un arreglo nuevo a partir de la props pacientes y la envia al componente hijo Paciente para que sea agregada a cada tarjeta y sea visualizado por el usuario.  
  
  //Cuando se tiene un listado y se genera muchas veces el mismo componente, debe tener un key unico para que ese componente se muestre con un buen performance, si la informacion viene de un BD el key serria el id de esa BD ya que deberia ser unico                  
  ) )}

  </>
 ) :(
<>
  <h2 className="font-black text-3xl text-center  mt-5 mb-10">No Hay Pacientes</h2>
      <p className="text-center">Comienza agregando pacientes{' '}<span className="text-indigo-600 font-bold ">y aparecerean en este lugar</span></p>


</>



 )}
      


    </div>
  )
}

export default ListadoPacientes
