ENUNCIADO

1.- Desarrolla una aplicación Web utilizando HTML5, CSS3 y JavaScript.

	1.1.- La temática versará sobre las tecnologías HTML5, CSS3 y JavaScript y las herramientas de
	desarrollo que ofrecen Firefox y Chrome.
	
	1.2.- No usar o no abusar de los frameworks.
	
	1.3.- Aparecerá los nombre de los miembros del grupo en la página inicial.
	
2.- Requisitos HTML5.

	2.1.- Obligatoria mente se implementará la estructura mediante etiquetas semánticas: header,
	nav, section, article, aside, footer. No abusar de div y evitar iframe.
	
	2.2.- “Responsividad” al menos hasta un 50%.
	
	2.3.- Formularios: input, type=”text”, type=”radio”, type=”checkbox”, type=”hidden”; type=”button”,
	textarea, select, option (especifica una de las opciones seleccionables. Si tiene definido el
	atributo default, será la por defecto nada más cargar el formulario. Si tiene definido el atributo , el
	valor de éste será el enviado en los datos del formulario aunque se muestre otro texto), button,
	submit.
	
	2.4.- Control de campos vacíos y de su valor.
	
	2.5.- Icono en las pestañas (shortcut icon)
	
3.- Requisitos CSS3:

	3.1.- Se usaran ficheros externos: ficheros CSS referenciados (link y href). NO se pueden usar
	estilos de línea (style), ni embebidos (en la cabecera / head).
	
	3.2.- Aplicar modos de referencia por: Etiquetas, Id, Class, etc.
	
	3.3.- Usar estilos o definir reglas:
		- border-radiu, opacity margin, padding, Box-shadow y Text-shadow
		- font (usar google fonts), text-aling, width, background, border, display, list-style.
		- Linear-gradient
		http://www.colorzilla.com/gradient-editor/
		Compatibilidad con los diferentes navegadores.
		- display: block e inline-block (no en responsive).
		- float. Clear
		- Transform (scale, rotate, translate).
		- Transition y hover.
		- Responsive y Mobile First: media queries
		@media screen and (max-width: 300px) {
			nav { display: none; }
			article {
			width: 100%;
			height: 100px;
			}
		}
		Responsive por tamaño y por densidad de pixel.
		
	3.4.- Control de video para los tipos de ficheros más usados: webm y mp4.
	
	3.5.- Tamaño de imágenes según resolución (srcset)
	
4.- JavaScript

	Funciones: alert(), console.log()Uso de objetos (Browser BOM): Window Navigator Screen History Location
	Uso de objetos (HTML DOM): Document, Elements, Attributes, Events, Style
	Eventos: click, load, etc.
	Manipulación del DOM: getElementByID, etc.
	< a href="#" id="mienlace" style="background-color: orange;">Enlace demo< /a >
	< script >
	document.getElementById("mienlace").style.backgroundColor="orange";
	< /script >
	Manejadores de eventos: onclick, onMouseOver, onMouseOut, de teclado y de ventana (onload).
	Manejadores de eventos con addEventListener().
	Selectores o referencias: getElementsByTagName, gerElementById, getElementByClassName,
	querySelector, querySelectorAll().
	- Ejemplos básicos: mostrar o ocultar información (texto) y modificar los estilos.
	- Ejemplo de validar y manipular un formulario.
	- Ejemplos mas complejos o creativos copiados de Internet.
	
5.- Se valora la estética, la funcionalidad y la creatividad.

	5.1.- Menú despegable y reponsive (sidenav):
		http://webgenio.com/2014/05/22/100-increibles-menus-css/
	
	5.2.- Slideshow, https://www.w3schools.com/howto/howto_js_slideshow.asp
	
	5.3.- Modal images. Responsive Image Grid, etc.
	
	5.4.- Cualquier otra animación o efecto.
	
6.- Firefox Developer Tools.
	https://developer.mozilla.org/en-US/docs/Tools
	
7.- Chrome DevTools.
	https://developers.google.com/web/tools/chrome-devtools
	
8.- Los ficheros deben ser validados en “https://validator.w3.org/”

9.- Debe usarse repositorios git.
