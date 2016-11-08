import { composeWithTracker } from 'react-komposer';
import Pinfo from './../pinfo.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getPinfoData',);
 if(subscription.ready()){
 let data1=Pupdate.find().fetch();
 let data2=Meteor.users.find().fetch();
 let data=[data1,data2];
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Pinfo);
