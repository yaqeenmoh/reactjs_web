import React, { Component } from 'react';
import '../../index.css';
import firebase from '../../../Firebase';




class Product extends Component {
carts ;
constructor(props)
{
    super(props);

    this.state = {key : this.props.param.key ,
    isAdded : false};

    this.carts = firebase.database().ref("/carts");
    
    
}

componentDidMount(){
    let app = this;
    let user_key = localStorage.getItem("current_user");
    // firebase.database().ref('/carts/'+).once('value').then(function(snapshot){

    //     alert(snapshot.key);

    // });

    firebase.database().ref('/carts/').once('value').then(function(snapshot){
        snapshot.forEach(item =>{
         
if(item.child("item_key").val() == app.state.key && item.child("user_key").val() == user_key)
{
    //alert("here");
    app.setState({isAdded:true});
}
        });
})
}

addToCart = () =>{
let app = this;
let user_key = localStorage.getItem("current_user");
   
app.carts.push({

            item_key  : this.state.key,
            user_key : user_key,
            checkout : false
    
         
    
    
    
        }).then(()=>{
        app.setState({isAdded:true},()=>{
            window.location.reload();
        })
   
       

})
    
}
    

render(){

    return (
    <div className="main">
       
       <div className="col-md-3">
       <div className="whiteBox">
       <div  className="product2">
       
    <img  src={this.props.param.url}/>
       </div>
       <p class="block"></p>
       <p className="pName left-a">{this.props.param.pname}</p>
       <p className="price left-a orange">{this.props.param.pprice} JD</p>
       
       <button hidden={this.state.isAdded} onClick={this.addToCart} className="btn btn-primary btn-orange">ADD TO CART</button>
       
       
       </div>
       
       </div>

        
    </div>
    )
}

}

export default Product;