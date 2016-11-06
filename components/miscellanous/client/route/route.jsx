import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Miscellanous from '../../../info/client/container/login-data6.js';

FlowRouter.route("/miscellanous",{
  name:'miscellanous',
  action(){
    mount(Layout,{
      content:(<Miscellanous />)
    });
  }
});
