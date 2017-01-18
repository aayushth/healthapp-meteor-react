import React,{Component} from 'react';

export default class Appointment extends Component{
  constructor(props){
    super(props);
    this.state={doctor:""};
  }

  componentDidMount(){
  this.setState({doctor:this.props.doctorid});
  }

  enterAppointment(e){
    e.preventDefault();
    let name=$("#form_name").val();
    let lname=$("#form_lastname").val();
    let contact=$("#form_contact").val();
    let dob=$( "#form_dob" ).val();
    let email=$("#form_email").val();
    let appointment=$("#form_date").val();
    let time=$("#form_time").val();
    let message=$("#form_message").val();
    let doctorId=$("#doctorid").val();
    let data={
         name:name,
         lname:lname,
         contact:contact,
         dob:dob,
         email:email,
         appointment:appointment,
         time:time,
         message:message,
         sendTo:doctorId,
         created_at:Date.now(),
         updated_at:Date.now()
      };
    Meteor.call("enterAppointmentData",data,function(err){
      if(!err){
        $("#form_name").val('');
        $("#form_lastname").val('');
        $("#form_contact").val('');
        $("#form_dob").val('');
        $("#form_email").val('');
        $("#form_date").val('');
        $("#form_time").val('');
        $("#form_message").val('');
        Bert.alert("Success on submitting data",'success','growl-top-right');
      }
      else{
        Bert.alert(err.reason,'danger','growl-top-right');
      }
    });
  }

  render(){
    return(
      <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">

                    <h1 className="text-intro">Appointment Form</h1>
                      <form id="contact-form" onSubmit={this.enterAppointment}>
                        <div className="controls">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group text-intro">
                                        <label htmlFor="form_name">Firstname *</label>
                                        <input id="form_name" type="text"  className="form-control" placeholder="Enter firstname" required />
                                      </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group text-intro">
                                          <label htmlFor="form_lastname">Lastname *</label>
                                        <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Enter lastname" required />

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group text-intro">
                                    <label htmlFor="form_contact">Contact No.*</label>
                                    <input id="form_contact" type="text" className="form-control" placeholder="Enter Contact No." required />

                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group text-intro">
                                    <label htmlFor="form_dob">Date of Birth*</label>
                                    <input id="form_dob" type="date" className="form-control" placeholder="Enter DOB" required />

                                  </div>
                                </div>
                          </div>

                          <div className="row">
                              <div className="col-md-6">
                                    <div className="form-group text-intro">
                                      <label htmlFor="form_email">Email</label>
                                        <input id="form_email" type="email" className="form-control" placeholder="Enter Email"  />

                                   </div>
                                </div>
                              <div className="col-md-6">
                                  <div className="form-group text-intro">
                                      <label htmlFor="form_date">Appointment Date*</label>
                                      <input id="form_date" type="date" className="form-control" placeholder="Enter app. date" required />

                                </div>
                              </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                      <div className="form-group text-intro">
                                        <label htmlFor="form_time">Time</label>
                                          <input id="form_time" type="time" className="form-control" placeholder="Enter time " />

                                     </div>
                                  </div>
                              </div>

                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="form-group text-intro">
                                          <label htmlFor="form_message">Message *</label>
                                          <textarea id="form_message" name="message" className="form-control" placeholder="Message to patient" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>

                                  <input type="hidden" id="doctorid" value={this.state.doctor} />

                                  <div className="col-md-12">
                                      <input type="submit" className="btn btn-success btn-send" value="Send message" />
                                  </div>
                              </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-muted text-intro"><strong >*</strong> These fields are required</p>
                                </div>
                            </div>
                      </div>
                    </form>
              </div>
            </div>
          </div>
    );
  }
}
