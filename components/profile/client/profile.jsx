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
     <div>
      <h4><strong className="text-intro">{users.profile.name}</strong></h4>
      <h5><strong><p className="text-desc">{users.username}</p></strong></h5>
    </div>
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

    let image=this.props.data[7].map((image) => (
      <img key={image._id} src={image.profile.avatar} className="rounded float-xs-left avatar" />
    ));

    return(
    //================ Profile Content ==================
    <section className="profile-content">

     <div className="profile-nav">
      <div className="container">

        <div className="row">
          <div className="col sm-3">
            <a href="#">{image}</a>
          </div>

          {name}

        </div>
         <div className="row user-nav ">
           <div className=" col-sm-9">
             <ul className="list-inline text-nav ">
              <li><a href="/profile/info" className="text-intro text-navbar">Info</a></li>
              <li><a href="/profile/update" className="text-intro text-navbar">Update</a> </li>
              <li><a href="/profile/notification" className="text-intro text-navbar">Notifications <span className="badge">{this.props.data[6]}</span></a> </li>
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
