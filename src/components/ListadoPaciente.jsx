//rfce rafce
import Paciente from "./Paciente"



const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {
    
  

  return ( 
    <div className='md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll'>      
      
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-3xl ">Listado de Pacientes </h2> 
          <p className='text-lg mt-5 text-center mb-5'>
          Administra tus {' '}
          <span className="text-indigo-500 font-bold ">Pacientes y citas</span>
          </p>
          { pacientes.map( paciente => (        
            <Paciente
              key={paciente.id}
              paciente = {paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            
            />
  
          ))}
          
        </>

      ): (
        <>
          <h2 className="text-center font-black text-3xl ">No hay Pacientes </h2> 
          <p className='text-lg mt-5 text-center mb-5'>
          Comienza agregando tus  {' '}
          <span className="text-indigo-500 font-bold ">pacientes y Citas</span>
          </p>

        
        
        
        </>

      ) }


         
           
    </div>
  )
}

export default ListadoPaciente




