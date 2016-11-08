import React,{Component} from 'react';
import RC2 from 'react-chartjs2';

export default class Chart extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.myChart = this.refs['canvas'].getChart();
    // this.myChart.data.datasets[0].points[2] = 50;
    // this.myChart.update();
  }

  render(){
    let chartData = {
    labels: [
        "High Blood Pressure Value",
        "Low Blood Pressure Value",
    ],
    datasets: [
        {
            data: [this.props.average[0], this.props.average[1]],
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
           <div className="panel-title">Average of Blood Pressure</div>
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
