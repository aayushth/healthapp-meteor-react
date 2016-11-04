import React,{Component} from 'react';

export default class Register extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();
    let name=$("#fname").val();
    let email=$("#email").val();
    let password=$("#password").val();

    Accounts.createUser({
      email:email,
      password:password,
      profile:{name:name}
    });

    FlowRouter.go("info");
  }

  render(){
    return(
    <div className="container-fluid">
     <div className="row">
      <div className="col-md-12">

      <h1 className="text-center">Register Here</h1>
      <div className="col-md-6 col-md-offset-3">
         {/* Login Form*/ }
         <form onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label htmlFor="fname">Full name:</label>
           <input type="text" id="fname" className="form-control" placeholder="Enter your name" required/>
         </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" placeholder="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required/>
          </div>
          <button type="submit" className="btn btn-primary">Ready inside</button>
         </form>
         {/*Forms Ends*/}
         <p className="helper-text text-center">Already have an account ?<a href="/login"> Sign In here</a></p>
      </div>

   </div>
    </div>
  </div>
    );
  }

}
