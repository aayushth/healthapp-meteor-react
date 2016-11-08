import { composeWithTracker } from 'react-komposer';
import Chart from './../chart.jsx';

function composer(props,onData){
const subscription=Meteor.subscribe('getMiscellanousDataForChart',);
 if(subscription.ready()){
 let data=Miscellanous.find().fetch();
 let Ered=Ewhite=Eyellow=Nwhite=Npink=Nyellow=Twhite=Tred=Tyellow=0;
 data.map(function(miscData){
   if(miscData.eye=="red"){
     Ered++;
   }
   else if(miscData.eye=="white"){
     Ewhite++;
   }
   else if(miscData.eye=="yellow"){
     Eyellow++;
   }
   else if(miscData.nail=="white"){
     Nwhite++;
   }
   else if(miscData.nail=="pink"){
     Npink++;
   }
   else if(miscData.nail=="yellow"){
     Nyellow++;
   }
   else if(miscData.tongue=="white"){
     Twhite++;
   }
   else if(miscData.tongue=="red"){
     Tred++;
   }
   else if(miscData.tongue=="yellow"){
     Tyellow++;
   }
 });
 let total=[Ered,Ewhite,Eyellow,Nwhite,Npink,Nyellow,Twhite,Tred,Tyellow];
 console.log(total);
 onData(null,{total});
 }

};

export default composeWithTracker(composer)(Chart);
