import React,{Component} from 'react';

export default class Appointment extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">

                    <h1 className="text-intro">Appointment Form</h1>
                      <form id="contact-form">
                        <div className="controls">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group text-intro">
                                        <label htmlFor="form_name">Firstname *</label>
                                        <input id="form_name" type="text"  className="form-control" placeholder="Enter firstname" />
                                      </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group text-intro">
                                          <label htmlFor="form_lastname">Lastname *</label>
                                        <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Enter lastname" />

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group text-intro">
                                    <label htmlFor="form_contact">Contact No.*</label>
                                    <input id="form_contact" type="text" className="form-control" placeholder="Enter Contact No." />

                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group text-intro">
                                    <label htmlFor="form_dob">Date of Birth*</label>
                                    <input id="form_dob" type="date" className="form-control" placeholder="Enter DOB" />

                                  </div>
                                </div>
                          </div>

                          <div className="row">
                              <div className="col-md-6">
                                    <div className="form-group text-intro">
                                      <label htmlFor="form_weight">Email</label>
                                        <input id="form_weight" type="email" className="form-control" placeholder="Enter Email " />

                                   </div>
                                </div>
                              <div className="col-md-6">
                                  <div className="form-group text-intro">
                                      <label htmlFor="form_diseases">Appointment Date*</label>
                                      <input id="form_diseases" type="date" className="form-control" placeholder="Enter app. date" />

                                </div>
                              </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                      <div className="form-group text-intro">
                                        <label htmlFor="form_weight">Time</label>
                                          <input id="form_weight" type="time" className="form-control" placeholder="Enter time " />

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
                                  <div class="col-md-12">
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
