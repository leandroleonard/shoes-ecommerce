// AppIntro.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '@/data/slidesIntro';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';


export default function AppIntro({ onDone }: { onDone: () => void }) {
    const renderItem = ({ item }: any) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <View style={{ alignItems: 'center', marginBottom: 20}}>
                <Image source={item.image} style={styles.image} />
                {item.icon && (<Ionicons name={item.icon} color="#FFF" size={48}/>) }
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    const renderNextButton = () => (
        <View style={styles.buttonCircle}>
            <Text style={styles.buttonText}>Next</Text>
        </View>
    );

    const renderDoneButton = () => (
        <TouchableOpacity onPress={onDone} style={styles.buttonCircle}>
            <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
    );

    return (
        <React.Fragment>
            <StatusBar style='auto' />
            <AppIntroSlider
                data={slides}
                renderItem={renderItem}
                onDone={onDone}
                renderNextButton={renderNextButton}
                renderDoneButton={renderDoneButton}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 600,
        lineHeight: 45,
        margin: 0,
        marginBottom: 10,
        padding: 0
    },
    text: {
        fontSize: 18,
        lineHeight: 22,
        color: '#fff',
    },
    buttonCircle: {
        backgroundColor: '#00000099',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    dot: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
});
