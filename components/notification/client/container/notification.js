import { composeWithTracker } from 'react-komposer';
import Notification from './../notification.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getAppointmentData',);
 if(subscription.ready()){
 let data= Appointment.find().fetch();
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Notification);
