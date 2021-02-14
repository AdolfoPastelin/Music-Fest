document.addEventListener('DOMContentLoaded', function () {
	scrollNav(); //? nombre de la función creada

	navegacionFija();
});

function scrollNav() {
	const enlaces = document.querySelectorAll('.header__navegacion-principal a');
	// console.log(enlaces);

	//? addEventListener solo se puede usar con un elemento, por ese motivo, se itera primero cada enlace
	enlaces.forEach(function (enlace) {
		enlace.addEventListener('click', function (e) {
			e.preventDefault();

			// console.log(e.target.attributes.href.nodeValue); //arroja el id (ej. #galery)
			const seccion = document.querySelector(e.target.attributes.href.nodeValue);

			seccion.scrollIntoView({
				behavior: 'smooth',
			});
		});
	});
}

function navegacionFija() {
	const barra = document.querySelector('.header');

	//Registrar el Intersection Observer
	const observer = new IntersectionObserver(function (entries) {
		if (entries[0].isIntersecting) {
			//si el scroll intersecta con la seccion de .video, eliminará la barra de menú fija
			barra.classList.remove('fijo'); 
		} else {
			//si el scroll no intersecta con la seccion de .video, agregará la barra de menú fija
			barra.classList.add('fijo');
		}
	});

	//Elemento a observar
	observer.observe(document.querySelector('.video'));

}
