import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Pressure from '../pressure.jsx';

FlowRouter.route("/pressure",{
  name:'pressure',
  action(){
    mount(Layout,{
      content:(<Pressure />)
    });
  }
});
