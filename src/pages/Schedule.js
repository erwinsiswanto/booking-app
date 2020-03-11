import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign'

const Schedule = (props) => {
    const scheduleArr = [
        {
            id: '1',
            date: moment().add(1, 'd').format('dddd, DD MMMM YYYY'),
            shift: '1 (08.00 - 12.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '2',
            date: moment().add(1, 'd').format('dddd, DD MMMM YYYY'),
            shift: '2 (13.00 - 17.00)',
            room: 'A',
            isEmpty: false,
        },
        {
            id: '3',
            date: moment().add(1, 'd').format('dddd, DD MMMM YYYY'),
            shift: '3 (18.00 - 22.00)',
            room: 'B',
            isEmpty: false,
        },
        {
            id: '4',
            date: moment().add(2, 'd').format('dddd, DD MMMM YYYY'),
            shift: '1 (08.00 - 12.00)',
            room: 'B',
            isEmpty: true,
        },
        {
            id: '5',
            date: moment().add(2, 'd').format('dddd, DD MMMM YYYY'),
            shift: '2 (13.00 - 17.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '6',
            date: moment().add(2, 'd').format('dddd, DD MMMM YYYY'),
            shift: '3 (18.00 - 22.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '7',
            date: moment().add(3, 'd').format('dddd, DD MMMM YYYY'),
            shift: '1 (08.00 - 12.00)',
            room: 'B',
            isEmpty: false,
        },
        {
            id: '8',
            date: moment().add(3, 'd').format('dddd, DD MMMM YYYY'),
            shift: '2 (13.00 - 17.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '9',
            date: moment().add(3, 'd').format('dddd, DD MMMM YYYY'),
            shift: '3 (18.00 - 22.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '10',
            date: moment().add(4, 'd').format('dddd, DD MMMM YYYY'),
            shift: '1 (08.00 - 12.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '11',
            date: moment().add(4, 'd').format('dddd, DD MMMM YYYY'),
            shift: '2 (13.00 - 17.00)',
            room: 'B',
            isEmpty: false,
        },
        {
            id: '12',
            date: moment().add(4, 'd').format('dddd, DD MMMM YYYY'),
            shift: '3 (18.00 - 22.00)',
            room: 'B',
            isEmpty: true,
        },
        {
            id: '13',
            date: moment().add(5, 'd').format('dddd, DD MMMM YYYY'),
            shift: '1 (08.00 - 12.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '14',
            date: moment().add(5, 'd').format('dddd, DD MMMM YYYY'),
            shift: '2 (13.00 - 17.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '15',
            date: moment().add(5, 'd').format('dddd, DD MMMM YYYY'),
            shift: '3 (18.00 - 22.00)',
            room: 'B',
            isEmpty: false,
        },
        {
            id: '16',
            date: moment().add(6, 'd').format('dddd, DD MMMM YYYY'),
            shift: '1 (08.00 - 12.00)',
            room: 'A',
            isEmpty: true,
        },
        {
            id: '17',
            date: moment().add(6, 'd').format('dddd, DD MMMM YYYY'),
            shift: '2 (13.00 - 17.00)',
            room: 'A',
            isEmpty: false,
        },
        {
            id: '18',
            date: moment().add(6, 'd').format('dddd, DD MMMM YYYY'),
            shift: '3 (18.00 - 22.00)',
            room: 'B',
            isEmpty: true,
        }
    ];

    const cardItem = item => (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.row}>
                    <View style={styles.textLabel}>
                        <Text style={styles.text}>Booking Date</Text>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.text}>: {item.date}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.textLabel}>
                        <Text style={styles.text}>Booking Shift</Text>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.text}>: {item.shift}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardFooter}>
                <View style={styles.left}>
                    <Text style={{ fontSize: 12 }}>
                        Room {item.room}
                    </Text>
                </View>
                <View style={styles.right}>
                {
                    item.isEmpty ?
                        <Text style={{fontSize: 12, color: 'green'}}>
                            <Icon
                                name='check'
                                size={12}
                            />
                            Available
                        </Text>
                        :
                        <Text style={{fontSize: 12, color: 'red'}}>
                            <Icon
                                name='close'
                                size={12}
                            />
                            Not Available
                        </Text>
                }
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Welcome, please select a schedule below
            </Text>
            <FlatList
                data={scheduleArr}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <>
                    { item.isEmpty ?
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Checkout', {
                            item: item
                        })}}>
                            {cardItem(item)}
                        </TouchableOpacity>
                            :
                        <View
                            style={{
                                opacity: 0.4
                            }}
                        >
                            {cardItem(item)}
                        </View>
                    }
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        borderWidth: 0.5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 100,
        borderRadius: 10,
    },
    cardContent: {
        flex: 0.7,
        paddingLeft: 10,
        paddingTop: 5,
        borderBottomWidth: 0.5
    },
    cardFooter: {
        flex: 0.3,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    row: {
        flex: 0.5,
        flexDirection: 'row'
    },
    textLabel: {
        flex: 0.32
    },
    text: {
        fontSize: 15
    },
    textContent: {
        flex: 0.68
    },
    textTitle: {
        paddingLeft: 5,
        textAlign: 'center',
        borderBottomWidth: 0.6,
        borderBottomColor: 'rgba(92, 205, 250, 1)'
    },
    left: {
        flex: 0.5,
        alignItems: 'flex-start'
    },
    right: {
        flex: 0.5,
        alignItems: 'flex-end'
    }
});

export default Schedule;