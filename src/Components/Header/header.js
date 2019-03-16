import React, { Component } from 'react';
import '../index.css';
import firebase from '../../Firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartItems from '../cartsItem';

// import AddProduct from './Components/Admin/AddProduct/addProduct'; // to see add product from admin
// import DashBoard from './Components/Admin/Dashboard/dashboard';

import DashBoard from '../Admin/Dashboard/dashboard'
import AddProduct from '../Admin/AddProduct/addProduct'
class Header extends Component {
carts ;
constructor(props)
{
    super(props);
    let app = this;
    this.state = {cartItemNum : 0 , fullName :'' , logout :true}
    this.carts = firebase.database().ref("/carts");

   
    if(app.state.fullName =='')
    {
        if(localStorage.getItem("current_user") != null)
        {
        firebase.database().ref('/users/'+localStorage.getItem("current_user")).once('value').then(function(snapshot){
            app.setState({fullName:snapshot.child("fullName").val() , logout : false});
            
                }); 
            }
    }
  
   
        
    
            
    

  
}

logout = () =>{
    let app = this;
    if(localStorage.getItem("current_user") != null && localStorage.getItem("current_user") != "" && localStorage.getItem("current_user") != undefined )
    {
        localStorage.removeItem("current_user");
app.setState({logout : true},()=>{
    window.location.reload();
})
        
       
    }
}

componentDidMount(){


    let app = this;
    let user_key = localStorage.getItem("current_user");
    let counter = 0;
    
    firebase.database().ref('/carts/').once('value').then(function(snapshot){

        snapshot.forEach(item =>{
            
            if(item.child("user_key").val() == user_key)
            {
                counter++;
                app.setState({cartItemNum:counter});
              
            }
        })

    });

    
    
}

render(){

    return (
    <div>
     

        <div className="container">
        <div className="row">
        <div className="col-custom col-md-12">
        <div className="mainNav">
      
            <div>
                
            
            <a  href="javascript:void(0);" onClick={()=>{
                window.location.href="/cart"
            }}><i class="fas fa-shopping-cart circle-icon">{this.state.cartItemNum}</i></a>
        </div>
        
        
        <a href="javascript:void(0);" onClick={()=>{
                window.location.href="/"
            }}><h6 className="c-title"><b>Opencart</b></h6></a>
            <div>
            Welcome Mr : <span>{this.state.fullName} | <a href="javascript:void(0);" hidden={this.state.logout}
            
            onClick={this.logout}>Logout</a></span>
        </div>
        </div>
        </div>
        </div>
        </div>

        
    </div>
    )
}

}

export default Header;