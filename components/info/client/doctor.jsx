import React,{Component} from 'react';
import Navbar from './container/login-data.js';

export default class Doctor extends Component{
  constructor(props){
    super(props);
  }

  render(){
  let name=this.props.data[2].map((users) =>(
    <div key={users._id}>
     <div className="col sm-3">
       <a href="#"><img src={users.profile.avatar} className="rounded float-xs-left avatar" /></a>
     </div>
      <h4><strong className="text-intro">{users.profile.name}</strong></h4>
      <h5><strong><p className="text-desc">{users.username}</p></strong></h5>
    </div>
    ));

  let count=this.props.data[0];
  let tableData=this.props.data[1].map((info) => (
    <table key={info._id} className="table table-bg text-intro">
      <tbody>
        <tr>
         <td>Sex</td>
         <td>{info.sex}</td>
        </tr>
        <tr>
         <td>Age</td>
         <td>{info.age}</td>
        </tr>
        <tr>
         <td>Address</td>
         <td>{info.address}</td>
        </tr>
        <tr>
         <td>Blood Group</td>
         <td>{info.blood}</td>
        </tr>
        <tr>
         <td>Contact No</td>
         <td>{info.phone}</td>
        </tr>
        </tbody>
    </table>
  ));
  return(
   <section className="doctor-content">

   <div className="profile-nav">
    <div className="container">

      <div className="row">

        {name}

      </div>
       <div className="row user-nav ">
         <div className=" col-sm-9">
           <ul className="list-inline text-nav ">
            <li><a href="/profile/doctor/info" className="text-intro text-navbar">Info</a></li>
            <li><a href="/profile/doctor/update" className="text-intro text-navbar">Update</a> </li>
            <li><a href="/profile/doctor/notification" className="text-intro text-navbar">Notifications <span className="badge">{count}</span></a> </li>
            <li><a href="/profile/doctor/follow" className="text-intro text-navbar">Follower</a> </li>
           </ul>
         </div>
       </div>

     </div>
    </div>

    <div className="container">
    <div className="row">
        {tableData}
    </div>
</div>

   </section>

    );
  }

}
