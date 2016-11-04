import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Login from '../login.jsx';

FlowRouter.route("/login",{
  name:'login',
  action(){
    mount(Layout,{
      content:(<Login />)
    });
  }
});
