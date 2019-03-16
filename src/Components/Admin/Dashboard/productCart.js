import React, { Component } from 'react';
import '../admin.css';
import Pro from '../../product.png';
import firebase from '../../../Firebase';


class Product extends Component{


    constructor(props)
    {
        super(props);
     
    }

    remove = ()=>{
        let app = this;
        let ref = firebase.database().ref("/carts");
        ref.once("value",(items)=>{
            items.forEach(item=>{
if(item.child("item_key").val() == app.props.param.pkey )
{
  
    ref.child(item.key).remove().then(()=>{
        alert("item removed");
        window.location.reload();
    });
}
            });
        })
    }

    render(){
        return (<div>
<div className="row">

<div class="col-md-4">
{/* <img src={this.props.data.img}/> */}
<img style={{width:100,height:100}} src={this.props.param.url}/>


</div>
<div className="col-md-6">
<p>Product Name : {this.props.param.pname}</p>
<p>Product Description : {this.props.param.pdesc}</p>
<p>Price : {this.props.param.pprice}</p>
<a href="javascript:void(0);" onClick={this.remove}>remove item</a>

</div>
</div>


        </div>)
    }

}


export default Product;