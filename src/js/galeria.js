//* Event listeners
document.addEventListener('DOMContentLoaded', function () {
	crearGaleria();
});

//* Funciones
function crearGaleria() {
	const galeria = document.querySelector('.galeria__imagenes');

	//Generar las imagenes -> <img src="`build/img/thumb/n.webp`">
	for (let i = 1; i <= 12; i++) {
		const imagen = document.createElement('IMG');
		imagen.src = `build/img/thumb/${i}.webp`;
		//atributos personalizados en HTML5
		imagen.dataset.imagenId = i;

		//? Añadir la función de mostrarImagen
		imagen.onclick = mostrarImagen;

		const lista = document.createElement('LI');
		lista.appendChild(imagen); // <li><img> ...

		galeria.appendChild(lista); //<ul><li><img>
	}
}

function mostrarImagen(e) {
	const id = parseInt(e.target.dataset.imagenId);

	//Generar la imagen grande
	const imagen = document.createElement('IMG');
	imagen.src = `build/img/grande/${id}.webp`;

	const overlay = document.createElement('DIV');
	overlay.appendChild(imagen);
	overlay.classList.add('overlay');

	//? funcionalidad de cerrar imagen al clickear fuera de la misma
	overlay.onclick = () => {
		overlay.remove();
		body.classList.remove('fijar-body');
	};

	//boton para cerrar la imagen
	const cerrarImagen = document.createElement('P');
	cerrarImagen.textContent = 'X';
	cerrarImagen.classList.add('btn-cerrar');

	//? funcionalidad del boton de cerrar imagen
	cerrarImagen.onclick = () => {
		overlay.remove();
		body.classList.remove('fijar-body');
	};

	overlay.appendChild(cerrarImagen);

	//mostrar HTML
	const body = document.querySelector('body');
	body.appendChild(overlay);
	body.classList.add('fijar-body');
}
