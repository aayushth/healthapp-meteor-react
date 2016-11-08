import { composeWithTracker } from 'react-komposer';
import Chart from './../chart.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getHweightDataForChart',);
 if(subscription.ready()){
 let data=Hweight.find().fetch();
 let count=data.length;
 let number=0;
 data.map(function(hweightData){
   number+=parseFloat(hweightData.height/hweightData.weight);
 });
 let average=parseFloat(number/count);
 console.log(average);
 onData(null,{average});
 }

};

export default composeWithTracker(composer)(Chart);
