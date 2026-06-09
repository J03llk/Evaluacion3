import { useState } from 'react';

export default function Formulario({ agregarVehiculo }) {
  // Estados para guardar lo que el usuario escribe
  const [patente, setPatente] = useState('');
  const [permanente, setPermanente] = useState(false);
  const [error, setError] = useState('');

  // Función que se ejecuta al presionar "Registrar"
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Validación de campo vacío
    if (patente.trim() === '') {
      setError('La patente no puede estar vacía.');
      return; // Detiene la ejecución
    }

    // 2. Validación de formato (4 letras y 2 números usando una Expresión Regular simple)
    const formatoPatente = /^[a-zA-Z]{4}[0-9]{2}$/;
    if (!formatoPatente.test(patente)) {
      setError('Formato inválido. Debe tener 4 letras y 2 números (Ej: ABCD12).');
      return;
    }

    // Si todo está bien, borramos errores y enviamos el vehículo al componente App
    setError('');
    agregarVehiculo({ 
      patente: patente.toUpperCase(), // Lo guardamos siempre en mayúsculas
      permanente: permanente 
    });

    // Limpiamos los inputs para el siguiente registro
    setPatente('');
    setPermanente(false);
  };

  return (
    <form className="formulario-caja" onSubmit={manejarEnvio}>
      <h2>Ingreso de Vehículo</h2>
      
      {/* Si hay un error, mostramos este mensaje en rojo */}
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

      <div className="grupo-input">
        <label>Patente:</label>
        <input 
          type="text" 
          placeholder="Ej: ABCD12" 
          value={patente}
          onChange={(e) => setPatente(e.target.value)} // Guarda el texto en el estado
        />
      </div>

      <div className="grupo-input">
        <label>¿Es permanente?</label>
        <input 
          type="checkbox" 
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)} // Guarda el click en el estado
        />
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
}