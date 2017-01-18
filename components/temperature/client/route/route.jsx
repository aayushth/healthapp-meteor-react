import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Temperature from '../../../info/client/container/login-data3.js';

FlowRouter.route("/temperature",{
  name:'temperature',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Temperature />)
    });
  }
});
