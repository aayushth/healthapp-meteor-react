import React,{Component} from 'react';

export default class Profile extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    let name=this.props.data[0].map((users) =>(
      <p key={users._id}>{users.profile.name}</p>
    ));

    let pressure=this.props.data[1].map((pressure) =>(
      <tr key={pressure._id}>
        <td>Pressure</td>
        <td>{pressure.highPressure}/{pressure.lowPressure} mm of hg</td>
      </tr>
    ));

    let cholestrol=this.props.data[2].map((cholestrol) =>(
      <tr key={cholestrol._id}>
        <td>Cholestrol</td>
        <td>HDL {cholestrol.hdl}/LDL {cholestrol.ldl}</td>
      </tr>
    ));

    let temperature=this.props.data[3].map((temperature) =>(
      <tr key={temperature._id}>
        <td>Temperature</td>
        <td>{temperature.temperature} degree Celsius</td>
      </tr>
    ));

    let pulse=this.props.data[4].map((pulse) =>(
      <tr key={pulse._id}>
        <td>Pulse Rate</td>
        <td>{pulse.pulse} per min</td>
      </tr>
    ));

    let hweight=this.props.data[5].map((hweight) =>(
      <tr key={hweight._id}>
        <td>Height And Weight Value</td>
        <td>Height {hweight.height} | Weight {hweight.weight}</td>
      </tr>
    ));

    return(
    //================ Profile Content ==================
    <section className="profile-content">

     <div className="profile-nav">
      <div className="container">

        <div className="row">
          <div className="col sm-3">
            <a href="#"><img src="/nature.jpg" className="rounded float-xs-left" /></a>
          </div>
          <h4><strong>{name}</strong></h4>
        </div>
         <div className="row user-nav ">
           <div className=" col-sm-9">
             <ul className="list-inline text-nav ">
              <li><a href="/profile/info" className="text-intro text-navbar">Info</a></li>
              <li><a href="/profile/update" className="text-intro text-navbar">Update</a> </li>
              <li><a href="/profile/prescription" className="text-intro text-navbar">Prescription</a> </li>
              <li><a href="/profile/appointment" className="text-intro text-navbar">Appointment</a> </li>
              <li><a href="/profile/follow" className="text-intro text-navbar">Following</a> </li>
             </ul>
           </div>
         </div>

       </div>
      </div>

      <div className="container">
      <div className="row">
        <table className="table table-bg text-intro">
          <tbody>
             {pressure}
             {cholestrol}
             {temperature}
             {pulse}
             {hweight}
            </tbody>
          </table>
      </div>
  </div>

    </section>
    );
  }

}
