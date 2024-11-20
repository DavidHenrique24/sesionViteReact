import viajes from './viajes.json';
import { useState } from 'react';// Importa useState que permite agregar y manejar estados de componentes

function App() {
  const [listaViajes, setListaViajes] = useState(viajes);
  const [ordenAscendente, setOrdenAscendente] = useState(true);
   // Inicializa el estado listaViajes con los datos importados de `viajes.json`
  // setListaViajes es la función que permite modificar este estado


  // Función para ordenar y desordenar los viajes por precio
  function ordenarViajes() {
    const viajesOrdenados = [...listaViajes].sort((a, b) => {
    // Crea una copia de listaViajes y la ordena segun el precio
    // Usa .sort() con una comparacion basada en ordenAscendente

      return ordenAscendente ? a.precio - b.precio : b.precio - a.precio;
      // Si ordenAscendente es true, ordena de menor a mayor y si es false, de mayor a menor
    });
    setListaViajes(viajesOrdenados);
    setOrdenAscendente(!ordenAscendente);// Invierte el estado de ordenAscendentesi era true, pasa a false
  }


  // Función para eliminar un viaje específico
  function eliminarViaje(id) {
    const viajesActualizados = listaViajes.filter(viaje => viaje.id !== id)     // Crea una nueva lista filtrando los viajes que no coincidan con el `id` proporcionado 
    setListaViajes(viajesActualizados); 
  }
  // Define el JSX que renderiza la interfaz de usuario.
  return (
    <div>
      <h1>Lista de Viajes</h1>
      <button onClick={ordenarViajes}>
        {/{ordenAscendente ? 'Ordenar por Precio Descendente' : 'Ordenar por Precio Ascendente'} /* Este es un if pero hecho de esta manera */ }
      </button>
      <table border="1">
        <thead>
          <tr>
            <th>Destino</th>
            <th>Duración</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaViajes.map((viaje) => (
            <tr key={viaje.id}>
              <td>{viaje.destino}</td>
              <td>{viaje.duracion}</td>
              <td>${viaje.precio}</td>
              <td>
                { <button onClick={() => eliminarViaje(viaje.id)}>Eliminar</button>/* Este llama a la funcion eliminarviaje segun el id del viaje */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
// Exporta el componente App para que pueda usarse en otros archivos y el default es para que sea el por defecto qye se mostrara primero
