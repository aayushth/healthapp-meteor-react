import React,{Component} from 'react';

export default class Explore extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

      <div className="container col-lg-8 col-lg-offset-2">
      <div className="row">
        <h3 className="text-intro" style={{color:'#3498db'}} >What is Online Patient Portal?</h3>
        <p className="text-desc"> Online Patient Portal is a trusted place for people to gather, store, use, and share health information online.</p>
      </div>
      <div className="row about">
        <h4><p className="text-desc">Keep your family's health information</p></h4>
        <div className="col-sm-6">
          <strong><p className="text-desc">Keep all of your health records in one place that's organized and available to you online.</p></strong>
        </div>
        <div className="col-sm-6">
          <strong><p className="text-desc">Easily share information with people you trust so that they can provide guidance or coordinate health management with you.</p></strong>
        </div>
      </div>
      <div className="row " style={{marginTop:'60px'}}>
        <div className="col-sm-6">
          <strong><p className="text-desc">Capture it once, use it again and again and never leave your health info stranded in single-purpose websites and apps again. </p></strong>
        </div>
        <div className="col-sm-6">
          <strong><p className="text-desc">Get more out of doctor visits by bringing important data with you:</p></strong>
        </div>
      </div>
      <div className="row healthproblem" style={{marginTop:'60px'}}>
        <h3 className="text-intro" style={{color:'#3498db'}}>Health Problems</h3>
        <p className="text-desc">The World Health Organization (WHO) is the premier organization looking at health issues
           around the world. When looking at the pattern of health care around the world,
           the <kbd>WHO World Health Report 2008</kbd> found some common contradictions:
        </p>
        <strong className="text-intro">Inverse care</strong><br />
        <p className="text-desc">People with the most means – whose needs for health care are often less – consume the most care,
          whereas those with the least means and greatest health problems consume the least.
        </p>
        <strong className="text-intro">Impoverishing care</strong><br />
        <p className="text-desc">Wherever people lack social protection and payment for care is
          largely out-of-pocket at the point of service,
          they can be confronted with catastrophic expenses.
          Over 100 million people annually fall into poverty because they have to pay for health care.
        </p>
        <strong className="text-intro">Fragmented and fragmenting care</strong><br />
        <p className="text-desc">The excessive specialization of health-care providers
          and the narrow focus of many disease control programs discourage a holistic approach
          to the individuals and the families they deal with and do not appreciate the need for continuity in care.
        </p>
        </div>
        <div className="row benefit" style={{marginTop:'60px'}}>
          <h3 className="text-intro" style={{color:'#3498db'}}>Benefit Of Health IT</h3>
          <p className="text-desc">
            There is growing consensus that the impact of information and communications technologies (ICTs)
            on health systems could be substantial or even revolutionary.
            Though the precise nature of the impact is much more difficult to predict,
            it seems that the health sector will benefit from advances in mobile telephony and internet services.
            CTs could also transform informal regulation by providing people with the knowledge they require to challenge existing practices and make more rational health care choices.
          </p>
        </div>
        <div className="row healthstories" style={{marginTop:'60px'}}>
          <h3 className="text-intro" style={{color:'#3498db'}}>Health IT Stories</h3>
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src="/user-account-box (1).png" alt="user image" />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Melina Thapa</h4>
              <h5><strong className="text-intro">Access to Your Record Can Save Your Life</strong></h5>
              <p className="text-intro" style={{lineHeight:'30px'}}>Melina Thapa  is an artist and mother of two young children. As her husband was dying of cancer, Ms. Manadhar  Thapat a protracted battle to get access to her husband’s medical record. Here is her story.
                My husband, Ramesh, was dying of kidney cancer, and we couldn't get his medical record. His life would have been so much better and potentially longer with that information.
                A Missing Medical Record Delays Care of my husband. I did not have ascess to my husband health record. Finally I decided to fought for accessing to my husband’s medical record. Finally I got the record. I gave it to the new doctors, and they looked at it. Then they gave it back to me and said, “Here, this is safest with you. If you always have access to your husband's medical record, he’s going to get the best care. My husband came home to die. It was hard. But, I had access to the data, and I had his record that I could reference, so I could take care of him.
                Other people don't have to suffer like he did. I really believe that access to your medical record can change your life, can save your life, but also at the end of your life, can make you happier and whole.
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
