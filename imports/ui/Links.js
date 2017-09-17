import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

import { Links } from '../api/links'
import LinksList from './LinksList'

export default class Link extends Component {
	onLogout(e){
		e.preventDefault()
		Accounts.logout()
	}
	onFormSubmit(e){
		e.preventDefault()
		let url = this.refs.url.value.trim()

		if(url){
			Links.insert({
				url
			});
			this.refs.url.value = ''
		}
	}
	render() {
		return ( 
			<div>
				<p>Link Component here</p>
				<button onClick={this.onLogout.bind(this)}>Logout</button>
				<LinksList/>
				<p>Add Link</p>
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" ref='url' placeholder='Enter Url'/>
					<button>Add Link</button>
				</form>
			</div>
		)
	}
}