import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Pulse from '../../../info/client/container/login-data4.js';

FlowRouter.route("/pulse",{
  name:'pulse',
  action(){
    mount(Layout,{
      content:(<Pulse />)
    });
  }
});
