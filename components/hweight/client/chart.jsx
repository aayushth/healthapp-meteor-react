import React,{Component} from 'react';
import RC2 from 'react-chartjs2';

export default class Chart extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.myChart = this.refs['canvas'].getChart();
  }

  render(){
    let chartData = {
    labels: [
        "Average Height To Weight Ratio",
        "Normal Height To Weight Ratio",
    ],
    datasets: [
        {
            data: [this.props.average, 2],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
            ]
        }]
  };

    return(
      <div className="container-fluid">
       <div className="row">
        <div className="col-md-8 col-md-offset-2">

         <div className="panel panel-primary">
          <div className="panel-heading">
           <div className="panel-title">Average of Height To Weight Ratio</div>
          </div>
          <div className="panel-body">
            <RC2 ref='canvas' data={chartData} type='pie' />
          </div>
         </div>


        </div>
       </div>
      </div>
    );
  }
}