const API_URL = 'http://popeyes-backend.onrender.com/extra_pieza_pollo_picante';

export const obtenerExtraPolloPicante = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener Pollos Picantes");
    }
};