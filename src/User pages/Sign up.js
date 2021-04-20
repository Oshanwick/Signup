import React, { Component } from "react";
import axios from "axios";

 class SignUp extends Component {

    constructor(props){
        super(props)
        this.state={
            userName:'',
            role:'',
            email:'',
            password:'',
        }   

    }
     changeHandler = e => {
         this.setState({[e.target.name]: e.target.value})
     }      
                
        submitHandler = e => {
                e.preventDefult()
                console.log(this.state)
                axios.post('http://cerberus-library-user.herokuapp.com/signup', this.state)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)

                    })
                
            
        }    
        
    
    render() {
        const {userName, role ,email,password} =  this.state
        return (
           <div>
            <form onSubmit={this.submitHandler}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" name="userName" value = {userName}  onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                <label>Role</label>
                    
                    <select className = "form-control"  value = {role} name="role" onChange={this.changeHandler}>
                           <option value="Official">Official</option>
                           <option value="Member">Member</option>
                     </select>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value = {email} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value = {password} onChange={this.changeHandler} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href ={"/sign-in"}>sign in?</a> 
                </p>
                
            </form>
            </div>  
        );
    }
}

export default SignUp