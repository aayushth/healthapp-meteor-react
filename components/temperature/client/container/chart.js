import { composeWithTracker } from 'react-komposer';
import Chart from './../chart.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getTemperatureDataForChart',);
 if(subscription.ready()){
 let data=Temperature.find().fetch();
 let count=data.length;
 let number=0;
 data.map(function(tempData){
   number+=parseFloat(tempData.temperature);
 });
 let average=number/count;
 console.log(average);
 onData(null,{average});
 }

};

export default composeWithTracker(composer)(Chart);
