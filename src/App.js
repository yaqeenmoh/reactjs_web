import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Product from './Components/Products/Product/product';
import DashBoard from './Components/Admin/Dashboard/dashboard';
import firebase from './Firebase';
class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = { products :[] };
    if(localStorage.getItem("current_user") == null || localStorage.getItem("current_user") == "" || localStorage.getItem("current_user") == undefined )
    {
        window.location.href="/signin";
    }
  }

  componentWillMount = ()=>{
    let arr = [];
    let app = this;
       firebase.database().ref('/products/').once('value').then(function(snapshot){
        
   snapshot.forEach(item =>{
     let key = item.key;
      let pname = item.child("productName").val();
      let pdesc = item.child("productDesc").val();
      let pprice = item.child("productPrice").val();
      let ptype = item.child("productType").val();
      let url = item.child("image").val();
      arr.push({
        key,
          pname,
          pdesc,
          pprice,
          ptype,
          url
      });
   
      app.setState({products:arr});
   
   
   
   
      
   });
   
       });
     
   
   
   }
  render() {
    const DrawProduct = ()=>{

      return this.state.products.map((item, index) => (
          <Product param={item}/>
      ));
  }
    return (
      <div className="App">
    
       <header>
         <Header/>
       </header>
       <div className="content">
       <div className="container">
       <div className="row">

<DrawProduct/>
</div>
</div>
       </div>
       <footer>
         <Footer/>
       </footer>
      </div>
    );
  }
}

export default App;
