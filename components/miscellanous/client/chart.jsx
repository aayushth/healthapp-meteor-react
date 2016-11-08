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
        "Eye Red",
        "Eye White",
        "Eye Yellow",
        "Nail White",
        "Nail Pink",
        "Nail Yellow",
        "Tongue White",
        "Tongue Red",
        "Tongue Yellow",
    ],
    datasets: [
        {
            data: [this.props.total[0],this.props.total[1],this.props.total[2],this.props.total[3],this.props.total[4],
                   this.props.total[5],this.props.total[6],this.props.total[7],this.props.total[8]],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#36A2CA",
                "#90A2EB",
                "#36C2DB",
                "#FFF000",
                "#36AFFF",
                "#FFF2EB",
            ],
        }]
  };

    return(
      <div className="container-fluid">
       <div className="row">
        <div className="col-md-8 col-md-offset-2">

         <div className="panel panel-primary">
          <div className="panel-heading">
           <div className="panel-title">Total Of Different Colors Used For Eye,Tongue and Nail</div>
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
