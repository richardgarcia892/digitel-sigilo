document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('serviceTableBody');

  for (const [key, service] of Object.entries(services)) {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td><a href="details.html?service=${key}">${service.servicio}</a></td>
          <td>${service.nombre}</td>
          <td>${service.ips.join(', ')}</td>
          <td>${service.puerto}</td>
          <td>${service.f5}</td>
          <td>${service.plataforma}</td>
          <td>${service.observacion}</td>
      `;
    tableBody.appendChild(row);
  }
});
