import React,{Component} from 'react';
import Navbar from './container/login-data.js';

export default class Info extends Component{
  constructor(props){
    super(props);
  }

  Logout(e){
    e.preventDefault();
  Meteor.logout(function(err){
    if(!err){
      FlowRouter.go("/");
    }
  });
  }

  render(){
  return(
   <div>

  <Navbar />

  <div className="quick-links">
    <div className="container user-quick-links">
        <div className="row">
            <div className=" col-xs-6 col-sm-3">
                <a href="/pressure">
                 <div className="blocks">
                    <h5>Pressure :<span>Value</span> </h5>
                </div>
                </a>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Weight :<span>Value</span> </h5>
                </div>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Cholestrol :<span>Value</span></h5>
                </div>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Blood Pressure :<span>Value</span></h5>
                </div>
            </div>
        </div>

        <div className="row">
            <div className=" col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Gender :<span>Value</span></h5>
                </div>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Blood type :<span>Value</span></h5>
                </div>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Height :<span>Value</span></h5>
                </div>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>XYZ :<span>Value</span></h5>
               </div>
            </div>
    </div>
  </div>
 </div>

</div>
    );
  }

}
