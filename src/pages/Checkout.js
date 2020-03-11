import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';

const Checkout = ({route, navigation}) => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const tnc = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel lorem feugiat, eu posuere erat finibus.'
    ];

    const validateAccept = () => {
        if(fullname === '')
        {
            Alert.alert('Failed', 'Full name must be filled');
        }
        else if(email === '')
        {
            Alert.alert('Failed', 'Email must be filled');
        }
        else if(phone === '')
        {
            Alert.alert('Failed', 'Phone must be filled');
        }
        else
        {
            navigation.navigate('EndPage');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.details}>
                    <Text style={[styles.text, styles.header]}>Customer Details</Text>
                    <Text style={styles.text}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        onChangeText={fullname => { setFullname(fullname) }}
                    />
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={email => { setEmail(email) }}
                        keyboardType='email-address'
                    />
                    <Text style={styles.text}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        onChangeText={phone => { setPhone(phone) }}
                        keyboardType='phone-pad'
                    />
                </View>

                <View style={[styles.location, styles.details]}>
                    <Text style={[styles.text, styles.header]}>Booking Details</Text>
                    <Text style={styles.text}>Date  : {route.params.item.date}</Text>
                    <Text style={styles.text}>Shift : {route.params.item.shift}</Text>
                </View>

                <View style={[styles.location, styles.details]}>
                    <Text style={[styles.text, styles.header]}>Location</Text>
                    <Text style={styles.text}>Room  : {route.params.item.room}</Text>
                    <Text style={styles.text}>ABC Tower </Text>
                    <Text style={styles.text}>123 ABC Street #12-200 XYZ </Text>
                    <Text style={styles.text}>123456 </Text>
                </View>

                <View style={styles.tnc}>
                    <Text style={[styles.text, styles.header]}>Terms and Conditions</Text>
                    { tnc.map((prop, key) => (
                        <Text style={styles.text} key={key}>{key + 1}. {prop}</Text>
                    )) }
                </View>

                <View style={styles.location}>
                    <TouchableOpacity onPress={validateAccept}>
                        <View style={[
                            styles.button,
                            {backgroundColor: 'rgba(2, 237, 38, 0.8)'}
                        ]}>
                            <Text>Accept</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <View style={[
                            styles.button,
                            {backgroundColor: 'rgba(237, 2, 2, 0.8)'}
                        ]}>
                            <Text style={styles.text}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    details: {
        paddingBottom: 15,
        borderBottomWidth: 0.5
    },
    text: {
        fontSize: 15
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    location: {
        paddingTop: 20
    },
    input: {
        paddingTop: 5,
        paddingBottom: 0,
        marginBottom: 10,
        fontSize: 15,
        borderBottomWidth: 0.8,
        borderColor: 'rgba(92, 205, 250, 1)'
    },
    tnc: {
        paddingTop: 20,
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Checkout