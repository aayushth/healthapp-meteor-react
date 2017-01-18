import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Pupdate from '../pupdate.jsx';

FlowRouter.route("/profile/update",{
  name:'pupdate',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(){
    mount(Layout,{
      content:(<Pupdate />)
    });
  }
});
