import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // to see home screen with product
import * as serviceWorker from './serviceWorker';
import Pro from './Components/Products/Product/product';
import AddProduct from './Components/Admin/AddProduct/addProduct'; // to see add product from admin
import DashBoard from './Components/Admin/Dashboard/dashboard';
import ManageOrders from './Components/Admin/ManageOrders/manageOrders';
import Users from './Components/Admin/Users/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartItems from './Components/cartsItem';
import SignUp from './Components/Auth/signup';
import Signin from './Components/Auth/signin';

class MainPage extends React.Component{

    constructor (props)
    {
        super(props);
    }

    render(){
        return (
<div>
            <Router>
<div>
            <Route exact path="/" component={App} />
              <Route path="/admin" component={DashBoard} />
              <Route path="/manageOrders" component={ManageOrders} />
              <Route path="/users" component={Users} />
              <Route path="/addProduct" component={AddProduct} />
              <Route exact path="/cart" component={CartItems}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/signin" component={Signin}/>
      
      
              </div>
            </Router>
            </div>
        )
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
