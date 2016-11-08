import React,{Component} from 'react';

export default class Login extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();
    let email=$("#email").val();
    let password=$("#password").val();

    Meteor.loginWithPassword(email,password,function(err){
      if(!err){
        FlowRouter.go("info");
      }
      else{
        Bert.alert(err.reason,'danger','growl-top-right');
      }
    });
  }

  render(){
    return(
    <div className="container-fluid">
     <div className="row">
      <div className="col-md-12">

       <h1 className="text-center">Login</h1>
       <div className="col-md-6 col-md-offset-3">
         {/* Login Form*/ }
         <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" placeholder="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
         </form>
         {/*Forms Ends*/}
         <p className="helper-text text-center">Don't have an account ?<a href="/register"> Sign Up here</a></p>
       </div>

   </div>
    </div>
  </div>
    );
  }

}
