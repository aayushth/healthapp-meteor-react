import React,{Component} from 'react';
import {Compare} from './helper/helper.js';

export default class Pupdate extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('<link>')
    .appendTo('head')
    .attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: '/css/bootstrap.vertical-tabs.css'
    });
  }

  handleUpdate(e){
    e.preventDefault();
    let age=$("#age").val();
    let address=$("#address").val();
    let phone=$("#phone").val();
    let blood=$("#blood").val();
    let sex=$('input[name=sex]:checked').val();
    let data={
      age:age,
      address:address,
      phone:phone,
      sex:sex,
      blood:blood,
      created_at:Date.now(),
      updated_at:Date.now()
    }
    Meteor.call("enterPupdateData",data,function(err){
      if(!err){
        $("#age").val('');
        $("#address").val('');
        $("#phone").val('');
        $('input[name=sex]:checked').val('');
        Bert.alert("Success on submitting data",'success','growl-top-right');
      }
      else{
        Bert.alert(err.reason,'danger','growl-top-right');
      }
    });
  }

  changeUsername(e){
   e.preventDefault();
   let username=$("#username").val();
   Meteor.call("changeUser",username,function(err){
     if(!err){
       $("#username").val('');
       Bert.alert("Successfully changed username",'success','growl-top-right');
     }
     else{
       Bert.alert(err.reason,'danger','growl-top-right');
     }
   });
  }

  changePassword(e){
    e.preventDefault();
    let current=$("#current").val();
    let new1=$("#pwd1").val();
    let new2=$("#pwd2").val();
    let compare=Compare(new1,new2);
    if(compare==true){
      Accounts.changePassword(current,new1,function(err){
        if(!err){
          $("#current").val('');
          $("#pwd1").val('');
          $("#pwd2").val('');
          Bert.alert("Successfully changed password",'success','growl-top-right');
        }
        else{
          Bert.alert(err.reason,'danger','growl-top-right');
        }
      });
    }
    else{
      Bert.alert("Password doesn't matches");
    }
  }

  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="tabbable tabs-left">

          <ul className="nav nav-tabs update-tab ">
            <li className="active"><a href="#profile" className="text-intro text-center" data-toggle="tab"><h4><i className="fa fa-user-plus " aria-hidden="true"></i></h4> Profile</a></li>
            <li><a href="#account" className="text-intro text-center" data-toggle="tab"><h4><i className="fa fa-user " aria-hidden="true"></i></h4>Account</a></li>
            <li><a href="#security" className="text-intro text-center" data-toggle="tab"><h4><i className="fa fa-envelope " aria-hidden="true"></i></h4> Email</a></li>
          </ul>

          <div className="tab-content col-sm-10">
           <div className="tab-pane active" id="profile">

           <div className="panel panel-default">
             <div className="panel-heading text-intro panel-header text-white">Update Profile</div>
             <div className="panel-body">
               <form onSubmit={this.handleUpdate}>
                  <div className="form-group text-intro">
                    <label htmlFor="age" >Age:</label>
                    <input type="number" className="form-control" id="age" />
                  </div>
                  <div className="radio text-intro">
                    <label>
                      <input type="radio" name="sex" id="male" value="male" />
                      Male
                    </label>
                  </div>
                  <div className="radio text-intro">
                    <label>
                      <input type="radio" name="sex" id="female" value="female" />
                      Female
                    </label>
                  </div>
                  <div className="form-group text-intro">
                    <label htmlFor="blood">Blood Group:</label>
                    <input type="text" className="form-control" id="blood" />
                  </div>
                  <div className="form-group text-intro">
                    <label htmlFor="address">Address:</label>
                    <input type="text" className="form-control" id="address" />
                  </div>
                  <div className="form-group text-intro">
                    <label htmlFor="phone">Phone No:</label>
                    <input type="number" className="form-control" id="phone" />
                  </div>
                  <button type="submit" className="btn btn-primary button-shape text-intro">Submit</button>
                </form>
             </div>
           </div>

           </div>
           <div className="tab-pane" id="account">

             <div className="panel panel-default ">
               <div className="panel-heading text-intro panel-header text-white">Change Username</div>
               <div className="panel-body">
                 <p className="text-intro">Username</p>

                 <a className="btn btn-primary text-intro button-shape" role="button" data-toggle="collapse" href="#collapseUser" aria-expanded="false" aria-controls="collapseUser">
                   Change Username
                 </a>
                 <div className="collapse" id="collapseUser">
                   <div className="well">
                      <form onSubmit={this.changeUsername}>
                      <div className="form-group text-intro">
                        <label htmlFor="username" >Choose Username:</label>
                        <input type="text" className="form-control" id="username" required/>
                      </div>
                      <button type="submit" className="btn btn-primary button-shape text-intro">Submit</button>
                      </form>
                   </div>
                 </div>

               </div>
             </div>

             <div className="panel panel-default">
               <div className="panel-heading text-intro panel-header text-white">Change Password</div>
               <div className="panel-body">
                 <form onSubmit={this.changePassword}>
                    <div className="form-group text-intro">
                      <label htmlFor="current" >Current Password:</label>
                      <input type="password" className="form-control" id="current" required />
                    </div>
                    <div className="form-group text-intro">
                      <label htmlFor="pwd1">New Password:</label>
                      <input type="password" className="form-control" id="pwd1" required/>
                    </div>
                    <div className="form-group text-intro">
                      <label htmlFor="pwd2">Confirm Password:</label>
                      <input type="password" className="form-control" id="pwd2" required/>
                    </div>
                    <button type="submit" className="btn btn-primary button-shape text-intro">Update Password</button>
                  </form>
                  <h6><a href="#" className="text-desc">Forget Password ?</a></h6>
               </div>
             </div>

           </div>

           <div className="tab-pane" id="security">
              <div className="panel panel-default">
                <div className="panel-heading text-intro panel-header text-white">Email</div>
                <div className="panel-body text-intro">
                  <p className="">Your email address will be used for account-related notifications</p>
                  <span>current email <a href="#" className="delete-email"><i className="fa fa-trash" aria-hidden="true"></i></a></span>
                </div>
                <div className="panel-footer ">
                  <section className="">
                    <label htmlFor="ex3"><strong><p className="text-intro">Add email address</p></strong></label>
                    <input className="form-control" id="ex3" type="text" />
                    <button type="buttn" className="btn btn-primary button-shape button-margin">Add</button>
                  </section>

                  </div>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>

    );
  }
}
