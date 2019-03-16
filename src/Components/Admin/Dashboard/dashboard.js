import React, { Component } from 'react';
import '../admin.css';
import Header from '../header';
import SideMenu from '../sidemenu';
import Footer from '../footer';

import Product from './product';
import firebase from '../../../Firebase';






class DashBoard extends Component {
    
constructor(props)
{
    super(props);
    this.state = { products :[] };

    
}


componentWillMount = ()=>{
 let arr = [];
 let app = this;
    firebase.database().ref('/products/').once('value').then(function(snapshot){
snapshot.forEach(item =>{
   let pname = item.child("productName").val();
   let pdesc = item.child("productDesc").val();
   let pprice = item.child("productPrice").val();
   let ptype = item.child("productType").val();
   let url = item.child("image").val();
   arr.push({
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



render(){

    const DrawProduct = ()=>{

        return this.state.products.map((item, index) => (
            <Product param={item}/>
        ));
    }

    return (
    <div>
       <Header/>
       <SideMenu/>
       <div className="content-right"> 
       <br/>
      
       <div className="container">
       <div className="row" style={{padding:10}}>
       <label>Search</label>
       <div class="col-md-4">
       <input type="text" class="form-control" placeholder="Search"/>
       </div>
       </div>
    <DrawProduct/>
       

   
       </div>
           
       </div>
       <Footer/>
       

        
    </div>
    )
}

}

export default DashBoard;