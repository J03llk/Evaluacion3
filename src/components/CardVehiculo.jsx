export default function CardVehiculo({ vehiculo }) {
  const claseDinamica = vehiculo.permanente ? 'card-permanente' : 'card-visita';

  return (
    <div className={`card ${claseDinamica}`}>
      <h3>{vehiculo.patente}</h3>
      <p>Tipo: {vehiculo.permanente ? 'Permanente' : 'Visita'}</p>
    </div>
  );
}