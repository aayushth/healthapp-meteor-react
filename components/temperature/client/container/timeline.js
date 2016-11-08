import { composeWithTracker } from 'react-komposer';
import Timeline from './../timeline.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getTemperatureData',);
 if(subscription.ready()){
 let data=Temperature.find().fetch();
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Timeline);
