import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';


const Login = ({ login, isAuthenticated }) => {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isAuthenticated) {
        return <Redirect to='/' />

    }
    return ( 
        <section className="ftco-section">
		<div className="container">

			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="img" style={{backgroundImage: `url(${"https://www.modeintextile.fr/wp-content/uploads/2017/12/encre.jpg"})`}}>
			      </div>
				<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-4">Connexion</h3>
			      		</div>
								<div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
										<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-google"></span></a>
									</p>
								</div>
			      	</div>
					<form action="#" onSubmit={e => onSubmit(e)} className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input type="text" onChange={(e) => onChange(e)} name='email' className="form-control" placeholder="Email" required />
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">mot de passe</label>
		              <input type="password" onChange={(e) => onChange(e)} name='password' className="form-control" placeholder="mot de passe" required />
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary rounded submit px-3">Connexion</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	<label className="checkbox-wrap checkbox-primary mb-0">souviens-toi de moi
									  <input type="checkbox"  />
									  <span className="checkmark"></span>
										</label>
						</div>
									<div className="w-50 text-md-right">
										<a href="#">Mot de passe oublié</a>
									</div>
		            </div>
		          </form>
		          <p className="text-center">Pas un membre? <Link data-toggle="tab" to="/Register">Inscription</Link></p>
		        </div>
		      </div>
            </div>
		</div>
        </div>
	</section>
     );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

 
export default connect(mapStateToProps, { login })(Login);