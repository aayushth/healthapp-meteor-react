import Pupdate from '../both/collection.js';
import {Images} from '../both/collection1.js';

Meteor.methods({
  'enterPupdateData'(data){
    data.user=this.userId;
    Pupdate.insert(data);
  },
  'changeUser'(username){
    Accounts.setUsername(this.userId,username);
  },
  'enterImageData'(fileId){
    return Meteor.users.update({_id:this.userId},{$set:{'profile.avatar':fileId}});
  },
  'enterImageUrl'(file){
    let image=Images.findOne({_id:file});
    let url=image.url();
    return Meteor.users.update({'profile.avatar':file},{$set:{'profile.avatar':url}});
  },
});
