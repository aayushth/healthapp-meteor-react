import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Register from '../register.jsx';

FlowRouter.route("/register",{
  name:'register',
  action(){
    mount(Layout,{
      content:(<Register />)
    });
  }
});
