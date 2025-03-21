const API_URL="https://marvelous-vision-production.up.railway.app/auth/register"
export async function registerService({username,password,nombre,apellido,email,telefono}){
    try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password ,nombre:nombre
            ,apellido:apellido,email:email,telefono:telefono}),
        });
        if (!response.ok) {
            throw new Error("Invalid credentials");
        }
        
        const data = await response.json();
        return data; 
    }catch (error) {
        console.error("Error during sign-in:", error.message);
        throw error;
    }
}