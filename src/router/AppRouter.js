import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Firebase
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// Components
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Pages
import { SignIn } from '../pages/SignIn';
import { CookiePolicy } from '../pages/CookiePolicy';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';

export const AppRouter = () => {
	const [isAuthenticated] = useAuthState(auth);

	return (
		<Router>
			<Switch>
				<PublicRoute
					exact
					path='/signin'
					component={SignIn}
					isAuthenticated={isAuthenticated}
				/>

				<PublicRoute
					exact
					path='/cookies'
					component={CookiePolicy}
					isAuthenticated={isAuthenticated}
				/>

				<PublicRoute
					exact
					path='/privacy'
					component={PrivacyPolicy}
					isAuthenticated={isAuthenticated}
				/>

				<PrivateRoute
					path='/'
					component={DashboardRoutes}
					isAuthenticated={isAuthenticated}
				/>
			</Switch>
		</Router>
	);
};
