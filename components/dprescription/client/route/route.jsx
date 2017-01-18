import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import DPrescription from '../dprescription.jsx';

FlowRouter.route("/profile/prescription/:userId",{
  name:'dprescription',
  triggersEnter:[function(context,redirect){
    if(!Meteor.userId()){
      redirect("/");
    }
  }],
  action(params){
    mount(Layout,{
      content:(<DPrescription userid={params.userId} />)
    });
  }
});
