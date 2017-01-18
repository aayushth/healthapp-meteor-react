import { composeWithTracker } from 'react-komposer';
import Doctor from './../doctor.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getDoctorProfileData',);
 if(subscription.ready()){

let user=Meteor.users.find().fetch();
let count=Appointment.find({sendTo:Meteor.userId()}).count();
let info=Dupdate.find({user:Meteor.userId()},{sort:{created_at:-1},limit:1}).fetch();
let data=[count,info,user];
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Doctor);
