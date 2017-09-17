import React, { Component } from 'react'
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor'

export default class componentName extends Component {
	constructor(props){
		super(props)
		this.state = {
			error: ''
		}
	}
	onFormSubmit(e){
		e.preventDefault()
		let email = this.refs.email.value.trim()
		let password = this.refs.password.value.trim()

		Meteor.loginWithPassword({ email }, password, (err) => {
			if(err){
				this.setState({
					error: 'Invalid Email or Password'
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
				<h2>Login to Short Link App</h2>
				{this.state.error ? <p>{this.state.error}</p> : undefined}
				<form onSubmit={this.onFormSubmit.bind(this)} noValidate>
					<input type="email" name='email' ref='email' placeholder='Email Id' />
					<input type="password" name='password' ref='password' placeholder='Password' />
					<button>Login</button>
				</form>
				<Link to='/signup'>Need an Account</Link>
			</div>
		)
	}
}