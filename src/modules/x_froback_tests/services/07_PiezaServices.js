const API_URL = 'https://popeyes-backend.onrender.com/pieza';

export const crearPieza = async (pieza) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pieza),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear pieza");
    }
}
