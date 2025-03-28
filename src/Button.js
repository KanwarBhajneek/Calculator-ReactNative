import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";


const Button = (props) => {
    const { onPress, color, val } = props;
    const [scale, setScale] = useState(1);
    const scaleDown = () => setScale(0.8);
    const scaleUp = () => setScale(1);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={scaleDown}
            onPressOut={scaleUp}
            style={[styles.container, { backgroundColor: color || 'snow' }, { transform: [{ scale }] }]}>
            <Text style={[styles.text, { color: color ? 'white' : 'black' }]}>{val}</Text>
        </Pressable>
    );
}

const shouldNotRender = (prevProps, newProps) => true;
export default React.memo(Button, shouldNotRender);

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'white',
        shadowOpacity: 0.5
    },
    text: {
        color: 'black',
        fontWeight: 400,
        fontSize: 20
    }
});