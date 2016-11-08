import { composeWithTracker } from 'react-komposer';
import Chart from './../chart.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getCholestrolDataForChart',);
 if(subscription.ready()){
 let data=Cholestrol.find().fetch();
 let count=data.length;
 let low=0;
 let high=0;
 data.map(function(cholestrolData){
   high+=parseFloat(cholestrolData.hdl);
   low+=parseFloat(cholestrolData.ldl);
 });
 high=high/count;
 low=low/count;
 console.log(low);
 let average=[high,low];
 console.log(average);
 onData(null,{average});
 }

};

export default composeWithTracker(composer)(Chart);
