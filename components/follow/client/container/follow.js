import { composeWithTracker } from 'react-komposer';
import Follow from './../follow.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getDoctorList',);
 if(subscription.ready()){
 let data1= Meteor.users.find({'profile.role':'doctor'}).fetch();
 let data2= Following.find().fetch();
 let userid= new Array();

 data2.map(function(follower){
   userid.push(follower.followed);
 });

 let data3=new Array();
data1.map(function(user){
   userid.map(function(userid){
     if(userid==user._id){
      data3.push.apply(data3,Meteor.users.find({_id:user._id}).fetch());
     }
   });
  });
 let data=[data1,data3];

 console.log(data3);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Follow);
