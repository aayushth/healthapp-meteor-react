import React,{Component} from 'react';

export default class Pinfo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let info=this.props.data[0].map((info) => (
    <div key={info._id}>
      <p>{info.age}</p>
      <p>{info.sex}</p>
      <p>{info.address}</p>
      <p>{info.blood}</p>
    </div>
    ));

    let user=this.props.data[1].map((user) => (
    <div key={user._id}>
      <p>{user.profile.name}</p>
      <p>{user.emails[0].address}</p>
    </div>
    ));
    return(
      <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading text-intro panel-header text-white">General Information</div>
        <div className="panel-body text-intro">
          <div className="row">
            <div className="col-sm-3 col-xs-3">
              <p>Name: </p>
              <p>Email:</p>
              <p>Age: </p>
              <p>Gender: </p>
              <p>Address: </p>
              <p>Blood Group</p>
            </div>
            <div className="col-sm-9 col-xs-9">
               {user}
               {info}
            </div>
          </div>
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-heading text-intro panel-header text-white">Contact Information</div>
        <div className="panel-body text-intro">
          <div className="row">
            <div className="col-sm-3 col-xs-3">
              <p>Mobile: </p>
              <p>Secondary Email: </p>
            </div>
            <div className="col-sm-9 col-xs-9">
               <p>value</p>
               <p>ssfds</p>

            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}
