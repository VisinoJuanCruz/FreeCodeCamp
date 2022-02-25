const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Cambia el código debajo de esta línea */ }
      <TypesOfFruit />
      { /* Cambia el código encima de esta línea */ }
    </div>
  );
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
      </div>
    );
  }
};