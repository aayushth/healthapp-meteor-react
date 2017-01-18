import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Dinfo from '../container/dinfo.js';

FlowRouter.route("/profile/doctor/info",{
  name:'dinfo',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Dinfo />)
    });
  }
});
