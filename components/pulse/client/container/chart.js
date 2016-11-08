import { composeWithTracker } from 'react-komposer';
import Chart from './../chart.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getPulseDataForChart',);
 if(subscription.ready()){
 let data=Pulse.find().fetch();
 let count=data.length;
 let number=0;
 data.map(function(pulseData){
   number+=parseFloat(pulseData.pulse);
 });
 let average=parseFloat(number/count);
 console.log(average);
 onData(null,{average});
 }

};

export default composeWithTracker(composer)(Chart);
