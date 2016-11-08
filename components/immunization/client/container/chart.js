import { composeWithTracker } from 'react-komposer';
import Chart from './../chart.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getImmunizationDataForChart',);
 if(subscription.ready()){
 let data=Immunization.find().fetch();
 let i=0;
 data.map(function(immunizationData){
   if(immunizationData.bcg==true){
     i++;
   }
   else if(immunizationData.dpt==true){
     i++;
   }
   else if(immunizationData.polio==true){
     i++;
   }
   else if(immunizationData.measles==true){
     i++;
   }
   else if(immunizationData.je==true){
     i++;
   }
   else if(immunizationData.hepatitisB1==true){
     i++;
   }
   else if(immunizationData.hepatitisB2==true){
     i++;
   }
   else if(immunizationData.hepatitisB3==true){
     i++;
   }
   else{

   }
 });
let number=(i/8)*100;
console.log(number);
 onData(null,{number});
 }

};

export default composeWithTracker(composer)(Chart);
