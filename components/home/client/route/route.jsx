import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../../../../client/commonUi/layout/layout.jsx';
import Home from '../home.jsx';

FlowRouter.route("/",{
  name:'home',
  action(){
    mount(Layout,{
      content:(<Home />)
    });
  }
});
