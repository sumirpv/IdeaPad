import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import firebase from 'firebase';
import { authInputChange}  from '../actions/index';
import { connect } from 'react-redux';

 class LoginForm extends Component {
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDBGLSO6Do4yare2S7MxtqQ3v63Tq7pjo8",
            authDomain: "my-ideapad.firebaseapp.com",
            databaseURL: "https://my-ideapad.firebaseio.com",
            projectId: "my-ideapad",
            storageBucket: "my-ideapad.appspot.com",
            messagingSenderId: "702893693507"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <View style={styles.container}>
                <InnerSection>
                    <FormInput placeholder="Email"
                    value = { this.props.email}
                    onChangeText ={text => this.props.authInputChange({'field' : 'email' ,'value': text })} />
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="Password"
                    value = { this.props.password}
                    onChangeText ={text => this.props.authInputChange({'field' : 'password' ,'value': text })}
                    secureTextEntry={true} />
                </InnerSection>
                <InnerSection>
                    <Button title="Login" 
                    onPress = { () => console.log(this.props.email)}
                    backgroundColor="teal" />
                </InnerSection>
            </View>
        );
    }
}

const mapStateToProp = state =>{
   return{
    email: state.auth.email,
    password: state.auth.password
   }
};


export default connect(mapStateToProp, {authInputChange})(LoginForm);


const styles = {
    container: {
        marginTop: 30,
    }
}
