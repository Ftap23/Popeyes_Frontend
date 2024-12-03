const API_URL = 'https://popeyes-backend.onrender.com/sandwich';

export const crearSandwich = async (sandwich) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sandwich),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear sandwich");
    }
}
