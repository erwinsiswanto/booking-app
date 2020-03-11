import React, {useState, useEffect} from 'react';
import {
    Animated,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const EndPage = ({ navigation }) => {
    const [iconSize, setIconSize] = useState(new Animated.Value(10));

    const startAnimation = () => {
        Animated.spring(iconSize, {
            toValue: 80,
            friction: 2,
        }).start();
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                <AnimatedIcon
                    name='check'
                    style={[styles.icon, {fontSize: iconSize}]}
                />
                </View>
                <Text style={styles.success}>Booking Success</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>Your reference code is : </Text>
                <Text style={styles.codeText}>"BOOKING001"</Text>
                <Text style={[styles.text, { paddingLeft: 15, paddingRight: 15, paddingTop: 10, textAlign: 'center' }]}>Please register at least 10 minutes before scheduled time.</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => { navigation.push('Schedule') }} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Home</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        padding: 15,
        borderRadius: 100,
        backgroundColor: 'green'
    },
    text: { fontSize: 15 },
    codeText: { fontSize: 25 },
    buttonText: { fontSize: 18 },
    icon: {
        textAlign: 'center',
        color: '#fff'
    },
    success: {
        fontSize: 30,
        marginTop: 15,
        fontWeight: 'bold',
        color: 'green'
    },
    content: {
        flex: 0.45,
        alignItems: 'center'
    },
    footer: {
        flex: 0.15
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(2, 237, 38, 0.8)'
    }
});

export default EndPage;