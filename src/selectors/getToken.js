// import React from 'react'
import Cookies from 'universal-cookie';


export const getToken = async (datos) => {   
    const cookies = new Cookies(); 
    await fetch('https://beta-api.barracks.gg/v2/Auth/Authenticate', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: { 
                'Content-Type': 'application/json' 
            }
        })
        .then( res => {
            if(res.ok){
                return res.json()
            }else{
                alert("ERROR: Codigo de status "+res.status)
            }
        })
        .then( data => cookies.set('TOKEN_KEY',data.token, {path: "/"}))
        .catch( err => console.log(err))
}