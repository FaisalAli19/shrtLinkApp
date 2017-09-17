import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			error: ''
		}
	}
	onFormSubmit(e){
		e.preventDefault()
		let email = this.refs.email.value.trim()
		let password = this.refs.password.value.trim()

		if(password.length < 6){
			return this.setState({
				error: 'Password must be more than 6 charactor long'
			})
		}

		Accounts.createUser({ email, password}, (err) => {
			if (err) {
				this.setState({
					error: err.reason
				})
			}else{
				this.setState({
					error: ''
				})
			}
		})

	}
	render() {
		return (
			<div>
				<h2>Join Short Link App</h2>
				{ this.state.error ? <p>{this.state.error}</p> : undefined }
				<form onSubmit={this.onFormSubmit.bind(this)} noValidate>
					<input type="email" name='email' ref='email' placeholder='Email Id'/>
					<input type="password" name='password' ref='password' placeholder='Password'/>
					<button>Create Account</button>
				</form>
				<Link to='/'>Have an Account</Link>
			</div>
		)
	}
}