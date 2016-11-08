
Meteor.methods({
  'sendVerificationLink'(){
   return Accounts.sendVerificationEmail(this.userId,'giribsaal@gmail.com');
  },
});
