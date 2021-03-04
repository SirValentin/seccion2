import React, { useEffect } from 'react'
import Cookies from 'universal-cookie';
import './DataScreen.css';

export const DataScreen = ({history}) => {
    const cookies = new Cookies();
    useEffect(() => {
        
        if (!cookies.get('TOKEN_KEY')) {
            history.replace('/account/login')
        }
    }, [])

    const handleLogout = () => {
        cookies.remove('TOKEN_KEY', {path:"/"});
        history.replace('/account/login');
    }
    return (
        <div className="container-data">
            <div className="nav-data">
                <button 
                    onClick={handleLogout}
                    className="btn-nav">
                    Salir
                </button>
            </div>
            <div className="header-data">
                <p className="p-header">token:{cookies.get('TOKEN_KEY')}</p>
            </div>
        </div>
    )
}
