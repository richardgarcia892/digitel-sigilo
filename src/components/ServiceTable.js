import React from 'react';
import { Link } from 'react-router-dom';
import services from '../services';

const ServiceTable = () => (
  <div className="table-container">
    <h2>Tabla de Servicios</h2>
    <table>
      <thead>
        <tr>
          <th>Servicio</th>
          <th>Nombre de Equipo</th>
          <th>IPs</th>
          <th>Puerto</th>
          <th>F5</th>
          <th>Plataforma</th>
          <th>Observación</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(services).map(([key, service]) => (
          <tr key={key}>
            <td><Link to={`/details/${key}`}>{service.servicio}</Link></td>
            <td>{service.nombre}</td>
            <td>{service.ips.join(', ')}</td>
            <td>{service.puerto}</td>
            <td>{service.f5}</td>
            <td>{service.plataforma}</td>
            <td>{service.observacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ServiceTable;