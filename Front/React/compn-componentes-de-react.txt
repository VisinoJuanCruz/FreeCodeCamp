class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Cambia el código debajo de esta línea */ }
        <NonCitrus />
        <Citrus />
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Cambia el código debajo de esta línea */ }
        <Fruits />
        { /* Cambia el código encima de esta línea */ }
        <Vegetables />
      </div>
    );
  }
};