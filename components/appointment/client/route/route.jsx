import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Appointment from '../appointment.jsx';

FlowRouter.route("/profile/appointment/:doctorId",{
  name:'appointment',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(params){
    mount(Layout,{
      content:(<Appointment doctorid={params.doctorId} />)
    });
  }
});
