import React, { Component } from "react";

class Contador extends Component {
  state = {
    contar:this.props.valor
  };

  manejadorIncremento = () => {
    this.setState({ contar: this.state.contar + 1 });
  };

  formatoContar() {
    const { contar } = this.state;
    return contar === 0 ? "cero" : contar;
  }
  cambiarClase() {
    let clasess = "";
    clasess += this.state.contar === 0 ? "h1":"h5";
    return clasess;
  }
  render() {
    return (
      <div>
        <span className={this.cambiarClase()}>
          Contador: {this.formatoContar()}</span>
        <button className="btn btn-dark" onClick={this.manejadorIncremento}>Incrementar</button>
      </div>
    );
  }
}
export default Contador;
