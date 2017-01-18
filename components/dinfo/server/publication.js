import {Meteor} from 'meteor/meteor';
import Dupdate from '../../dupdate/both/collection.js';

Meteor.publish('getDinfoData',function(){
  let dupdate=Dupdate.find({user:this.userId},{sort:{created_at:-1},limit:1});
  let user=Meteor.users.find({_id:this.userId});
  return [dupdate,user];
});
