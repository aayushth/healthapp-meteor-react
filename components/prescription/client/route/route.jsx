import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Prescription from '../prescription.jsx';

FlowRouter.route("/profile/doctor/prescription",{
  name:'prescription',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Prescription />)
    });
  }
});
