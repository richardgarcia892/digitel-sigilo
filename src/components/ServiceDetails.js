import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../services';

const ServiceDetails = () => {
  const { service } = useParams();
  const details = services[service];

  if (!details) {
    return <p>Servicio no encontrado o no especificado.</p>;
  }

  return (
    <div className="details-container">
      <h1>Detalles del Servicio</h1>
      <div className="detail">
        <h2>Servicio</h2>
        <p>{details.servicio}</p>
      </div>
      <div className="detail">
        <h2>Nombre de Equipo</h2>
        <p>{details.nombre}</p>
      </div>
      <div className="detail">
        <h2>IPs</h2>
        <p>{details.ips.join(', ')}</p>
      </div>
      <div className="detail">
        <h2>Puerto</h2>
        <p>{details.puerto}</p>
      </div>
      <div className="detail">
        <h2>F5</h2>
        <p>{details.f5}</p>
      </div>
      <div className="detail">
        <h2>Plataforma</h2>
        <p>{details.plataforma}</p>
      </div>
      <div className="detail">
        <h2>Observación</h2>
        <p>{details.observacion}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;