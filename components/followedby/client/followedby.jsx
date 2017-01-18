import React,{Component} from 'react';

export default class Followedby extends Component{
  constructor(props){
    super(props);
  }

  makePrescription(id){
    FlowRouter.go("/profile/prescription/"+id);
  }

  viewProfile(id){
    FlowRouter.go("/profile/patient/view/"+id);
  }

  render(){

    let list1=this.props.data.map((data,i) => (
      <ul className="list-group" key={data._id}>
        <li className="list-group-item"><span onClick={this.makePrescription.bind(this,data._id)} className="badge btn btn-sm">Give Prescription</span> <span className="badge btn btn-sm">Followed By</span> <span onClick={this.viewProfile.bind(this,data._id)} className="badge btn btn-sm">View Profile</span> {data.profile.name}</li>
      </ul>
    ));

    return(
      <div className="container">
      <div className="row">

           <div className="panel panel-default">
             <div className="panel-heading text-intro panel-header text-white">Followed By</div>
             <div className="panel-body">
               {list1}
             </div>
           </div>

        </div>
      </div>

    );
  }
}
