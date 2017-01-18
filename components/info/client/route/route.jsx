import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Info from '../container/login-data8.js';

FlowRouter.route("/info",{
  name:'info',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Info />)
    });
  }
});
