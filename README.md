# Pasos para la ejecuccion del parcial

## Clonar el repositorio
Inicialmente se debe clonar el repositorio en la maquina local, esto se puede hacer en una terminal gitbash con el comando 
git clone "https://github.com/Pablomm12/ParcialWEB1.git"
cd <nombre-del-repositorio>

## Instalar dependencias
Correr el siguiente comando para instalar todas las dependencias necesarias para ejecutar la aplicación, como react-bootstrap, react-i18next, y otros paquetes utilizados.
npm install

## En caso de que ya este en su IDE de preferencia puede ejecutar el commando npm start en la terminal el cual desplegara la aplicacion localmente en el url con puerto 3000
npm start
http://localhost:3000

## Aplicacion
Inicialmente se ve la pagina home que en esencia es la segunda pantalla pedida en el parcial, si se ingrea al url http://localhost:3000/login, se puede ver la pantalla pedida en el primer punto del parcial.

# Reporte de desarollo y decisiones tomadas en el parcial

## Pantalla Login
* Se hizo la validación de correo y contraseña en el componente de Login, se implementó una validación que verifica si el correo sigue un formato válido utilizando una expresión regular, y si la contraseña tiene al menos 8 caracteres. Esto garantiza que los usuarios ingresen credenciales correctas, cumpliendo lo pedido en el parcial

* Manejo de errores: En caso de que el usuario ingrese información incorrecta, se muestra un mensaje de error utilizando Alert de react-bootstrap, y se resaltan los campos que necesitan corrección. 

## Pantalla Home 
* Diseño de las tarjetas: Para cada categoría de deporte (ciclismo, carrera y natación) se hizo una distribución de 2 columnas por 5 filas. Esto se implementó usando el componente Row y Col de react-bootstrap. 
* Cada deporte se distribuye en un layout de 2 columnas y 5 filas usando el componente Col con xs={12} (para pantallas pequeñas) y md={6} (para pantallas medianas y grandes).

* Internacionalización: Se uso i18n para la traducción dinámica de la aplicación entre inglés y español. Esto permite modificar los textos estáticos en la página y los mensajes de error utilizando la biblioteca react-i18next.

* Botones para cambiar el idioma: Se colocaron botones de idioma en la parte superior de ambas pantallas (login y home). Estos botones cambian el idioma en tiempo real, permitiendo que el usuario vea el contenido en el idioma de su preferencia.

* Iconos y visualización de datos: Para mejorar la presentación visual, se integran iconos específicos de cada deporte en la sección de usuario utilizando la librería react-icons. Esto mejora la claridad y facilita la lectura rápida de los datos por parte del usuario.

### Datos simulados (mock data):

* Se utilizan funciones de servicio mock para simular los datos de usuario y las sesiones de entrenamiento.

* mockUserService: Devuelve un objeto con información básica del usuario, incluyendo su nombre, avatar y mejores tiempos en los tres deportes.

* mockSessionService: Genera 10 sesiones de entrenamiento para cada deporte (ciclismo, carrera y natación) con información como el título, descripción, distancia, duración y ciudad.

## Componentes de React y elementos utilizados
### Componentes React 
* Login: Componente que maneja el formulario de autenticación con validación de entradas.
* Home: Página principal que muestra las sesiones de entrenamiento en categorías.
### react-bootstrap:
* Container, Row, Col: Utilizados para crear un layout responsive.
* Form, Button, Alert: Utilizados para crear el formulario de login y mostrar retroalimentación visual.
*  react-i18next (i18n):Se utilizó para gestionar la traducción dinámica del contenido de la aplicación.
*  Iconos de React: Se utilizaron iconos de react-icons para mejorar la representación visual de las categorías de deporte en la sección de usuario (íconos de carrera, natación y ciclismo).
