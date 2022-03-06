import pokemon from '../images/pokemon.png'
import ev0 from '../images/ev-0.png'
import pinkgram from '../images/pinkgram.png'
import clicker from '../images/clicker.png'

export const portfolio = [
    {
        title: 'Pokémon',
        description: 'Aplicación desarrollada con HTML, CSS y JavaScript. Hace uso de la API pública de pokémon para mostrar los datos de todos los pokémon y movimientos, y permite a los usuarios crear una lista de sus favoritos.',
        link: 'https://github.com/beaconde/Proy1_CondeCeronBeatriz_DWEC',
        image: pokemon,
        deployment: 'https://beaconde.github.io/Proy1_CondeCeronBeatriz_DWEC/'
    },
    {
        title: 'The Story of Ev-0',
        description: 'Landing page del videojuego "The story of Ev-0" desarrollada con HTML y JavaScript, haciendo uso del preprocesador de estilos SASS y el empaquetador de aplicaciones web Parcel.',
        link: 'https://github.com/beaconde/diw-landing-page.beatriz.conde',
        image: ev0,
        deployment: ''
    },
    {
        title: 'Pinkgram',
        description: 'Red social desarrollada con PHP utilizando el framework Laravel. Es un clon de Instagram con gestión de usuarios en el que se pueden subir fotos, dejar comentarios y ver los perfiles del resto de usuarios.',
        link: 'https://github.com/beaconde/pinkgram-laravel',
        image: pinkgram,
        deployment: ''
    },
    {
        title: 'Click Competition',
        description: 'API Rest desarrollada con Python utilizando el framework Flask, en la que se gestiona un campeonato de clicks y se muestran las clasificaciones ordenadas por jugadores, equipos, países, etc.',
        link: 'https://github.com/beaconde/click-competition',
        image: clicker,
        deployment: ''
    }
]
