import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Cholestrol from '../../../info/client/container/login-data7.js';

FlowRouter.route("/cholestrol",{
  name:'cholestrol',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Cholestrol />)
    });
  }
});
