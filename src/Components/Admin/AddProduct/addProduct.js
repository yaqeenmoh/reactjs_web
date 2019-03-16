import React, { Component } from 'react';
import '../admin.css';
import Header from '../header';
import SideMenu from '../sidemenu';
import Footer from '../footer';
import ImageUploader from 'react-images-upload';
import ReactFilestack, { client } from 'filestack-react';
import firebase from '../../../Firebase';



class AddProduct extends Component {

    productRef;
     
constructor(props)
{
    super(props);
    this.state = { formValid : false , productName :"" , productDesc :"" , productPrice :""
,productType:"" , url :"" };
    // this.onDrop = this.onDrop.bind(this);
    this.upload = this.upload.bind(this);

    this.productRef = firebase.database().ref("/products");
}

// onDrop(picture) {
  
//     this.setState({
//         pictures: this.state.pictures.concat(picture),
//     });
// }
upload(obj){
    const app = this;
    if(obj != undefined)
    {
        if(obj.filesUploaded.length >0)
        {
            let url = obj.filesUploaded[0].url;
            app.setState({url:url});
            
        }
    }
    console.log("obj",obj);
}

submit = ()=>{

if(this.state.url != "")
{
    this.productRef.push({

        productName:this.state.productName,
        productDesc : this.state.productDesc,
        productPrice : this.state.productPrice,
        productType : this.state.productType,
        image : this.state.url



    }).then(()=>{
window.location.reload();
    })
}

}
render(){

    return (
    <div>
       <Header/>
       <SideMenu/>
       <div className="content-right"> 
       <br/>
       <div className="container">
       
       <form>
           <div className="row">
           <div className="col-md-4">
           <div className="form-group">
           <label>Product name</label>
           <input type="text" className="form-control" placeholder="Product Name" onChange={(e)=>{
               this.setState({productName:e.target.value}, ()=>{
                if(this.state.productName != "" && this.state.productDesc != "" && this.state.productPrice != ""
                && this.state.productType != "")
                {
                    this.setState({formValid:true});
                }
            })
           }}/>
           </div>
           </div>
           <div className="col-md-4">
           <label>Category</label>
           <div className="form-group">
           <select onChange={(e)=>{
               this.setState({productType:e.target.value}, ()=>{
                if(this.state.productName != "" && this.state.productDesc != "" && this.state.productPrice != ""
                && this.state.productType != "")
                {
                    this.setState({formValid:true});
                }
            })
           }} type="text" className="form-control">
           <option  selected>Select category</option>
           <option value='typeOne'>Type one</option>
           </select>
           </div>
           </div>
           </div>
           {/* line 1 */}
           <div className="row">
           <div className="col-md-4">
           <label>Product Description</label>
           <div className="form-group">
           <input type="text" onChange={(e)=>{
               this.setState({productDesc:e.target.value} , ()=>{
                   if(this.state.productName != "" && this.state.productDesc != "" && this.state.productPrice != ""
                   && this.state.productType != "")
                   {
                       this.setState({formValid:true});
                   }
               })
           }} className="form-control" placeholder="Product Description"/>
           </div>
           </div>
           <div className="col-md-4">
           <label>Product price</label>
           <div className="form-group">
           <input type="number" onChange={(e)=>{
               this.setState({productPrice:e.target.value}, ()=>{
                if(this.state.productName != "" && this.state.productDesc != "" && this.state.productPrice != ""
                && this.state.productType != "")
                {
                    this.setState({formValid:true});
                }
            })
           }} className="form-control" placeholder="Product Price"/>
           </div>
           </div>
        
           </div>
           <div className="row">
           <div className="col-md-4">
           <label>Upload Image</label>
           <div className="form-group">
           <ReactFilestack
           render={({ onPick }) => (
            <div>
             
              <button className="btn btn-primary" disabled={!this.state.formValid} onClick={onPick}>Upload Image</button>
              <p style={{color:"red"}} hidden={this.state.formValid}>you cant upload until you fill all information</p>
            </div>
          )}
  apikey="Ambxd7iw8R4Kr8Vv0BsBPz"
  buttonText="Click me"
  buttonClass="btn btn-primary"
  

  onSuccess={this.upload}
  preload={true}
/>
            </div>
           </div>
           </div>
           <div className="row">
           <div className="col-md-4">
           <input type="button" class="btn btn-danger" disabled={!this.state.formValid} value="Submit" onClick={this.submit}/>
           </div>
           </div>
       </form>
      
       </div>
           
       </div>
       <Footer/>
       

        
    </div>
    )
}

}

export default AddProduct;