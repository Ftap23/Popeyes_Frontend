const API_URL = 'https://popeyes-backend.onrender.com/extra_bebida';

export const obtenerExtraBebida = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener Bebidas");
    }
};