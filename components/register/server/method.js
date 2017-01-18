
Meteor.methods({
  'sendVerificationLink'(){
   return Accounts.sendVerificationEmail(this.userId);
  },
});
