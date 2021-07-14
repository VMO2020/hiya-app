import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Chat } from '../pages/Chat';

export const DashboardRoutes = () => {
	return (
		<Switch>
			<Route exact path='/chat' component={Chat} />
			<Redirect to='/chat' />
		</Switch>
	);
};
