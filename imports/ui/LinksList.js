import React, { Component } from 'react'
import { Tracker } from 'meteor/tracker'

import { Links } from '../api/links'

export default class LinksList extends Component {
	constructor(props){
		super(props)
		this.state = {
			links: []
		}
	}
	componentDidMount(){
		this.linkTrackers = Tracker.autorun(() => {
			const links = Links.find().fetch()
			
			this.setState({
				links
			})
		})
	}
	componentWillUnmount(){
		this.linkTrackers.stop()
	}
	renderListItems(){
		let listsItem = this.state.links
		
		if(listsItem){
			return listsItem.map((item) => {
				return <p key={ item._id }>{ item.url }</p>
			})
		}
	}
	render() {
		return (
			<div>
				<p>List of Links</p>
				<div>
					{ this.renderListItems() }
				</div>
			</div>
		)
	}
}