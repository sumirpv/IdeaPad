import React from 'react';
import { createStackNavigator, createSwitchNavigator, } from 'react-navigation';
import LoginForm from './components/login-form';
import IdeaList from './components/idea-list';
import AddIdea from './components/add-idea';
import EditIdea from './components/edit-idea';
import { Icon } from 'react-native-elements';


const AuthStack = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        }
    }
});

const AppStack = createStackNavigator({
    Ideas: {
        screen: IdeaList,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Your IdeaPad',
                headerRight: (
                    <Icon
                        type='evilicon'
                        name='plus'
                        size={30}
                        onPress={() => navigation.navigate('AddIdeas')}
                        iconStyle={{ padding: 10 }}
                    />
                ),
                headerLeft: null
            }
        }
    },
    AddIdeas: {
        screen: AddIdea,
        navigationOptions: {
            headerTitle: 'Add Your Ideas'
        }
    },
    EditIdea: {
        screen: EditIdea,
        navigationOptions: {
            headerTitle: 'Change Your Ideas'
        }
    }
});

export default createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
);