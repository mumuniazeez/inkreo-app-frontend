import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const fileData = [
    { id: '1', title: 'Atomic Habits1', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '2', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '3', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '4', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '5', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '6', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '7', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '8', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '9', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '10', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '11', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '12', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '13', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '14', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '15', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '16', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '17', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '18', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '19', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '20', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '21', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '22', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '23', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '24', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '25', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '26', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '27', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '28', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '29', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '30', title: 'Atomic Habits', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '31', title: 'Atomic Habits31', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '32', title: 'Atomic Habits32', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '33', title: 'Atomic Habits33', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '34', title: 'Atomic Habits34', date: '02/07', size: '10MB', location: 'This Device' },
    { id: '35', title: 'Atomic Habits35', date: '02/07', size: '10MB', location: 'This Device' },
];

const FileList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="file-document-outline" size={25} color="#E94560" style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{`${item.date} · ${item.size} · ${item.location}`}</Text>
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons name="dots-vertical" size={24} color="#777" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ backgroundColor: '#fff', }}>
            <FlatList
                data={fileData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 5,
    },
    iconContainer: {
        width: 25,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9456069',
        borderRadius: 5,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#000000',
    },
    subtitle: {
        color: '#666',
        fontSize: 12,
        marginTop: 2,
    },
});

export default FileList;
