import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Temperature from '../../../info/client/container/login-data3.js';

FlowRouter.route("/temperature",{
  name:'temperature',
  action(){
    mount(Layout,{
      content:(<Temperature />)
    });
  }
});
