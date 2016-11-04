import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Info from '../info.jsx';

FlowRouter.route("/info",{
  name:'info',
  action(){
    mount(Layout,{
      content:(<Info />)
    });
  }
});
