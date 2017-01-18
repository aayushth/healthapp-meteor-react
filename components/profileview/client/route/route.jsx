import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Profileview from '../container/profileview.js';

FlowRouter.route("/profile/patient/view/:userid",{
  name:'pressure',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(params){
    mount(Layout,{
      content:(<Profileview userid={params.userid} />)
    });
  }
});
