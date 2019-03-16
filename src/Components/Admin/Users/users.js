import React, { Component } from 'react';
import '../admin.css';
import Header from '../header';
import SideMenu from '../sidemenu';
import Footer from '../footer';


import firebase from '../../../Firebase';
import SingleUser from './singleUser';





class Users extends Component {
    
constructor(props)
{
    super(props);
    this.state = { users : []};

    
}


componentWillMount = ()=>{
 
 let arr =[];

 let app = this;

    firebase.database().ref('/users/').once('value').then(function(snapshot){
snapshot.forEach(item =>{

 
    let ukey = item.key;
    let fullName = item.child("fullName").val();
    let email = item.child("email").val();
    arr.push({ukey,fullName,email});

       
    
    

    
      
    
     app.setState({users : arr});

  



  




   
});



    });
  
   

}



render(){

    const DrawUsers = ()=>{
        
        return this.state.users.map((item, index) => (
          
            <SingleUser param={item}/>
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
    <DrawUsers/>
       

   
       </div>
           
       </div>
       <Footer/>
       

        
    </div>
    )
}

}

export default Users;