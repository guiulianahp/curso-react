import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
    constructor(){
        super();
        this.nombre = "guiuliana";
    }

    obtenerNombre(){
        return 'probando';
    }

    render(){
        return(
            <h1>Hola {this.obtenerNombre()}</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);