import React,{Component} from 'react';

export default class Profileview extends Component{
  constructor(props){
    super(props);
  }

  printBegin(){
    window.print();
  }

  render(){
  let users=this.props.data[0].map((user) => (
    <div key={user._id}>
     <p>{user.profile.name} </p>
     <p>{user.username}</p>
     <p>{user.emails[0].address}</p>
    </div>
  ));

  let info=this.props.data[1].map((info) => (
    <div key={info._id}>
     <p>{info.age} </p>
     <p>{info.address}</p>
     <p>{info.phone}</p>
     <p>{info.sex}</p>
     <p>{info.blood}</p>
    </div>
  ));

  let pressure=this.props.data[2].map((pressure) => (
     <p key={pressure._id}>{pressure.highPressure}|{pressure.lowPressure} mm of hg </p>
  ));

  let cholestrol=this.props.data[3].map((cholestrol) => (
     <p key={cholestrol._id}>{cholestrol.hdl}|{cholestrol.ldl} mg </p>
  ));

  let pulse=this.props.data[4].map((pulse) => (
     <p key={pulse._id}>{pulse.pulse} </p>
  ));

  let temperature=this.props.data[5].map((temperature) => (
     <p key={temperature._id}>{temperature.temperature} degree celsius </p>
  ));
    return(
      <div className="container">

        <div className="panel panel-default">
          <div className="panel-heading text-intro panel-header text-white">General Information</div>
          <div className="panel-body text-intro">
            <div className="row">
              <div className="col-sm-3 col-xs-3">
                <p>Name: </p>
                <p>Username:</p>
                <p>Email: </p>
                <p>Age: </p>
                <p>Address:</p>
                <p>Phone: </p>
                <p>Sex:</p>
                <p>Blood Group:</p>
              </div>
              <div className="col-sm-9 col-xs-9">
                {users}
                {info}
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading text-intro panel-header text-white">Medical Information</div>
          <div className="panel-body text-intro">
            <div className="row">
              <div className="col-sm-3 col-xs-3">
                <p>Pressure: </p>
                <p>Cholestrol:</p>
                <p>Pulse Rate per min:</p>
                <p>Temperature</p>
              </div>
              <div className="col-sm-9 col-xs-9">
                {pressure}
                {cholestrol}
                {pulse}
                {temperature}
              </div>
            </div>
          </div>
          <div className="panel-footer hidden-print">
             <button onClick={this.printBegin} className="btn btn-primary">Print</button>
          </div>
        </div>

      </div>
    );
  }

}
