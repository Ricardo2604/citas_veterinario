import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"





function App() {
  const [pacientes, setPacientes] = useState([]);

  const [paciente, setPaciente] = useState({});

  //useEffect para localStorage ----------------------------------
  //useEffect que permite que cuando recargue la informacion se mantenga
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))  ?? []
      console.log("entro al useEffect");
      setPacientes( pacientesLS)
    }
    obtenerLS();
  }, [])
  
  

  //----------------------------------------------------------------

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ) );
  }, [pacientes])
  //-----------------------------------------------------------------



  const eliminarPaciente =  id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} 
          paciente={paciente}
          setPaciente={setPaciente}
          
          
        />
        
        
        
        <ListadoPaciente 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          
        />
      </div>
    </div>
  );
}

export default App;
