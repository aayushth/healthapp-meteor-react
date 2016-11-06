import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Immunization from '../../../info/client/container/login-data2.js';

FlowRouter.route("/immunization",{
  name:'immunization',
  action(){
    mount(Layout,{
      content:(<Immunization />)
    });
  }
});