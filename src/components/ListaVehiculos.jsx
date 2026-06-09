import CardVehiculo from './CardVehiculo';

export default function ListaVehiculos({ vehiculos }) {
  return (
    <div className="lista-contenedor">
      {vehiculos.length === 0 ? (
        <p>No hay vehículos registrados en este momento.</p>
      ) : (
        vehiculos.map((vehiculo) => (
          <CardVehiculo key={vehiculo.patente} vehiculo={vehiculo} />
        ))
      )}
    </div>
  );
}