import Appointment from '../both/collection.js';

Meteor.methods({
  'enterAppointmentData'(data){
    data.user=this.userId;
    return Appointment.insert(data);
  },
});
