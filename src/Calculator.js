
import React, { useCallback, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from './Button';

const buttonsList = ['C', '⌫', '✔', '^', 7, 8, 9, '*', 4, 5, 6, '/', 1, 2, 3, '-', '.', 0, '=', , '+'];
const coloredButtons = ['*', '/', '-', '+', 'C', '⌫', '✔', '^', '='];
function calculate(t) {
    try {
        return String(eval(t));
    } catch (e) {
        return 'Error';
    }
}

const Calculator = () => {
    const [text, setText] = useState('');

    const onBtnPress = useCallback((val) => {
        try {
            switch (true) {
                case val === '=':
                    setText(calculate);
                    break;
                case val === 'C':
                    setText('');
                    break;
                case val === '⌫':
                    setText(t => t.substring(0, t.length - 1));
                    break;
                case val === '^':
                    setText(t => t + '**');
                    break;
                case val === '✔':
                    setText(t => calculate(calculate(t) + '**0.5'));
                    break;
                default:
                    setText(t => t + '' + val);
                    break;
            }
        } catch (e) {
            setText('Error');
        }

    }, []);

    return <>
        <View style={styles.container}>
            <TextInput onChangeText={setText} value={text} style={styles.input} maxLength={10} />
            <View style={styles.buttons}>
                {buttonsList.map((val) => <Button key={val} onPress={() => onBtnPress(val)} val={val} color={coloredButtons.includes(val) ? 'darkorange' : null} />)}
            </View>
        </View>
    </>
}

export default Calculator;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: 220
    },
    input: {
        width: 190,
        borderWidth: 1,
        color: 'white',
        textAlign: 'right',
        margin: 8,
        height: 30,
        fontSize: 25,
        paddingHorizontal: 5,
        paddingTop: 15,
        height: 60,
        backgroundColor: 'gray',
        borderRadius: 5
    },
    buttons: {
        width: 200,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 8,
    }
});