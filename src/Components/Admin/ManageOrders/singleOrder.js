import React, { Component } from 'react';
import '../admin.css';
import Pro from '../../product.png';
import firebase from '../../../Firebase';
import { throws } from 'assert';

class SingleOrder extends Component{


    constructor(props)
    {
        super(props);

        this.state = {pname : '',pdesc : '', pprice :0 , url : ''}


     



      
     
    }

    render(){
    let app = this;
        firebase.database().ref("/products/"+this.props.param).once("value",item=>{
             let pname = item.child("productName").val();
   let pdesc = item.child("productDesc").val();
   let pprice = item.child("productPrice").val();
   let url = item.child("image").val();

   app.setState({pname,pdesc,pprice,url});

        })

      
        return (<div>
            <div className="row">
            
            <div class="col-md-4">
            {/* <img src={this.props.data.img}/> */}
            <img style={{width:100,height:100}} src={this.state.url}/>
            
            
            </div>
            <div className="col-md-6">
            
            <p>Product Name : {this.state.pname}</p>
            <p>Product Description : {this.state.pdesc}</p>
            <p>Price : {this.state.pprice} JD</p>
            
            </div>
            </div>
            <br/>
            <hr/>
            
            
                    </div>)
    }

}


export default SingleOrder;