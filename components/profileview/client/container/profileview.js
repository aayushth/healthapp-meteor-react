import { composeWithTracker } from 'react-komposer';
import Profileview from './../profileview.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getForProfileViewData',props.userid);
 if(subscription.ready()){
 let users=Meteor.users.find(props.userid).fetch();
 let info=Pupdate.find().fetch();
 let pressure=Pressure.find().fetch();
 let cholestrol=Cholestrol.find().fetch();
 let pulse=Pulse.find().fetch();
 let temperature=Temperature.find().fetch();
 let data=[users,info,pressure,cholestrol,pulse,temperature];
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Profileview);
