import React, { Component } from 'react';
import '../Admin/admin.css';
import MetisMenu from 'react-metismenu';
const content=[
    {
        icon: 'icon-class-name',
        label: 'DashBoard',
        to: 'admin',
    },
    {
        icon: 'icon-class-name',
        label: 'Products',
        to: 'addProduct',
    },
    {
        icon: 'icon-class-name',
        label: 'Users',
        to: 'users',
    },
    {
        icon: 'icon-class-name',
        label: 'Orders',
        to: 'manageOrders',
    }

    
];

class SideMenu extends Component {

constructor(props)
{
    super(props);
    
}

render(){

    return (
    <div>
       <div className="container-fluid">
        <div class="MenuLeft">
      <MetisMenu content={content} activeLinkFromLocation />
       </div>
       </div>


        
    </div>
    )
}

}

export default SideMenu;