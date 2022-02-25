const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Cambia el código debajo de esta línea */ }
    return <Items quantity={10}/>
    { /* Cambia el código encima de esta línea */ }
  }
};