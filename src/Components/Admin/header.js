import React, { Component } from 'react';
import '../Admin/admin.css';


class Header extends Component {

constructor(props)
{
    super(props);
    
}

render(){

    return (
    <div>
        <div className="container-fluid">
        <div className="row">
        <div className="col-custom col-md-12">
        <div className="mainNav">
        <i class="fas fa-shopping-cart circle-icon"></i>
        <h6 className="c-title"><b>Opencart</b></h6>
        </div>
        </div>
        </div>
        </div>

        
    </div>
    )
}

}

export default Header;