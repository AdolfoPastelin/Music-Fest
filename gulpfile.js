//series va entre llaves porque gulp tiene muchas funciones (se escoge series).
//sass va sin llaves porque gulp-sass solo tiene una función. 
//src -> para incluir la carpeta donde está alojado el archivo principal de SASS.
//dest -> para incluir en el pipe la carpeta de destino.
const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

//Función que compila el archivo main de SASS a .css
function css() {
	return src('src/scss/main.scss')
		.pipe(sass())
		// .pipe(sass({
		// 	outputStyle: 'expanded' //muestra una compilacion detallada
		// }))
		.pipe(dest('build/css'))
}

//Función que minifica el código css
function minificarCSS() {
	return src('src/scss/main.scss')
		.pipe(sass({
			outputStyle: 'compressed' //minifica el css compilado
		}))
		.pipe(dest('build/css'));	
}

//Funcion que observa los cambios en la ruta y ejecuta la funcion css (compila)
// /**/* -> Cualquier carpeta/cualquier archivo 
function watchArchivos() {
	watch('src/scss/**/*.scss', css);
} 

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;