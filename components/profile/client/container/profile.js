import { composeWithTracker } from 'react-komposer';
import Profile from './../profile.jsx';

function composer(props,onData){
  let currentUser=Meteor.user();
  const subscription=Meteor.subscribe('getProfileData',);
   if(subscription.ready()){
   let data1=Meteor.users.find().fetch();
   let data2=Pressure.find().fetch();
   let data3=Cholestrol.find().fetch();
   let data4=Temperature.find().fetch();
   let data5=Pulse.find().fetch();
   let data6=Hweight.find().fetch();
   let data=[data1,data2,data3,data4,data5,data6];
   console.log(data);
   onData(null,{data});
 }

};

export default composeWithTracker(composer)(Profile);
