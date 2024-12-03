const API_URL = 'https://popeyes-backend.onrender.com/tipodocumento';

export const obtenerTipoDocumentos = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener tipodocumentos");
    }
};