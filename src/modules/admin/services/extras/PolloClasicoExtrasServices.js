const API_URL = 'https://popeyes-backend.onrender.com/extra_pieza_pollo_clasica';

export const obtenerExtraPolloClasica = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener Pollos Clasicas");
    }
};