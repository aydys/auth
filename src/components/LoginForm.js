import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

import { Post } from '../libs/api';

class LoginForm extends Component {
	state = { 
		email: '',
		password: '',
		error: '',
		loading: false
	};

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		Post({
			url: "auth/login",
			params: {
			login: this.state.email,
			password: this.state.password
			}
		}).then((res) => {
			this.props.navigation.navigate('Dashboard');
			console.log(292, res)
		})
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		})
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	renderButton() {
		// if(this.state.loading) {
		// 	return <Spinner size='small' />
		// }

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		)
	}

	render() {
    	return (
			<View style={styles.container}>
            	<Header 
              		headerText={'Авторизация'}
               	/>
				<Card style={styles.cardStyle}>
					<CardSection>
						<Input
							placeholder="user@gmail.com"
							autoCorrect={false}
							label='Email'
							value={this.state.email}
							onChangeText={text => this.setState({ email: text })}
						/>
					</CardSection>
					<CardSection>
						<Input
							secureTextEntry
							placeholder="password"
							label='Password'
							value={this.state.password}
							onChangeText={text => this.setState({ password: text })}
						/>
					</CardSection>

					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>

					<CardSection>
						{ this.renderButton() }
					</CardSection>
				</Card>
      		</View>
    	);
  	}
};

const styles = StyleSheet.create({
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'crimson'
	},
	cardStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		justifyContent: 'center',
		height: '100%'
	  }
});

export default LoginForm;