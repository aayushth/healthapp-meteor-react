import React,{Component} from 'react';

export default class Follow extends Component{
  constructor(props){
    super(props);
  }

  enterFollow(id){
  Meteor.call("enterFollowData",id,function(err){
    if(!err){
      Bert.alert("Successfully followed",'success','growl-top-right');
    }
    else{
      Bert.alert(err.reason,"danger","growl-top-right");
    }
  });
  }

  makeAppointment(id){
    FlowRouter.go("/profile/appointment/"+id);
  }

  render(){
    let list1=this.props.data[0].map((data) => (
      <ul className="list-group" key={data._id}>
        <li className="list-group-item"><span onClick={this.enterFollow.bind(this,data._id)} className="badge btn btn-sm">Follow</span>{data.profile.name}</li>
      </ul>
    ));

    let list2=this.props.data[1].map((data,i) => (
      <ul className="list-group" key={data._id}>
        <li className="list-group-item"><span onClick={this.makeAppointment.bind(this,data._id)} className="badge btn btn-sm">Make Appointment</span> <span className="badge btn btn-sm">Followed</span>{data.profile.name}</li>
      </ul>
    ));

    return(
      <div className="container">
      <div className="row">

           <div className="panel panel-default">
             <div className="panel-heading text-intro panel-header text-white">To Follow</div>
             <div className="panel-body">
               {list1}
             </div>
           </div>

           <div className="panel panel-default">
             <div className="panel-heading text-intro panel-header text-white">Followed</div>
             <div className="panel-body">
               {list2}
             </div>
           </div>

        </div>
      </div>

    );
  }
}
