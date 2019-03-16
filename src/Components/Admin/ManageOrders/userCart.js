import React, { Component } from 'react';
import '../admin.css';
import Pro from '../../product.png';
import SingleOrder from './singleOrder';
import firebase from '../../../Firebase';

class UserCart extends Component{


    constructor(props)
    {
        super(props);

        this.state={obj :{}}

      
     
    }

    render(){

        const DrawSingleOrders = ()=>{
 if(this.props.param.ordersNum > 0)
 {
            return this.props.param.orderList.map((item, index) => (
                 <SingleOrder param={item.itemKey}/>

               
            ));
 }
 else{
    return "";
 }
        
          
        }
        return (<div>
<div className="row">


<div className="col-md-6">
<h3>Full Name : {this.props.param.fullName}</h3>
<a href="javascript:void(0);"><h4>Orders({this.props.param.ordersNum})</h4></a>
<DrawSingleOrders/>



</div>
</div>
<hr/>


        </div>)
    }

}


export default UserCart;