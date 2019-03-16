import React, { Component } from 'react';
import '../admin.css';
import Pro from '../../product.png';


class Product extends Component{


    constructor(props)
    {
        super(props);
     
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

</div>
</div>


        </div>)
    }

}


export default Product;