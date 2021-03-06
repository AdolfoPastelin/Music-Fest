//series va entre llaves porque gulp tiene muchas funciones (se escoge series).
//sass va sin llaves porque gulp-sass solo tiene una función.
//src -> para incluir la carpeta donde está alojado el archivo principal de SASS.
//dest -> para incluir en el pipe la carpeta de destino.
const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin'); //minificador de imagenes
const notify = require('gulp-notify'); //despliegue de notificaciones en consola
const webp = require('gulp-webp'); // convierte imagenes a formato .webp
const concat = require('gulp-concat');

//* Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//* Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

//* objeto que almacenara datos que se repiten demasiado y que sería mejor solo cambiar en un sitio
const paths = {
	imagenes: './src/img/**/*',
	scss: 'src/scss/**/*.scss',
	js: 'src/js/**/*.js',
};

//* Función que compila el archivo main de SASS a .css
function css() {
	return (
		src(paths.scss)
			.pipe(sourcemaps.init())
			.pipe(sass())
			// .pipe(sass({
			// 	outputStyle: 'expanded' //muestra una compilacion detallada
			// }))
			.pipe(postcss([autoprefixer(), cssnano()]))
			.pipe(sourcemaps.write('.'))
			.pipe(dest('build/css'))
	);
}

// //* Función que minifica el código css | SITUACIONAL
// function minificarCSS() {
// 	return src(paths.scss)
// 		.pipe(
// 			sass({
// 				outputStyle: 'compressed', //minifica el css compilado
// 			})
// 		)
// 		.pipe(dest('build/css'));
// }

//* funcion que concatena varios archivos de JS en uno solo
function javascript() {
	return src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(terser())
		.pipe(sourcemaps.write('.'))
		.pipe(rename({suffix: '.min'})) //agrega sufijo .min a archivos minificados
		.pipe(dest('./build/js'))
}

//cualquier carpeta e imagen que esté dentro de
//src/img -> con dest (destino) a build/img.
function imagenes() {
	return src(paths.imagenes)
		.pipe(imagemin())
		.pipe(dest('./build/img'))
		.pipe(notify({ message: 'Imagen Minificada' }));
}

function versionWebp() {
	return src(paths.imagenes)
		.pipe(webp())
		.pipe(dest('./build/img'))
		.pipe(notify({ message: 'Versión webP lista' }));
}

//Funcion que observa los cambios en la ruta y ejecuta la funcion css (compila)
// /**/* -> Cualquier carpeta/cualquier archivo
function watchArchivos() {
	watch(paths.scss, css);
	watch(paths.js, javascript);
}

exports.css = css;
// exports.minificarCSS = minificarCSS; //se recomienda quitar SOLO cuando ya te tiene funcionando cssnano
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;

//ejecutar varias tareas a la vez solo con el comando gulp
exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
