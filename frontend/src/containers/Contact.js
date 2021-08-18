import { Fragment ,useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { contactUs } from '../actions/auth';
import { useDispatch } from 'react-redux';
const Contact = () => {
const dispatch = useDispatch()
const [contactSuccess, setcontactSuccess] = useState(false);
const [contactFail, setcontactFail] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const { name, email,subject,message } = formData;
    const onSubmit = e => {
        e.preventDefault();
            dispatch(contactUs(name, email,subject,message));
            console.log(name)
            setcontactSuccess(true);

    };


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const alertSuccess = () => (
        <Fragment>
            <div class="alert alert-success d-flex align-items-center" role="alert">
			<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
			<div class="ml-2">
			  Contact from is sent
			</div>
		  </div>
        </Fragment>
    );
    const alertFail = () => (
    <Fragment>
    <div class="alert alert-danger d-flex align-items-center" role="alert">
			<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
			<div class="ml-2">
			  An example danger alert with an icon
			</div>
		  </div>
	</Fragment>
    );
    return ( 

         <div id="contact" class="contact-area">
         <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
			<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
			  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
			</symbol>
			<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
			</symbol>
			<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
			</symbol>
		  </svg>
      <div class="contact-inner area-padding">
        <div class="contact-overly"></div>
        <div class="container ">

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-title-1">
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="contact-icon text-center">
                <div class="single-icon">
                  <i class="fa fa-mobile"></i>
                  <p>
                    Call: +1 5589 55488 55<br/>
                    <span>Monday-Friday (9am-5pm)</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="contact-icon text-center">
                <div class="single-icon">
                  <i class="fa fa-envelope-o"></i>
                  <p>
                    Email: info@example.com<br/>
                    <span>Web: www.example.com</span>
                  </p>
                </div>
              </div>
            </div>


            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="contact-icon text-center">
                <div class="single-icon">
                  <i class="fa fa-map-marker"></i>
                  <p>
                    Location: Aïn Sebaâ Casablanca 20250<br/>
                    <span>Morocoo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">

      
            <div class="col-md-6 col-sm-6 col-xs-12">
    
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3322.963569388652!2d-7.5152638!3d33.6062497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb70f764eae3%3A0xf048de37eef71d8!2sA%C3%AFn%20Seba%C3%A2%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1618953908615!5m2!1sen!2sma" width="100%" height="380" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          
            </div>


     
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="form contact-form">
                <form onSubmit={e => onSubmit(e)} role="form" class="php-email-form">
                   {contactSuccess ? alertSuccess(): null}
                   {contactFail ? alertFail(): null}
                  <div class="form-group">
                    <input type="text" name="name" onChange={e => onChange(e)} class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" onChange={e => onChange(e)} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" onChange={e => onChange(e)} name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required/>
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" onChange={e => onChange(e)} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
     );
}
 
export default Contact;
