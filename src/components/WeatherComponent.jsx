// Componente de ejemplo para el uso de useState y useEffect
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import { Card, Image, Icon, Dimmer, Loader } from 'semantic-ui-react';

import { WEATHER_API_ICONS, WEATHER_API_KEY, WEATHER_API_URL } from '../env/local.env';

const WeatherComponent = () => {

    // Necesitaremos la posición del usuario: latitud y longitud
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [info, setInfo] = useState({})

    // Necesitaremos obtener la posición del usuario al iniciar el componente
    // o cuando la Lat y Long cambien
    // Para ello vamos a usar el useEffect
    useEffect(() => {
        // Cada vez que Lat o Long se modifiquen a través de setLat y setLong,
        // respectivamente, se ejecutarán estas líneas

        // Método para solicitar el tiempo a la API
        const fetchWeather = async() => {

            // Con esta línea obtendremos la posición y sos coordenadas (lat y long) del usuario
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })

            // Verificación de que obtiene nuestras coordenadas
            // Recuerda permitir/activar el rastreo de posicionamiento en el navegador
            // console.log('posición del usuario')
            // console.table(lat, long)

            // Planteamos la URL
            let url =
                `${WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${WEATHER_API_KEY}&lang=es`

            await fetch(url).then(res => res.json()).then((resultado) => {
                console.log('RESULTADO: ', resultado)
                setInfo(resultado)
            })
        }

        // Ejecutamos el
        fetchWeather()

    }, [lat, long]);

    return (
        <div>
            {
                info.main ? 

                    <Card>
                        <Image 
                            src={`${WEATHER_API_ICONS}/${info.weather[0].icon}.png`} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header className='header'>
                                {info.name}
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                    {
                                        info.weather[0].description
                                    }
                                </span>
                            </Card.Meta>
                            <Card.Description>
                            {info.main.temp}ºC
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Description>
                                Fecha: {moment().format('DD/MM/yyyy')}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                :
                    <div>
                        <Dimmer active>
                            <Loader>
                                Cargando...
                            </Loader>
                        </Dimmer>
                    </div>
            }
        </div>
    );
}

export default WeatherComponent;


// fetch => Nativo de Javascript
// axios => Librería que debemos instalar -> npm i axios



