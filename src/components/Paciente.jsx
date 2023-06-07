const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  


  const { nombre, propietario, email, fecha, sintomas, id } = paciente
  const handleEliminar = () => {
    const respuesta = confirm('Deseas Eliminar el Paciente')
    if (respuesta) {
      eliminarPaciente(id)}
  }

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className=" font-bold mb-3 text-gray-700 uppercase">
            Nombre de Mascota:{' '}
              <span className="font-normal normal-case">{nombre}</span>
          </p>

          <p className=" font-bold mb-3 text-gray-700 uppercase">
            Nombre de propietario:{' '}
              <span className="font-normal normal-case">{propietario}</span>
          </p>

          <p className=" font-bold mb-3 text-gray-700 uppercase">
            Email:{' '}
              <span className="font-normal normal-case">{email}</span>
          </p>

          <p className=" font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta:{' '}
              <span className="font-normal normal-case">{fecha}</span>
          </p>

          <p className=" font-bold mb-3 text-gray-700 uppercase">
            Sintomas:{' '}
              <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-between mt-5">
            <button
              type="button"
              className="py-2 px-4 bg-indigo-500 text-white font-bold uppercase rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"           
              onClick={() => setPaciente(paciente)}
            >
              Editar
            </button>

            <button
              type="button"
              className="py-2 px-4 bg-red-400 text-white font-bold uppercase rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={handleEliminar}
              >
                Eliminar
            </button>

          </div>
    </div>
    
  )
}

export default Paciente
