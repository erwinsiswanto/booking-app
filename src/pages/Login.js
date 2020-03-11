import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = () => {
        if(username === '')
        {
            Alert.alert('Failed to Login', 'Username must be filled');
        }
        else if(password === '')
        {
            Alert.alert('Failed to Login', 'Password must be filled');
        }
        else
        {
            props.navigation.navigate('Schedule');
        }
    };

    const newFeature = () => {
        ToastAndroid.showWithGravityAndOffset(
            'New Feature Coming Soon',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    name="open-book"
                    size={100}
                />
                <Text style={styles.headerText}>
                    Course Booking
                </Text>
                <Text style={styles.smallText}>
                    A simple app to facilitate your booking needs
                </Text>
            </View>

            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={username => { setUsername(username) }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={password => { setPassword(password) }}
                />
                <TouchableOpacity onPress={doLogin}>
                    <View style={styles.btnSignIn}>
                        <Text style={styles.signIn}>
                            Sign In
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={newFeature}>
                    <Text style={styles.forgotPassword}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <Text style={styles.register}>
                    Don't have an account? <Text style={styles.linkRegister} onPress={newFeature}>Sign Up here</Text>
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.4,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    content: {
        flex: 0.6,
        paddingTop: 20
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        textAlign: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgba(92, 205, 250, 1)'
    },
    btnSignIn: {
        margin: 20,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(92, 205, 250, 1)'
    },
    headerText: {
        fontSize: 25,
        marginTop: 20,
    },
    smallText: {
        fontSize: 15
    },
    signIn: {
        fontSize: 18
    },
    forgotPassword: {
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },
    register: {
        fontSize: 15,
        alignSelf: 'center'
    },
    linkRegister: {
        color: 'blue'
    }
});

export default Login;