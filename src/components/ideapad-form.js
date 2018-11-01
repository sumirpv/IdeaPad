import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange , createIdea}  from '../actions';
import { connect } from 'react-redux';

 class IdeaPadForm extends Component {

create(){
    console.log( "Loging on firebase");
    const {title, idea} = this.props;
    this.props.createIdea({title, idea});
}

    render() {
        return (
            <View style={styles.container}>
                <InnerSection>
                    <FormInput placeholder="Title"
                    value = { this.props.title}
                    onChangeText ={text => this.props.ideaInputChange({'field' : 'title' ,'value': text })} />
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="Write down the idea here ..."
                    value = { this.props.idea}
                    onChangeText ={text => this.props.ideaInputChange({'field' : 'idea' ,'value': text })}
                    multiline ={true}
                    inputStyle ={{height:200}}
                    />
                </InnerSection>
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


export default connect(mapStateToProp, {ideaInputChange, createIdea})(IdeaPadForm);


const styles = {
    container: {
        marginTop: 30,
    }
}
