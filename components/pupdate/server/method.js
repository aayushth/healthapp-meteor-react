import Pupdate from '../both/collection.js';

Meteor.methods({
  'enterPupdateData'(data){
    data.user=this.userId;
    Pupdate.insert(data);
  },
  'changeUser'(username){
    Accounts.setUsername(this.userId,username);
  },
});
