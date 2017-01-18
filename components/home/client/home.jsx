import React,{Component} from 'react';

export default class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

<section className="home">

   {/*===============Section Header ===============================*/}
  <div className="container-fluid bg-header-image">
     <div className="container text-desc header-div-top">
         <h2 className="text-white text-intro">Online Patient Portal</h2>
         <ul className="list-inline text-size-content">
             <li><a href="/explore" className="btn btn-link btn-plain text-white"> Explore</a> </li>
             <li><a href="/explore" className="btn btn-link btn-plain text-white"> Health Problem </a> </li>
             <li><a href="/explore" className="btn btn-link btn-plain text-white">Benefit of IT Health</a> </li>
             <li><a href="/explore" className="btn btn-link btn-plain text-white"> Health IT Stories </a> </li>
             <li className="pull-right"><a href="/login" className="btn btn-outline btn-plain btn-flat text-white"> Login </a> </li>
         </ul>

         <div className="header-text-content header-text-content-top">
             <div className="row">
                 <div className="col-sm-12">
                     <h5 className="text-white ">Manage Your Health Record With </h5>
                     <h2 className="text-primary text-shrink ">Online Patient Portal</h2>
                 </div>
             </div>
             <div className="row">
                 <div className="col-sm-3 top-20">
                     <a href="/explore" className="btn btn-lg btn-flat btn-main">Explore<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                 </div>
             </div>
         </div>

     </div>
 </div>

 {/*================== Section About ==================================*/}
 <div className="second-div-about">
        <div className="container second-div-top">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="text-intro"> What is Online Patient Portal ?  </h4>
                    <h5 className="text-desc"> Online Patient Portal is a trusted place for people to gather, store, use, and share health information online. </h5>
                </div>
            </div>

            <div className="row block-row">
                <div className="col-xs-6 col-sm-3">
                    <div className="blocks">
                        <h5>Your medical home on web </h5>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-3">
                    <div className="blocks">
                        <h5>Connect your doctor through secure environment</h5>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-3">
                    <div className="blocks">
                        <h5>Make more informed decision for yourself and loved ones</h5>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-3">
                    <div className="blocks">
                        <h5>Achieve your fitness goals</h5>
                    </div>
                </div>
            </div>

        </div>
    </div>

 {/*================== Section Connect ====================================*/}
  <div className=" third-div-connect">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h4 className="text-white text-intro">Connect at anytime from anywhere !</h4>
                <h5 className="text-desc text-white">Get convenient 24 hr secure access to personal health informtion from anywhere using Online Patient Portal </h5>
            </div>
        </div>
    </div>
</div>

 {/*=================== Section Centralized ====================================*/}
<div className="fourth-div-centralized">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h4 className=" text-intro">Centralized your health records</h4>
                <h5 className="text-desc">A centralized and easily accessible medical record enables you to eliminate wasted time </h5>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <img className="img-responsive" src="/central.png" alt="" />
            </div>
        </div>
    </div>
</div>

{/*============ Section Follow ==============================*/}
<div className="fifth-div-follow">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h4 className="text-intro ">Connect With Us </h4>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
                <a  style={{color: '#0f0f0f'}} href="#"> <i className="fa fa-facebook-official" aria-hidden="true"><span className="social-site-font text-intro">Facebook</span> </i> </a>
            </div>
            <div className="col-xs-12">
                <a style={{color: '#0f0f0f'}} href="#"> <i className="fa fa-youtube-square" aria-hidden="true"><span className="social-site-font text-intro">Youtube</span> </i> </a>
            </div>
            <div className="col-xs-12">
                <a style={{color: '#0f0f0f'}} href="#"> <i className="fa fa-linkedin-square" aria-hidden="true"><span className="social-site-font text-intro">Linkedin</span> </i> </a>
            </div>
            <div className="col-xs-12">
                <a style={{color: '#0f0f0f'}} href="#"> <i className="fa fa-google-plus-square" aria-hidden="true"><span className="social-site-font text-intro">Google Plus</span> </i> </a>
            </div>
        </div>
        <hr />
        <span className="social-site-font">Copyright &copy 2016</span>
    </div>
</div>

</section>

    );
  }

}
