import React,{Component} from 'react';

export default class DPrescription extends Component{
  constructor(props){
    super(props);
    this.state={user:''};
  }

  componentDidMount(){
  this.setState({user:this.props.userid});
  }

  enterPrescription(e){
    e.preventDefault();
    let name=$("#form_name").val();
    let lname=$("#form_lastname").val();
    let age=$("#form_age").val();
    let sex=$( "#sex option:selected" ).val();
    let weight=$("#form_weight").val();
    let disease=$("#form_diseases").val();
    let medicine=$("#form_medicine").val();
    let message=$("#form_message").val();
    let userId=$("#userid").val();
    let data={
         name:name,
         lname:lname,
         age:age,
         sex:sex,
         weight:weight,
         disease:disease,
         medicine:medicine,
         message:message,
         sendTo:userId,
         created_at:Date.now(),
         updated_at:Date.now()
      };
    Meteor.call("enterPrescriptionData",data,function(err){
      if(!err){
        $("#form_name").val('');
        $("#form_lastname").val('');
        $("#form_age").val('');
        $("#sex option:selected").val('');
        $("#form_weight").val('');
        $("#form_diseases").val('');
        $("#form_medicine").val('');
        $("#form_medicine").val('');
        $("#form_message").val('');
        $("#userid").val('');
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

                      <h1 className="text-intro">Perscription Form</h1>
                        <form id="contact-form" onSubmit={this.enterPrescription}>
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
                                          <label htmlFor="form_age">Age*</label>
                                            <input id="form_age" type="text" className="form-control" placeholder="Enter Age"  required />

                                    </div>
                                    </div>
                                  <div className="col-md-6">
                                    <div className="form-group text-intro">
                                      <label htmlFor="sex">Sex*</label>
                                      <select className="form-control" id="sex" required>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>

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
                                        <input id="form_diseases" type="text" className="form-control" placeholder="Enter Diseases" required/>

                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-6">
                                        <div className="form-group text-intro">
                                          <label htmlFor="form_medicine">Medicine</label>
                                            <input id="form_medicine" type="text" className="form-control" placeholder="Enter Medicine " />

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

                                    <input type="hidden" id="userid" value={this.state.user} />

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
