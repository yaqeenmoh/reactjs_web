import React, { Component } from 'react';


// import Header from '../Components/Header/header';
// import Footer from '../Components/Footer/footer';

// import firebase from '../Firebase';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import firebase from '../../Firebase';
class Signin extends Component {
signupRef
  constructor(props)
  {
    super(props);

    this.state = {email :"",password :""}
    this.signupRef = firebase.database().ref("/users");
    if(localStorage.getItem("current_user") != null)
    window.location.href="/";
  }

  signin = ()=>{
      let app = this;
    if( app.state.email != "" && app.state.password != "" )
   
    {
      firebase.database().ref('/users').once('value').then(function(snapshot){
        snapshot.forEach(item =>{
       
if(item.child("email").val() == app.state.email)
{
    if (item.child("password").val() == app.state.password){
localStorage.setItem("current_user",item.key);
window.location.href="/";
    }
    
}
        });
})
        
    }
    else{
        alert("please complete signin form")
    }
  }

 
  render() {
    
    return (
      <div className="App">
    
       <header>
         <Header/>
       </header>
       <div className="content">
       <div className="container">
       <h3>Signin</h3>
       <form>
<div className="row">

<div className="col-md-6">
<div className="form-group">
<label>Email</label>
<input type="text" className="form-control" placeholder="Email"
onChange={(e)=>{
    this.setState({email:e.target.value})
    }}/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Password</label>
<input type="password" className="form-control" placeholder="Password"
onChange={(e)=>{
    this.setState({password:e.target.value})
    }}/>
</div>
</div>

</div>

<input type="button" onClick={this.signin} className="btn btn-primary" value="Submit"/>

       </form>
      


</div>
       </div>
       <footer>
         <Footer/>
       </footer>
      </div>
    );
  }
}

export default Signin;
