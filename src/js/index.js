//import react into the bundle
import React, { useDeferredValue, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

import "../styles/index.css";
import './icons.js'
import Home from "./component/home.jsx";



function App () {
    
    const [counter, setCounter] = useState (0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => +1) 
        }, 1000) 
 

        return ()  => clearInterval(interval)
    }, [counter])

    function calculoSegundos(aCounter, placeValue) {
        return Math.floor(aCounter / placeValue) % 10
    }
    
    return (
        <>
        <SimpleCounter 
            milDigito = {calculoSegundos(counter, 1000)}
            cienDigito = {calculoSegundos(counter, 100)}
            diezDigito = {calculoSegundos(counter, 10)}
            unDigito = {calculoSegundos(counter, 1)}
        />
        </>
    )

}

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

