import {jwtDecode}  from 'jwt-decode';

export function checkTokenExpiration ({session}) {
    console.log(session)
    if (session == null) return false; // Si no hay token, retornamos falso
    try {
        const decoded = jwtDecode(session[1]);
        console.log(decoded)
        const expirationTime = decoded.exp * 1000; // Convertimos el tiempo a milisegundos
        const currentTime = Date.now();

        if (currentTime > expirationTime) {
            // Token expirado
            return true;
        }
        return false;
    } catch (e) {
        console.error('Error decodificando el token:', e);
        return true; // Si no podemos decodificar, lo tratamos como expirado
    }
};

