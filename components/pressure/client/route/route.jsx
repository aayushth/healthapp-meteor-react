import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Pressure from '../../../info/client/container/login-data1.js';

FlowRouter.route("/pressure",{
  name:'pressure',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Pressure />)
    });
  }
});
