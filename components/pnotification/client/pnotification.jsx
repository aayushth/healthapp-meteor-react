import React,{Component} from 'react';

export default class PNotification extends Component{
  constructor(props){
    super(props);
  }

  render(){
   let tableData=this.props.data.map((prescribe) => (
     <table className="table table-bg text-intro" key={prescribe._id}>
        <tbody>
           <tr>
              <td>Name</td>
              <td>{prescribe.name} {prescribe.lname}</td>
           </tr>
           <tr>
              <td>Age</td>
              <td>{prescribe.age}</td>
           </tr>
           <tr>
              <td>Weight</td>
              <td>{prescribe.weight}</td>
           </tr>
           <tr>
              <td>Disease</td>
              <td>{prescribe.disease}</td>
           </tr>
           <tr>
              <td>Medicine</td>
              <td>{prescribe.medicine}</td>
           </tr>
           <tr>
              <td>Message</td>
              <td>{prescribe.message}</td>
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
