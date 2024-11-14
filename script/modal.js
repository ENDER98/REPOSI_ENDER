

// Referencia al botón de abrir modal y al contenedor modal
const AbrirModalBotton = document.getElementById('openModal');
const AbrirModalBotton1 = document.getElementById('open_Modal');
const modal = document.getElementById('modal');
const modal1 = document.getElementById('modal1');
const cerrarModalBotton = document.getElementById('closeModal');
const cerrarModalBotton1 = document.getElementById('closeModal1');

// Función para mostrar el modal
AbrirModalBotton.addEventListener('click', () => {
  modal.style.display = 'flex';
});
AbrirModalBotton1.addEventListener('click', () => {
  modal1.style.display = 'flex';
});




// Función para cerrar el modal al hacer clic en el botón de cierre
cerrarModalBotton.addEventListener('click', () => {
  modal.style.display = 'none';
});
cerrarModalBotton1.addEventListener('click', () => {
  modal1.style.display = 'none';
});

// Cierra el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
});



// Función para actualizar el ancho de la barra de progreso
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = scrollPercentage + "%";
}



