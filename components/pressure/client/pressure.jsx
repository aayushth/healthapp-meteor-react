import React,{Component} from 'react';

export default class Pressure extends Component{
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

  render(){
    return(
    <div>
      <div className="navbar narvar-static-top top-bar" >
        <div className="container">
          <a href="/" className="navbar-brand text-intro text-white">Online Patient Portal</a>

          <ul className="nav navbar-nav navbar-right">
                <li className="dropdown ">
                  <a href="#" className="dropdown-toggle text-white text-desc user-account" data-toggle="dropdown">
                    <i className="fa fa-user" aria-hidden="true"></i> <span> Account Name </span><span className="caret"></span>
                  </a>

                  <ul className="dropdown-menu">

                     <li>
                      <div className="navbar-content">
                         <div className="row">
                           <div className="col-sm-3">
                            <a href="#" className="text-center"><i className="fa fa-user fa-4x" aria-hidden="true"></i></a>
                           </div>
                           <div className="col-sm-9">
                            <p><strong> Name </strong></p>
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
                                      <a href="#" className="btn btn-danger btn-block sign-out">Sign Out</a>
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

      <div className="container-fluid">
       <div className="row">
        <div className="col-md-12">

        <div id="timeline" className="timeline-container">
          <div className="timeline-wrapper">
               <h2 className="timeline-time">1976</h2>
                <dl className="timeline-series">
                     <dt className="timeline-event" id="event01"><a>Event</a></dt>
                     <dd className="timeline-event-content" id="event01EX">
                             <p>Content about the event goes here.</p>
                     </dd>

                     <dt className="timeline-event" id="event02"><a>Another Event</a></dt>
                     <dd className="timeline-event-content" id="event02EX">
                             <p>Content about the other event.</p>
                     </dd>
                </dl>
         </div>

         <div className="timeline-wrapper">
                <h2 className="timeline-time">1984</h2>
                <dl className="timeline-series">

                     <dt className="timeline-event" id="event03"><a>Yet Another Event</a></dt>
                     <dd className="timeline-event-content" id="event03EX">
                             <p>Content about the event goes here.</p>
                     </dd>
               </dl>
     </div>
     <br className="clear" />
   </div>

        </div>
       </div>
      </div>

</div>
    );
  }

}
