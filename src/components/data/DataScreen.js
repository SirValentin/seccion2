import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { NasaScreen } from '../nasa/NasaScreen';
import { PokemonScreen } from '../pokemon/PokemonScreen';
import { getNasa } from '../../selectors/getNasa';
import './DataScreen.css';

export const DataScreen = ({history}) => {
    
    const [toggleState, setToggleState] = useState(1);
    const cookies = new Cookies();
    const fecha = new Date();
    const tresDiasEnMs = (24 * 60 * 60 * 1000)*2;
    const calc = new Date(fecha.getTime()-tresDiasEnMs);
    const param = `&start_date=${calc.getFullYear()}-${calc.getMonth() + 1}-${calc.getDay()}&end_date=${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDay()}`;
    const respuestaNasa = getNasa(param);
    console.log(respuestaNasa);
    const toggleTab = (index) => {
        setToggleState(index);
    };

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
            <div className="secciones">
                <div 
                    onClick={() => toggleTab(1)}
                    className={toggleState === 1 ? "tab1  active-tab" : "tab1"}
                >
                    <h2>NASA APOD</h2>
                </div>
                <div 
                    onClick={() => toggleTab(2)}
                    className={toggleState === 2 ? "tab2  active-tab" : "tab2"}
                >
                    <h2>POKEMON</h2>
                </div>
            </div>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <NasaScreen data={respuestaNasa}/>
            </div>
            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <PokemonScreen />
            </div>
        </div>
    )
}
