import React from 'react';
import { View } from 'react-native';

import { Button } from './common/Button';

const Dashboard = (props) => {
    return (
        <View style={{height: 100}}>
            <Button 
                style={{height: '100%'}}
                onPress={() => props.navigation.navigate('LoginForm')}
            >Log out</Button>
        </View>
    );
};

export default Dashboard;