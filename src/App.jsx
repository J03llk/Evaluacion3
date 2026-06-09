import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const datosGuardados = localStorage.getItem('vehiculos');
    if (datosGuardados) {
      return JSON.parse(datosGuardados);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
  }, [vehiculos]);

  const cuposTotales = 10;
  const cuposDisponibles = cuposTotales - vehiculos.length;

  const agregarVehiculo = (nuevoVehiculo) => {
    const existe = vehiculos.find(v => v.patente === nuevoVehiculo.patente);
    if (existe) {
      alert("Esta patente ya está registrada en el sistema.");
      return;
    }

    if (vehiculos.length >= cuposTotales) {
      alert("Estacionamiento lleno. No hay cupos disponibles.");
      return;
    }

    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  return (
    <>
      <header>
        <h1>Gestión de Estacionamientos</h1>
        <p>Cupos Disponibles: {cuposDisponibles} / {cuposTotales}</p>
      </header>
      
      <main>
        <section className="panel-formulario">
          <Formulario agregarVehiculo={agregarVehiculo} />
        </section>
        
        <section className="panel-visualizacion">
          <ListaVehiculos vehiculos={vehiculos} />
        </section>
      </main>

      <footer>
        <p>Sistema de control de flujo vehicular</p>
      </footer>
    </>
  );
}

export default App;