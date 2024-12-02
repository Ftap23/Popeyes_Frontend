import {useEffect, useState} from 'react';
import Locales from '../components/Locales.jsx';
import {
    obtenerLocales,
    crearLocal
} from "../services/LocalesService.js"

export default function LocalesScreen() {
    const [locales, setLocales] = useState([]); //Antes: publicaciones, setPublicaciones

    useEffect(() => {
        const cargarLocales = async () => {
            const datos = await obtenerLocales();  // Usamos el servicio obtenerLocales
            setLocales(datos || []);
        };
        cargarLocales();
    }, []);

    const agregarLocal = async (nuevoLocal) => {
        const publicacionCreada = await crearLocal(nuevoLocal);
        if(publicacionCreada){
            setLocales([...locales, publicacionCreada]);
        }
    };

    return (
        <div>
            <Locales
                locales={locales}
            />
        </div>
    );
}
