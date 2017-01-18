import { composeWithTracker } from 'react-komposer';
import Patient from './../patient.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getSummaryData',);
 if(subscription.ready()){

   let pressure=Pressure.find().fetch();
   let immunization=Immunization.find().fetch();
   let cholestrol=Cholestrol.find().fetch();
   let hweight=Hweight.find().fetch();
   let temperature=Temperature.find().fetch();
   let pulse=Pulse.find().fetch();
   let miscellanous=Miscellanous.find().fetch();

   let averagePressure;
   pressure.map(function(pressure){
     let high=parseInt(pressure.highPressure);
     let low=parseInt(pressure.lowPressure);
     averagePressure=(high+low)/2;
   });
   let deviationPressure=Math.abs((averagePressure-100));
   let totalCholestrol;
   cholestrol.map(function(cholestrol){
     let high=parseInt(cholestrol.hdl);
     let low=parseInt(cholestrol.ldl);
     totalCholestrol=(high+low)/2;
   });

   totalCholestrol=Math.abs(totalCholestrol-50);
  let deviationCholestrol=(totalCholestrol * 2);
  let fitness=100-(deviationPressure+deviationCholestrol)/2;

   let dataAll=[pressure,immunization,cholestrol,hweight,temperature,pulse,miscellanous,fitness];
   console.log(dataAll);
   onData(null,{dataAll});
 }

};

export default composeWithTracker(composer)(Patient);
