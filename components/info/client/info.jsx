import React,{Component} from 'react';
import Navbar from './container/login-data.js';
import Patient from './container/patient.js';
import Doctor from './container/doctor.js';

export default class Info extends Component{
  constructor(props){
    super(props);
  }

  render(){
  const role=this.props.roles;
  let template=null;
  if(role){
   template=<Patient />
  }
  else{
    template=<Doctor />
  }

  return(
   <div>

  <Navbar />

  {template}


</div>

    );
  }

}
