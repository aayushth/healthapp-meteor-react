import React,{Component} from 'react';

export default class Timeline extends Component{
  constructor(props){
    super(props);
  }

  renderTimeline(){
    return this.props.data.map((pressure) => (
      <div className="timeline-wrapper" key={pressure._id}>
        <h2 className="timeline-time">{pressure.created_at}</h2>
        <dl className="timeline-series">
          <dt className="timeline-event" id="event01"><a>{pressure.highPressure}/{pressure.lowPressure} mm of hg</a></dt>
          <dd className="timeline-event-content" id="event01EX">
            <p>Content</p>
          </dd>
        </dl>
      </div>
    ));
  }

  render(){
    return(
      <div className="container-fluid">
       <div className="row">
        <div className="col-md-8 col-md-offset-2">

         <div className="panel panel-primary">
          <div className="panel-heading">
           <div className="panel-title">Timeline of Pressure History Record</div>
          </div>
          <div className="panel-body">

            <div id="timeline" className="timeline-container">
              {this.renderTimeline()}

              {/*<div className="timeline-wrapper">
                <h2 className="timeline-time">1976</h2>
                <dl className="timeline-series">
                  <dt className="timeline-event" id="event02"><a>130/80 mm of hg</a></dt>
                  <dd className="timeline-event-content" id="event02EX">
                    <p>Content</p>
                  </dd>
                </dl>
              </div>*/}
              <br className="clear" />
            </div>

          </div>
         </div>


        </div>
       </div>
      </div>
    );
  }
}
