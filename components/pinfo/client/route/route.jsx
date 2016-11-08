import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Pinfo from '../container/pinfo.js';

FlowRouter.route("/profile/info",{
  name:'pinfo',
  action(){
    mount(Layout,{
      content:(<Pinfo />)
    });
  }
});
