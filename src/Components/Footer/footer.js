import React, { Component } from 'react';
import '../index.css';


class Footer extends Component {

constructor(props)
{
    super(props);
    
}

render(){

    return (
    <div>
        <div className="container">
        <div className="row">
        <div className="col-custom col-md-12">
        <div className="mainFooter">
        <ul className="footer-ul">
        <li>Contact us</li>
        <li>Terms of service</li>
        <li>Privacy Policy</li>
        <li>Help/FAQ</li>
        <li>Customer support</li>
        </ul>
        </div>
        </div>
        </div>
        </div>

        
    </div>
    )
}

}

export default Footer;