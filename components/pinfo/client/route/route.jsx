import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Pinfo from '../container/pinfo.js';

FlowRouter.route("/profile/info",{
  name:'pinfo',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Pinfo />)
    });
  }
});
