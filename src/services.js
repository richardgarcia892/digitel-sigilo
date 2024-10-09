const services = {
  service1: {
    id: 'service1',
    servicio: "Servicio 1",
    nombre: "Equipo 1",
    ips: ["192.168.1.1", "192.168.1.2"],
    puerto: "8080",
    f5: "F5-1",
    plataforma: "Plataforma 1",
    observacion: "Observación 1",
    weblogicUrl: "http://weblogic.service1.com",
    swaggerUrl: "http://swagger.service1.com",
    hasProperties: true,
    earUrl: "http://ear.service1.com",
    hasLogs: true
  },
  service2: {
    id: 'service2',
    servicio: "Servicio 2",
    nombre: "Equipo 2",
    ips: ["192.168.1.2", "192.168.1.3"],
    puerto: "8080",
    f5: "F5-1",
    plataforma: "Plataforma 2",
    observacion: "Observación 2",
    weblogicUrl: "http://weblogic.service2.com",
    swaggerUrl: "http://swagger.service2.com",
    hasProperties: true,
    earUrl: "http://ear.service2.com",
    hasLogs: true
  },
  // ... más servicios ...
};

export default services;
