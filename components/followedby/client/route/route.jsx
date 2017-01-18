import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Followedby from '../container/followedby.js';

FlowRouter.route("/profile/doctor/follow",{
  name:'followedby',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Followedby />)
    });
  }
});
