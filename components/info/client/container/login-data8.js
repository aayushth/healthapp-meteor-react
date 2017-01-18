import { composeWithTracker } from 'react-komposer';
import Info from '../info.jsx';

function composer(props,onData){
let currentUser=Meteor.user();
const subscription=Meteor.subscribe('getLoginData',);
 if(subscription.ready()){
 let data=Meteor.users.find().fetch();
 let roles;
 data.map(function(users){
   if(users.profile.role=="patient"){
     roles="patient";
   }
 });
 console.log(roles);
 onData(null,{roles});
 }

};

export default composeWithTracker(composer)(Info);
