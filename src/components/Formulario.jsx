import { useState } from 'react';

export default function Formulario({ agregarVehiculo }) {
  const [patente, setPatente] = useState('');
  const [permanente, setPermanente] = useState(false);
  const [error, setError] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (patente.trim() === '') {
      setError('La patente no puede estar vacía.');
      return;
    }

    const formatoPatente = /^[a-zA-Z]{4}[0-9]{2}$/;
    if (!formatoPatente.test(patente)) {
      setError('Formato inválido. Debe tener 4 letras y 2 números (Ej: ABCD12).');
      return;
    }

    setError('');
    agregarVehiculo({ 
      patente: patente.toUpperCase(),
      permanente: permanente 
    });

    setPatente('');
    setPermanente(false);
  };

  return (
    <form className="formulario-caja" onSubmit={manejarEnvio}>
      <h2>Ingreso de Vehículo</h2>
      
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

      <div className="grupo-input">
        <label>Patente:</label>
        <input 
          type="text" 
          placeholder="Ej: ABCD12" 
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
        />
      </div>

      <div className="grupo-input">
        <label>¿Es permanente?</label>
        <input 
          type="checkbox" 
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
}