import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange , createIdea}  from '../actions';
import { connect } from 'react-redux';
import IdeaPad from './ideapad-form';

 class AddIdea extends Component {

create(){
    console.log( "Loging on firebase");
    const {title, idea} = this.props;
    this.props.createIdea({title, idea});
    this.props.navigation.navigate('Ideas');
}

    render() {
        return (
            <View style={styles.container}>
                <IdeaPad/>
                <InnerSection>
                <Button title="Submit Your Ideas" 
    onPress = { this.create.bind(this)}
    backgroundColor="teal" />
                </InnerSection>
            </View>
        );
    }
}

const mapStateToProp = state =>{
   return{
    title: state.ideaPadForm.title,
    idea: state.ideaPadForm.idea
   }
};


export default connect(mapStateToProp, {ideaInputChange, createIdea})(AddIdea);


const styles = {
    container: {
        marginTop: 30,
    }
}
