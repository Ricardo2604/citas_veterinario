import {useState, useEffect} from 'react'
import Error from './Error';


function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  //Funcion error para mostrar en pantalla:
  const [error, setError] = useState(false)

  //UseEffect
  useEffect(() =>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
  }, [paciente])


  //generar id
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validando Formulario
    if ( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      console.log('No se pueden ingresar espacios en blanco')
      setError(true)
      return;
    
    }
    setError(false)
    
    //Objeto de Paciente:
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
      
    }

    if(paciente.id) {
    //Editando el registro
      objetoPaciente.id = paciente.id
      

      const pacientesActualizados = pacientes.map( pacienteState => 
      pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else{
     //Nuevo Registro 
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }


    

    //Reiniciar el Formulario:
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    

    
    
  }
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">   
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-5'>
        Anade Pacientes y {' '}
        <span className="text-indigo-500 font-bold ">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit} 
          className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          
          {error && <Error>'Todos los Campos son Requeridos'</Error> }


          <div className='mb-5'>
            
            <label 
              htmlFor='mascota' className='block text-gray-700 uppercase font-bold'
              >Nombre de Mascota
            </label>
            
            <input
              id='mascota'
              type="text" 
              placeholder='Mascota'
              className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-450'
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)}
              
            />
          
          </div>
          
          <div className='mb-5'>
            
            <label 
              htmlFor='propietario' className='block text-gray-700 uppercase font-bold'
              >Nombre de Propietario
            </label>
            
            <input
              id='propietario'
              type="text" 
              placeholder='Propietario'
              className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-450'
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}
            />
          
          </div>

          <div className='mb-5'>
            
            <label 
              htmlFor='email' className='block text-gray-700 uppercase font-bold'
              >Email
            </label>
            
            <input
              id='email'
              type="email" 
              placeholder='Email'
              className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-450'
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />
          
          </div>

          <div className='mb-5'>
            
            <label 
              htmlFor='alta' className='block text-gray-700 uppercase font-bold'
              >Alta
            </label>
            
            <input
              id='alta'
              type="date" 
              placeholder='Email'
              className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-450'
              value={fecha}
              onChange={ (e) => setFecha(e.target.value)}
            />
          
          </div>

          <div className='mb-5'>
            
            <label 
              htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'
              >Sintomas
            </label>
            
            <textarea 
              className='border-2 rounded-lg w-full p-2 mt-2 placeholder-gray-450' 
              placeholder='Describe los Sintomas' 
              id="sintomas" 
              cols="30" 
              rows="10"
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value)}
              
                          
            ></textarea>
          </div>
          
          

          <input 
          type="submit"
          className='bg-indigo-500 text-white w-full p-3 uppercase font-bold rounded-lg hover:bg-indigo-800 cursor-pointer transition-all'
          value={paciente.id ? 'Editar paciente' : 'Agregar'}
          />


        </form>
    </div>
  )
}

export default Formulario


