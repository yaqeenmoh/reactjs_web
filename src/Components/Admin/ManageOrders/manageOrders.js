import React, { Component } from 'react';
import '../admin.css';
import Header from '../header';
import SideMenu from '../sidemenu';
import Footer from '../footer';

import UserCart from './userCart';
import firebase from '../../../Firebase';






class ManageOrders extends Component {
    
constructor(props)
{
    super(props);
    this.state = { orders : []};

    
}


componentWillMount = ()=>{
 
 let arr =[];

 let app = this;

    firebase.database().ref('/users/').once('value').then(function(snapshot){
snapshot.forEach(item =>{

    let ukey = item.key;
  
    let fullName = item.child("fullName").val();
    let obj =   {fullName , ukey , ordersNum : 0 , orderList : []};

       
    
    

    firebase.database().ref("/carts").orderByChild("user_key").equalTo(ukey).once("value", function(orders) {
    
        obj.ordersNum = orders.numChildren();
    
     
     orders.forEach(o=>{

        obj.orderList.push({
             okey : o.key,
             itemKey : o.child("item_key").val()
         })
     })

     
     arr.push(obj);
    
     app.setState({orders : arr});
    });
  

//     firebase.database().ref('/users/'+item.child("user_key").val()).once('value').then(function(user)

//     {
        
// if(user)
// {
//     let fullName = user.child("fullName").val();
//     let key = user.key;
    
//     arr.push({fullName , key});
//     app.setState({users:arr});

// }
//     });


//    let pname = item.child("productName").val();
//    let pdesc = item.child("productDesc").val();
//    let pprice = item.child("productPrice").val();
//    let ptype = item.child("productType").val();
//    let url = item.child("image").val();
//    arr.push({
//        pname,
//        pdesc,
//        pprice,
//        ptype,
//        url
//    });

  




   
});



    });
  
   

}



render(){

    const DrawUserOrders = ()=>{
        
        return this.state.orders.map((item, index) => (
          
            <UserCart param={item}/>
        ));
 
    }

    return (
    <div>
       <Header/>
       <SideMenu/>
       <div className="content-right"> 
       <br/>
      
       <div className="container">
       <div className="row" style={{padding:10}}>
       <label>Search</label>
       <div class="col-md-4">
       <input type="text" class="form-control" placeholder="Search"/>
       </div>
       </div>
    <DrawUserOrders/>
       

   
       </div>
           
       </div>
       <Footer/>
       

        
    </div>
    )
}

}

export default ManageOrders;