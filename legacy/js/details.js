document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get('service');
  const serviceDetails = document.getElementById('serviceDetails');

  if (service && services[service]) {
    const details = services[service];
    serviceDetails.innerHTML = `
          <div class="detail">
              <h2>Servicio</h2>
              <p>${details.servicio}</p>
          </div>
          <div class="detail">
              <h2>Nombre de Equipo</h2>
              <p>${details.nombre}</p>
          </div>
          <div class="detail">
              <h2>IPs</h2>
              <p>${details.ips.join(', ')}</p>
          </div>
          <div class="detail">
              <h2>Puerto</h2>
              <p>${details.puerto}</p>
          </div>
          <div class="detail">
              <h2>F5</h2>
              <p>${details.f5}</p>
          </div>
          <div class="detail">
              <h2>Plataforma</h2>
              <p>${details.plataforma}</p>
          </div>
          <div class="detail">
              <h2>Observación</h2>
              <p>${details.observacion}</p>
          </div>
      `;
  } else {
    serviceDetails.innerHTML = '<p>Servicio no encontrado o no especificado.</p>';
  }
});
