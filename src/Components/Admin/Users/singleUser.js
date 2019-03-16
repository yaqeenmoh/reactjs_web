import React, { Component } from 'react';
import '../admin.css';
import Pro from '../../product.png';


class SingleUser extends Component{


    constructor(props)
    {
        super(props);
     
    }

    render(){
        return (<div>
<div className="row">


<div className="col-md-6">

<h6>Full Name: {this.props.param.fullName}</h6>
<h6>Email : {this.props.param.email}</h6>


</div>
</div>
<br/>
<hr/>


        </div>)
    }

}


export default SingleUser;