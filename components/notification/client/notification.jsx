import React,{Component} from 'react';

export default class Notification extends Component{
  constructor(props){
    super(props);
  }

  render(){
   let tableData=this.props.data.map((notify) => (
     <table className="table table-bg text-intro" key={notify._id}>
        <tbody>
           <tr>
              <td>Name</td>
              <td>{notify.name} {notify.lname}</td>
           </tr>
           <tr>
              <td>Contact</td>
              <td>{notify.contact}</td>
           </tr>
           <tr>
              <td>Date Of Birth</td>
              <td>{notify.dob}</td>
           </tr>
           <tr>
              <td>Email</td>
              <td>{notify.email}</td>
           </tr>
           <tr>
              <td>Appointment Date and Time</td>
              <td>{notify.appointment} {notify.time}</td>
           </tr>
           <tr>
              <td>Message</td>
              <td>{notify.message}</td>
           </tr>
        </tbody>
      </table>
   ));
    return(
      <div className="container">
      <div className="row">

           <div className="panel panel-default">
             <div className="panel-heading text-intro panel-header text-white">Notifications List</div>
             <div className="panel-body">
               {tableData}
             </div>
           </div>

        </div>
      </div>

    );
  }
}
