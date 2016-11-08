import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Prescription from '../prescription.jsx';

FlowRouter.route("/profile/prescription",{
  name:'prescription',
  action(){
    mount(Layout,{
      content:(<Prescription />)
    });
  }
});
