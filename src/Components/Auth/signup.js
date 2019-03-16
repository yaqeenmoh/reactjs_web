import React, { Component } from 'react';


// import Header from '../Components/Header/header';
// import Footer from '../Components/Footer/footer';

// import firebase from '../Firebase';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import firebase from '../../Firebase';
class SignUp extends Component {
signupRef
  constructor(props)
  {
    super(props);

    this.state = {fullName:"",email :"",password :"" , repassword :""}
    this.signupRef = firebase.database().ref("/users/");
   

    
  }

  signup = ()=>{
      let app = this;
    if(app.state.fullName != "" && app.state.email != "" && app.state.password != "" 
    && app.state.repassword != "")
    {
        if(app.state.password == app.state.repassword)
        {
        
            app.signupRef.push({
fullName :app.state.fullName,
email : app.state.email,
password : app.state.password

            }).then(()=>{
                alert("register success");
                window.location.href="signin";
            })

        }
        else{
            alert("password confirmation not match");
        }
    }
    else{
        alert("please complete signup form")
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
       <h3>Signup</h3>
       <form>
<div className="row">
<div className="col-md-6">
<div className="form-group">
<label>Full Name</label>
<input type="text" onChange={(e)=>{
this.setState({fullName:e.target.value})
}} className="form-control" placeholder="Full name"/>
</div>
</div>
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
<div className="col-md-6">
<div className="form-group">
<label>Password confirmation</label>
<input type="password" className="form-control" placeholder="Password confirmation"
onChange={(e)=>{
    this.setState({repassword:e.target.value})
    }}/>
</div>
</div>
</div>

<input type="button" onClick={this.signup} className="btn btn-primary" value="Submit"/>

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

export default SignUp;
