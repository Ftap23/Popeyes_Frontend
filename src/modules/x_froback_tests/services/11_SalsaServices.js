const API_URL = 'http://popeyes-backend.onrender.com/salsa';

export const crearSalsa = async (salsa) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(salsa),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear salsa");
    }
}
