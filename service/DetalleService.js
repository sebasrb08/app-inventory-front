const API_URL="https://marvelous-vision-production.up.railway.app/detalle"

export async function saveDetails({detail,session}){
    const response = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
        body: JSON.stringify({id_producto:detail.id_producto,cantidad:detail.cantidad})
    })
    const data = await response.json()
    return data
}