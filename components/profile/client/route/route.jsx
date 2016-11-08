import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Profile from '../container/profile.js';

FlowRouter.route("/profile",{
  name:'profile',
  action(){
    mount(Layout,{
      content:(<Profile />)
    });
  }
});
