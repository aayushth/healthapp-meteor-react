import React,{Component} from 'react';

export default class Profile extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
    //================ Profile Content ==================
    <section className="profile-content">

     <div className="profile-nav">
      <div className="container">

        <div className="row">
          <div className="col sm-3">
            <a href="#"><img src="/nature.jpg" className="rounded float-xs-left" /></a>
          </div>
          <h4><strong><p>username</p></strong></h4>
        </div>
         <div className="row user-nav ">
           <div className=" col-sm-9">
             <ul className="list-inline text-nav ">
              <li><a href="" className="text-intro text-navbar">Info</a></li>
              <li><a href="" className="text-intro text-navbar">Update</a> </li>
              <li><a href="" className="text-intro text-navbar">Photos</a> </li>
              <li><a href="" className="text-intro text-navbar">Video</a> </li>
              <li><a href="" className="text-intro text-navbar">Following</a> </li>
             </ul>
           </div>
         </div>

       </div>
      </div>

      <div className="container">
      <div className="row">
        <table className="table table-bg text-intro">
          <tbody>
            <tr>
              <td>sds</td>
              <td>Ottsdsdo</td>
            </tr>
            <tr>
              <td>aasas</td>
              <td>Thoasasasrnton</td>
            </tr>
            <tr>
              <td>aasa</td>
              <td>the asas</td>
            </tr>
            </tbody>
          </table>
      </div>
  </div>

    </section>
    );
  }

}
