import {Meteor} from 'meteor/meteor';
import Pupdate from '../../pupdate/both/collection.js';

Meteor.publish('getPinfoData',function(){
  let pupdate=Pupdate.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let user=Meteor.users.find({_id:this.userId});
  return [pupdate,user];
});
