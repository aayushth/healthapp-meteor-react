import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import PNotification from '../container/pnotification.js';

FlowRouter.route("/profile/notification",{
  name:'pnotification',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<PNotification />)
    });
  }
});
