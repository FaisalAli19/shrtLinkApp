import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Login from '../ui/Login'
import Signup from '../ui/Signup'
import Links from '../ui/Links'
import NotFound from '../ui/NotFound'

const unAuthPage = ['/', '/signup']
const authPage = ['/links']

const onEnterPublicRoute = () => {
	if (Meteor.userId()) {
		browserHistory.replace('/links')
	}
}
const onEnterPrivateRoute = () => {
	if (!Meteor.userId()) {
		browserHistory.replace('/')
	}
}

export const onAuthChange = (isAuth) => {
	const pathName = browserHistory.getCurrentLocation().pathname
	const isOnUnAuthPage = unAuthPage.includes(pathName)
	const isOnAuthPage = authPage.includes(pathName)

	if (isOnUnAuthPage && isAuth) {
		browserHistory.replace('/links')
	} else if (isOnAuthPage && !isAuth) {
		browserHistory.replace('/')
	}
}

export const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Login} onEnter={onEnterPublicRoute} />
		<Route path="/signup" component={Signup} onEnter={onEnterPublicRoute} />
		<Route path='/links' component={Links} onEnter={onEnterPrivateRoute} />
		<Route path='*' component={NotFound} />
	</Router>
)