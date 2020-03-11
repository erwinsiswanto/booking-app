import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Schedule from '../pages/Schedule';
import Checkout from '../pages/Checkout';
import EndPage from '../pages/EndPage';

const Stack = createStackNavigator();

const ScheduleStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Schedule" component={Schedule} options={{ title: 'Schedule Page' }}/>
            <Stack.Screen name="Checkout" component={Checkout} options={{ title: 'Checkout Confirmation' }}/>
        </Stack.Navigator>
    )
};

const Navigator = () => {
    return (
        <Stack.Navigator headerMode='none' >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Schedule" component={ScheduleStack}/>
            <Stack.Screen name="EndPage" component={EndPage} />
        </Stack.Navigator>
    )
};

export default Navigator;