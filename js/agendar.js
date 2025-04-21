document.getElementById('form-agendar').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir la acción predeterminada del formulario
  
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje').value;
  
    // Aquí puedes hacer un fetch a un servidor o simplemente mostrar una alerta
    alert(`Cita agendada para ${nombre} el ${fecha} a las ${hora}. Mensaje: ${mensaje}`);
  
    // Limpiar el formulario
    document.getElementById('form-agendar').reset();
  });
  