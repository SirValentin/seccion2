import React, { useEffect, useState } from 'react'
import './LoginScreen.css';
import { getToken } from '../../selectors/getToken';
import Cookies from 'universal-cookie';

export const LoginScreen = ({history}) => {
    const cookies = new Cookies();
    const [datos, setDatos] = useState({
        mail: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const handleLogin = async (e) => {         
        e.preventDefault();
        getToken(datos)
            .then(res => {
                if (cookies.get('TOKEN_KEY')) {
                    history.replace('/account/data')
                }
            })
    }
    useEffect(() => {
        if (cookies.get('TOKEN_KEY')) {
            history.replace('/account/data')
        }
    }, [])

    return (
        <div className="container-login">
            <div className="login">
                <form className="form-login" onSubmit={handleLogin}>
                    <h1 className="h1-login">LOGIN</h1>
                    <input 
                        type="text"
                        placeholder="Usuario"   
                        className="input-login"   
                        name="mail"
                        onChange={handleInputChange}           
                    />
                    <input 
                        type="text"
                        placeholder="Contraseña"    
                        className="input-login"  
                        name="password"            
                        onChange={handleInputChange}  
                    />
                    <button
                        className="btn-login"
                    >
                    Ingresar                
                    </button>
                </form>                
            </div>
        </div>
    )
}
