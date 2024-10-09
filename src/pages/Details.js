import React from 'react';
import ServiceDetails from '../components/ServiceDetails';
import ActionBar from '../components/ActionBar';
import { useParams } from 'react-router-dom';
import services from '../services';

const Details = () => {
  const { service: serviceId } = useParams();
  const service = services[serviceId];

  return (
    <>
      <main className="container">
        <ServiceDetails service={service} />
      </main>
      <ActionBar service={service} />
    </>
  );
};

export default Details;