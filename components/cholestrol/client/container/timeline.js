import { composeWithTracker } from 'react-komposer';
import Timeline from './../timeline.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getCholestrolData',);
 if(subscription.ready()){
 let data=Cholestrol.find().fetch();
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Timeline);
