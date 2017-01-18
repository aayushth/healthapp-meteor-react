import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Explore from '../explore.jsx';

FlowRouter.route("/explore",{
  name:'followedby',
  action(){
    mount(Layout,{
      content:(<Explore />)
    });
  }
});
