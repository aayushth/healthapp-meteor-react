import React,{Component} from 'react';

export default class Timeline extends Component{
  constructor(props){
    super(props);
  }

  renderTimeline(){
    return this.props.data.map((immunization,index) => (
      <div className="timeline-wrapper" key={immunization._id}>
        <h2 className="timeline-time">{immunization.created_at}</h2>
        <dl className="timeline-series">
          <dt className="timeline-event" id={"event0"+index}><a>{immunization.bcg?'B.C.G':''}{immunization.dpt?'D.P.T':''}{immunization.polio?'Polio':''}
          {immunization.measles?'Measles':''}{immunization.je?'J.E':''}{immunization.hepatitisB1?'Hepatitis-B I':''}
          {immunization.hepatitisB2?'Hepatitis-B II':''}{immunization.hepatitisB3?'Hepatitis-B III':''}</a></dt>
          <dd className="timeline-event-content" id={"event0"+index+"EX"}>
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
           <div className="panel-title">Timeline of Immunization History Record</div>
          </div>
          <div className="panel-body">

            <div id="timeline" className="timeline-container">
              {this.renderTimeline()}
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
