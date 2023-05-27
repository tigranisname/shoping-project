import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";



class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        orderes: [

        ],
        items: [
          {
            id: 1,
            title: 'Gray Chair',
            img: 'chair-gray.jpeg',
            desc: 'Your choice give you the truth',
            category: 'chairs',
            price: '55'
          },
          {
            id: 2,
            title: 'Table',
            img: 'table.webp',
            desc: 'truth changes space',
            category: 'Tables',
            price: '55.55'
          },
          {
            id: 3,
            title: "Sofa",
            img: 'sofa.jpeg',
            desc: "Everything has with book",
            category: 'Sofa',
            price: "555,33"
          },
          {
            id: 4,
            title: "Light",
            img: "wall-light.jpeg",
            desc: "You can see it",
            category: 'Light',
            price: '44,22'
          },
          {
            id: 5,
            title: "White Chair",
            img: 'chair-white.jpeg',
            desc: ' Maybe White is also Light',
            category: "White Chairs",    
            price: '100.11'        
          }
        ]
      }
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
  return (
    <div className="App">
      <Header orderes={this.state.orderes} onDelete={this.deleteOrder}/>
      <Items  items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  );
}

deleteOrder(id) {
  this.setState({orderes: this.state.orderes.filter(el => el.id !== id)})
}

addToOrder(item) {
  let isInArray = false;
  this.state.orderes.forEach(el => {
    if(el.id === item.id)
    isInArray = true
  })
  if(!isInArray)
  this.setState({orderes: [...this.state.orderes, item]})
}
}

export default App;
