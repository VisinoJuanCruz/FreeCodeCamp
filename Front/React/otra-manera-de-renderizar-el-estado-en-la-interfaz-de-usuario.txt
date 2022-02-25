class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Cambia el código debajo de esta línea
    const name = this.state.name;
    // Cambia el código encima de esta línea
    return (
      <div>
        { /* Cambia el código debajo de esta línea */ }
        <h1>{name}</h1>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};