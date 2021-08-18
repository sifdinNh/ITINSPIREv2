import '../assets/css/montserrat-font.css'
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
const Register = ({ signup, isAuthenticated }) => {
const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
        company:'',
        code:'',
        phone:'',
    });
    const { first_name, last_name,code,phone,company, email, password, re_password } = formData;
    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            const phonee=code+""+phone
            signup(first_name, last_name, email, password, re_password,phonee,company);
            setAccountCreated(true);
        }
    };


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }
    return ( 
        <div class="page-content">
		<div class="form-v10-content">
			<form onSubmit={e =>onSubmit(e)} class="form-detail"  id="myform">
				<div class="form-left">
					<h2>General Infomation</h2>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="text" name="first_name" onChange={e =>onChange(e)} id="first_name" class="input-text" placeholder="Prénom" required />
						</div>
						<div class="form-row form-row-2">
							<input type="text" name="last_name" onChange={e =>onChange(e)} id="last_name" class="input-text" placeholder="Nom" required />
						</div>
					</div>

					<div class="form-row">
						<input type="text" name="email" onChange={e =>onChange(e)} id="Email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Email" />
					</div>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="password" name="password" onChange={e =>onChange(e)} id="password" class="input-text" placeholder="mot de passe" required />
						</div>
						<div class="form-row form-row-2">
							<input type="password" name="re_password" onChange={e =>onChange(e)} id="re_password" class="input-text" placeholder="mot de passe" required />
						</div>
					</div>
					<div class="form-row">
						<input type="text" name="company" onChange={e =>onChange(e)} class="company" id="company" placeholder="Entreprise(optionnel)" required />
					</div>

				</div>
				<div class="form-right">
					<h2>Contact Details</h2>
					<div class="form-row">
						<input type="text" name="street" class="street" id="street" placeholder="Adresse" required />
					</div>


					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="text" onChange={e =>onChange(e)} name="code" class="code" id="code" placeholder="Code +" required />
						</div>
						<div class="form-row form-row-2">
							<input type="text" onChange={e =>onChange(e)} name="phone" class="phone" id="phone" placeholder="Tel" required />
						</div>
					</div>
					<div class="form-checkbox">
						<label class="container"><p>J’accepte <a href="#" class="text">les termes et conditions</a> de votre site.</p>
						  	<input type="checkbox" name="checkbox" />
						  	<span class="checkmark"></span>
						</label>
					</div>
					<div class="form-row-last">
						<input type="submit"  name="register" class="register" value="Inscrire" />
					</div>
				</div>
			</form>
		</div>
	</div>
     );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Register);