import React, { Component } from 'react';

// import Header from './Components/Header/header';
// import Footer from './Components/Footer/footer';
// import Product from './Admin/Dashboard/product';
import Header from './Header/header';
import Footer from './Footer/footer';
import ProductCart from './Admin/Dashboard/productCart';
import firebase from '../Firebase';



class CartItems extends Component {

  constructor(props)
  {
    super(props);
    this.state = { products :[] };
    this.submit = this.submit.bind(this);
  }

  componentWillMount = ()=>{
    let arr = [];
    let app = this;
    let user_key = localStorage.getItem("current_user");
       firebase.database().ref('/carts/').once('value').then(function(snapshot){
        
   snapshot.forEach(item =>{

    if(item.child("user_key").val() == user_key)
    {

    let k = item.child("item_key").val();



    firebase.database().ref('/products/'+k).once('value').then(function(product){

        let pkey = product.key;
        let pname = product.child("productName").val();
        let pdesc = product.child("productDesc").val();
        let pprice = product.child("productPrice").val();
        let ptype = product.child("productType").val();
        let url = product.child("image").val();
        arr.push({
          pkey,
            pname,
            pdesc,
            pprice,
            ptype,
            url
        });
     
        app.setState({products:arr});

    });

    
  }
   
   
   
      
   });
   
       });


       
     
   
   
   }
   submit (){
     window.location.href="payment.html";
   }
  //  async submit(ev) {
  //   var dataString = 'amount=999&currency=usd&description=Example charge&source=tok_visa';
   

  //   fetch('https://api.stripe.com/v1/charges' ,{ headers: new Headers({
  //     'user': 'pk_test_5obZDDs8FAKQ4PDY7sUjPWOh',
  //     'pass': ''
    
  //   }
  //   )
  //   ,body : JSON.stringify(dataString),
  //   method:"POST"
  // }).then(res =>{
  //   alert("res"+res);
  // }).catch(error=>{
  //   alert("error"+error);
  // })

      
  // }
  render() {
    
    const DrawProduct = ()=>{

      return this.state.products.map((item, index) => (
          <ProductCart param={item}/>
      ));
  }
    return (
      <div className="App">
    
       <header>
         <Header/>
       </header>
       <div className="content">
       <div className="container">
       

 <DrawProduct/>





</div>

<div className="container">
<h3>Buy</h3>

<input type="button" value="Checkout" className="btn btn-danger" onClick={this.submit}/>
</div>

       </div>
       <footer>
         <Footer/>
       </footer>
      </div>
    );
  }
}

export default CartItems;
