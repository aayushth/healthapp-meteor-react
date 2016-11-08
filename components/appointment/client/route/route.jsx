import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Appointment from '../appointment.jsx';

FlowRouter.route("/profile/appointment",{
  name:'appointment',
  action(){
    mount(Layout,{
      content:(<Appointment />)
    });
  }
});
