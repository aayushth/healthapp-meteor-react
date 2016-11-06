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
                    <h5>Blood Pressure :<span>Value</span> </h5>
                </div>
                </a>
            </div>

            <div className="col-xs-6 col-sm-3">
               <a href="/immunization">
                <div className="blocks">
                    <h5>Immunization:<span>Value</span> </h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
               <a href="cholestrol">
                <div className="blocks">
                    <h5>Cholestrol :<span>Value</span></h5>
                </div>
              </a>  
            </div>

            <div className="col-xs-6 col-sm-3">
              <a href="/temperature">
                <div className="blocks">
                    <h5>Temperature :<span>Value</span></h5>
                </div>
              </a>
            </div>
        </div>

        <div className="row">
            <div className=" col-xs-6 col-sm-3">
              <a href="/pulse">
                <div className="blocks">
                    <h5>Pulse Rate :<span>Value</span></h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
               <a href="/hweight">
                <div className="blocks">
                    <h5>Height Weight Ratio:<span>Value</span></h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
              <a href="/miscellanous">
                <div className="blocks">
                    <h5>Miscellanous :<span>Value</span></h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Exercise and Rest :<span>Value</span></h5>
               </div>
            </div>
    </div>
  </div>
 </div>

</div>
    );
  }

}
