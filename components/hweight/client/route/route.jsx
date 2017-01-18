import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Hweight from '../../../info/client/container/login-data5.js';

FlowRouter.route("/hweight",{
  name:'hweight',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Hweight />)
    });
  }
});
