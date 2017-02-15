/**
 * Created by mvl on 15.02.2017.
 */
import React from 'react';

function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick(){
		this.setState({
			isLoggedIn: true
		});
	}
	handleLogoutClick(){
		this.setState({
			isLoggedIn: false
		});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{isLoggedIn ? (
						<LogoutButton onClick={this.handleLogoutClick} />
					) : (
						<LoginButton onClick={this.handleLoginClick} />
					)}
			</div>
		);
	}

}

export default LoginControl;