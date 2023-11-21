import React, { Component } from "react";
import Contador from './Contador.js';

class Contadores extends Component {
  state = {
    contadores:[
      {id:1, valor:0},
      {id:2, valor:0},
      {id:3, valor:0},
      {id:4, valor:0},
    ]
  };

  render() {
    return (
      <div>
        {this.state.contadores.map(
          contador=>
          <Contador key={contador.id} valor={contador.valor}/>
        )}
      </div>
    );
  }
}
export default Contadores;
