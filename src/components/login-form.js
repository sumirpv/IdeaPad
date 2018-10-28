import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import firebase from 'firebase';
import { authInputChange , login}  from '../actions';
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

login(){
    const {email, password} = this.props;
    this.props.login({email, password});
}

showButton(){
   if( this.props.loading){
       return(
           <View>
               <ActivityIndicator size={'small'}/>
           </View>
       );
   }
   return(
    <Button title="Login" 
    onPress = { this.login.bind(this)}
    backgroundColor="teal" />
   )
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
                    {this.showButton()}
                </InnerSection>
            </View>
        );
    }
}

const mapStateToProp = state =>{
   return{
    email: state.auth.email,
    password: state.auth.password,
    loading:  state.auth.loading,
    user: state.auth.user,
    error: state.auth.error
   }
};


export default connect(mapStateToProp, {authInputChange, login})(LoginForm);


const styles = {
    container: {
        marginTop: 30,
    }
}
