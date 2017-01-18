import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Dupdate from '../dupdate.jsx';

FlowRouter.route("/profile/doctor/update",{
  name:'dupdate',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Dupdate />)
    });
  }
});
