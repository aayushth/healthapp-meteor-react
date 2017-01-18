import { composeWithTracker } from 'react-komposer';
import Dinfo from './../dinfo.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getDinfoData',);
 if(subscription.ready()){
 let data1=Dupdate.find().fetch();
 let data2=Meteor.users.find().fetch();
 let data=[data1,data2];
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Dinfo);
