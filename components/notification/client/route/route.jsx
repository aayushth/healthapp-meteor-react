import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Notification from '../container/notification.js';

FlowRouter.route("/profile/doctor/notification",{
  name:'notification',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Notification />)
    });
  }
});
