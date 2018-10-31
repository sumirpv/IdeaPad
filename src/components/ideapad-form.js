import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import { authInputChange , login}  from '../actions';
import { connect } from 'react-redux';

 class IdeaPadForm extends Component {

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
    <Button title="Submit Your Ideas" 
    onPress = { this.login.bind(this)}
    backgroundColor="teal" />
   )
}

showError(){
    if( this.props.error){
        return(
            <FormValidationMessage>
                {this.props.error}
            </FormValidationMessage>
        )
    }
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
                {/* {this.showError()} */}
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


export default connect(mapStateToProp, {authInputChange, login})(IdeaPadForm);


const styles = {
    container: {
        marginTop: 30,
    }
}
