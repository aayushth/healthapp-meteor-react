import React,{Component} from 'react';

export default class Prescription extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">

                      <h1 className="text-intro">Perscription Form</h1>
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
                                          <label htmlFor="form_age">Age*</label>
                                            <input id="form_age" type="text" className="form-control" placeholder="Enter Age" />

                                    </div>
                                    </div>
                                  <div className="col-md-6">
                                    <div className="form-group text-intro">
                                      <label htmlFor="sex">Sex*</label>
                                      <select className="form-control" id="sex">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>

                                      </select>
                                    </div>
                                  </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                      <div className="form-group text-intro">
                                        <label htmlFor="form_weight">Weight in Kg</label>
                                          <input id="form_weight" type="text" className="form-control" placeholder="Enter Weight in Kg " />

                                  </div>
                                  </div>
                                <div className="col-md-6">
                                    <div className="form-group text-intro">
                                        <label htmlFor="form_diseases">Diseases *</label>
                                        <input id="form_diseases" type="text" className="form-control" placeholder="Enter Diseases" />

                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-6">
                                        <div className="form-group text-intro">
                                          <label htmlFor="form_weight">Medicine</label>
                                            <input id="form_weight" type="text" className="form-control" placeholder="Enter Medicine " />

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
