import Dupdate from '../both/collection.js';
import {Images} from '../../pupdate/both/collection1.js';

Meteor.methods({
  'enterDupdateData'(data){
    data.user=this.userId;
    Dupdate.insert(data);
  },
  'changeDUser'(username){
    Accounts.setUsername(this.userId,username);
  },
  'enterImageData1'(fileId){
    return Meteor.users.update({_id:this.userId},{$set:{'profile.avatar':fileId}});
  },
  'enterImageUrl1'(file){
    let image=Images.findOne({_id:file});
    let url=image.url();
    return Meteor.users.update({'profile.avatar':file},{$set:{'profile.avatar':url}});
  },
});
