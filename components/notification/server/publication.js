import {Meteor} from 'meteor/meteor';

Meteor.publish('getAppointmentData',function(){
  let notification=Appointment.find({sendTo:this.userId});
  return [notification];
});
