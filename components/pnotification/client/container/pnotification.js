import { composeWithTracker } from 'react-komposer';
import PNotification from './../pnotification.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getPrescriptionData',);
 if(subscription.ready()){
 let data= Prescription.find().fetch();
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(PNotification);
