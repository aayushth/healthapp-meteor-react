import React,{Component} from 'react';
import Timeline from './container/timeline.js';
import Chart from './container/chart.js';

export default class Miscellanous extends Component{
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
    let data={
      eye:$("#eye").val(),
      nail:$("#nail").val(),
      tongue:$("#tongue").val(),
      created_at:Date.now(),
      updated_at:Date.now()
    };

    Meteor.call("enterMiscellanousData",data,function(err){
      if(!err){
        $("#eye").val('');
        $("#nail").val('');
        $("#tongue").val('');
        Bert.alert('Success on submitting data','success','growl-top-right');
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
                            <a href="#" className="btn btn-primary btn-block btn-sm sign-out">View Profile</a>
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

{/*============================= Miscellanous Entry =================*/}
      <div className="container-fluid">
       <div className="row">
         <div className="col-md-8 col-md-offset-2">
           <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title">Miscellanous Entry Form</div>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="eye">Eyes Color:</label>
                  <input type="text" id="eye" className="form-control" placeholder="Enter Eyes Color" />
                </div>
                <div className="form-group">
                  <label htmlFor="nail">Nail Color:</label>
                  <input type="text" id="nail" className="form-control" placeholder="Enter Nail Color" />
                </div>
                <div className="form-group">
                  <label htmlFor="tongue">Tongue Color:</label>
                  <input type="text" id="tongue" className="form-control" placeholder="Enter Tongue Color" />
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
