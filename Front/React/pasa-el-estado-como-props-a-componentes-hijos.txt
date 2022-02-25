class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Cambia el código debajo de esta línea */}
         <Navbar name={this.state.name}/>
         {/* Cambia el código encima de esta línea */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Cambia el código debajo de esta línea */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Cambia el código encima de esta línea */}
    </div>
    );
  }
};