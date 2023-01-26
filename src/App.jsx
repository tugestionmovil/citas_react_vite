import { useEffect, useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  //const [count, setCount] = useState(0)

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

const eliminarPaciente=(id)=>{
  const respuesta= confirm('¿Desea Eliminar este paciente?')
  if(respuesta) {const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id)
  setPacientes(pacientesActualizados)}
  

}

/*   useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []); */


  return (
    <div className="container mx-auto mt-20">
    <Header  />
    <div className="mt-12 md:flex">
        <Formulario 
        //Se esta pasando el arreglo pacientes y su modificador al componente formulario, esto porque los props son inmutables, no se pueden alterar los props originales, en este caso no se debe alterar el arreglo pacientes, lo que se hace es modificar su estado a traves del modificador setPacientes 
        pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
         
          
        />
      <ListadoPacientes 
      //En este caso particular, la prop pacientes fue modificada por setPacientes en el componente formulario, es decir se agrego datos atraves del modificador creando un nuevo arreglo que se une al arreglo original, este arreglo pacientes ahora es enviado al hijo listadoPacientes para ser consumidor en este componente, no se pasa el modificador porque solo sera de lectura
        pacientes={pacientes}
         setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
         
      />
   
    </div>

    </div>
  )
}

export default App
