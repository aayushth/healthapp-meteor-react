import React,{Component} from 'react';

export default class Patient extends Component{
  constructor(props){
    super(props);
  }

  render(){
  let pressure=this.props.dataAll[0].map((pressure)=> (
    <span className="value-color" key={pressure._id}>{pressure.highPressure} | {pressure.lowPressure} hg</span>
  ));

  let cholestrol=this.props.dataAll[2].map((cholestrol)=> (
    <span className="value-color" key={cholestrol._id}>{cholestrol.hdl}|{cholestrol.ldl} mg</span>
  ));

  let hweight=this.props.dataAll[3].map((hweight)=> (
    <span className="value-color" key={hweight._id}>{hweight.height}/{hweight.weight}</span>
  ));

  let temperature=this.props.dataAll[4].map((temperature)=> (
    <span className="value-color" key={temperature._id}>{temperature.temperature} degree celsius</span>
  ));

  let pulse=this.props.dataAll[5].map((pulse)=> (
    <span className="value-color" key={pulse._id}>{pulse.pulse} per min</span>
  ));

  return(
 <div>

  <div className="quick-links">
    <div className="container user-quick-links">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
           <div className="well text-intro" style={{backgroundColor:'#3498db',color:'white'}}>
            <h2 className="text-center">You are now {this.props.dataAll[7]}% healthy</h2>
           </div>
          </div>
        </div>
        <div className="row">
            <div className=" col-xs-6 col-sm-3">
                <a href="/pressure">
                 <div className="blocks">
                    <h5>Blood Pressure: {pressure} </h5>
                </div>
                </a>
            </div>

            <div className="col-xs-6 col-sm-3">
               <a href="/immunization">
                <div className="blocks">
                    <h5>Immunization</h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
               <a href="/cholestrol">
                <div className="blocks">
                    <h5>Cholestrol :{cholestrol}</h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
              <a href="/temperature">
                <div className="blocks">
                    <h5>Temperature :{temperature}</h5>
                </div>
              </a>
            </div>
        </div>

        <div className="row">
            <div className=" col-xs-6 col-sm-3">
               <a href="/pulse">
                <div className="blocks">
                    <h5>Pulse Rate :{pulse}</h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
              <a href="/hweight">
                <div className="blocks">
                    <h5>Height Weight Ratio :{hweight}</h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
              <a href="/miscellanous">
                <div className="blocks">
                    <h5>Miscellanous</h5>
                </div>
              </a>
            </div>

            <div className="col-xs-6 col-sm-3">
                <div className="blocks">
                    <h5>Exercise and Rest</h5>
               </div>
            </div>
    </div>
  </div>
 </div>

</div>

    );
  }

}
