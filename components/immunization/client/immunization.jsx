import React,{Component} from 'react';
import Timeline from './container/timeline.js';
import Chart from './container/chart.js';

export default class Immunization extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  $.getScript( "/js/timeliner.min.js" ).done(function(){
      $.timeliner({});
			$.timeliner({
				timelineContainer: '#timeline-js',
				timelineSectionMarker: '.milestone',
				oneOpen: true,
				startState: 'flat',
				expandAllText: '+ Show All',
				collapseAllText: '- Hide All'
			});
  });
  }

  Logout(e){
  e.preventDefault();
  Meteor.logout(function(err){
    if(!err){
      FlowRouter.go("/");
    }
  });
  }

  handleSubmit(e){
    e.preventDefault();
    let bcg=$('#bcg').is(':checked');
    let dpt=$('#dpt').is(':checked');
    let polio=$('#polio').is(':checked');
    let measles=$('#measles').is(':checked');
    let je=$('#je').is(':checked');
    let hepatitisB1=$('#hepatitisB1').is(':checked');
    let hepatitisB2=$('#hepatitisB2').is(':checked');
    let hepatitisB3=$('#hepatitisB3').is(':checked');
    let data={
      bcg:bcg,
      dpt:dpt,
      polio:polio,
      measles:measles,
      je:je,
      hepatitisB1:hepatitisB1,
      hepatitisB2:hepatitisB2,
      hepatitisB3:hepatitisB3,
      created_at:Date.now(),
      updated_at:Date.now()
    }
    Meteor.call("enterImmunizationData",data,function(err){
      if(!err){
        Bert.alert("Success on submitting data",'success','growl-top-right');
      }
      else{
        Bert.alert(err,'danger','growl-top-right');
      }
    });

  }

  render(){
    let email=this.props.data[0].emails[0].address;
    let name=this.props.data[0].profile.name;
    return(
    //================ Navbar Content ==================
    <div>
      <div className="navbar narvar-static-top top-bar" >
        <div className="container">
          <a href="/" className="navbar-brand text-intro text-white">Online Patient Portal</a>

          <ul className="nav navbar-nav navbar-right">
                <li className="dropdown ">
                  <a href="#" className="dropdown-toggle text-white text-desc user-account" data-toggle="dropdown">
                    <i className="fa fa-user" aria-hidden="true"></i> <span> {email} </span><span className="caret"></span>
                  </a>

                  <ul className="dropdown-menu">

                     <li>
                      <div className="navbar-content">
                         <div className="row">
                           <div className="col-sm-3">
                            <a href="#" className="text-center"><i className="fa fa-user fa-4x" aria-hidden="true"></i></a>
                           </div>
                           <div className="col-sm-9">
                            <p><strong> {name} </strong></p>
                            <a href="profile" className="btn btn-primary btn-block btn-sm sign-out">View Profile</a>
                           </div>
                         </div>
                        </div>
                      </li>

                        <div className="divider"></div>

                        <li>
                          <div className="navbar-login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p>
                                      <a href="#" onClick={this.Logout} className="btn btn-danger btn-block sign-out">Sign Out</a>
                                    </p>
                                </div>
                            </div>
                          </div>
                        </li>

                  </ul>
                </li>
          </ul>
        </div>
      </div>

{/*============================= Immunization Entry =================*/}
      <div className="container-fluid">
       <div className="row">
         <div className="col-md-8 col-md-offset-2">
           <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title">Immunization Entry Form</div>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="bcg" value="bcg" />B.C.G
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="dpt" value="dpt" />D.P.T
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="polio" value="polio" />Polio
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="measles" value="measles" />Measles
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="je" value="je" />J.E
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="hepatitisB1" value="hepatitis B-I"/>Hepatitis B-I
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="hepatitisB2" value="hepatitis B-II" />Hepatitis B-II
                   </label>
                 </div>
                 <div className="checkbox">
                   <label>
                   <input type="checkbox" id="hepatitisB3" value="hepatitis B-III"/>Hepatitis B-III
                   </label>
                 </div>
                 <button type="submit" className="btn btn-default">Submit</button>
                </form>

              </div>
           </div>
         </div>
       </div>
      </div>

      <Timeline />
      <Chart />
</div>
    );
  }

}
