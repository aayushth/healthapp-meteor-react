// import Following from '../both/collection.js';
//
// Meteor.methods({
//   'enterFollowData'(id){
//     let count=Following.find({followed:id}).count();
//     if(count==0){
//     return Following.insert({followby:this.userId,followed:id});
//     }
//     else{
//       throw new Meteor.Error(500,"Already Followed");
//     }
//   },
// });
