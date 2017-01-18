import { composeWithTracker } from 'react-komposer';
import Followedby from './../followedby.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getPatientList',);
 if(subscription.ready()){
 let data1= Meteor.users.find({'profile.role':'patient'}).fetch();
 let data2= Following.find().fetch();

 let userid=new Array();
 data2.map(function(follower){
   userid.push(follower.followby);
 });

 let data=new Array();
 data1.map(function(user){
   userid.map(function(userid){
     if(userid==user._id){
      data.push.apply(data,Meteor.users.find({_id:user._id}).fetch());
     }
   });
  });

 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Followedby);
