import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useGlobalContext } from '../provider';

import { TextH3 } from './typography';
import { getWidth, getHeight } from '../theme/responsive';

interface SelectProps {
    value: string
    values: Array<{ label: string, value: string }>
    onSelect: (v: string) => void;
}

const DropdownComponent = (props: SelectProps) => {
    const [state] = useGlobalContext()

    const { value, values, onSelect } = props

    const [isFocus, setIsFocus] = useState(false);
    return (
        <View>
            <View style={styles.container}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    itemTextStyle={{fontSize: getWidth(4), padding: 0}}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={state.lang === "en" ? styles.iconStyle : styles.iconLeftStyle}
                    data={values}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? '性別' : ''}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item: any) => {
                        onSelect(item.value)
                        setIsFocus(false);
                    }}
                />
            </View>
        </View>

    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
    },
    dropdown: {
        height: getHeight(6),
        paddingHorizontal: getWidth(5),
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: getWidth(4)
    },
    placeholderStyle: {
        fontSize: getWidth(4),
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: getWidth(4),
        color: 'black'
    },
    iconStyle: {
        width: (16),
        height: (16),
        position: 'absolute',
        right: 0,
    },
    iconLeftStyle: {
        width: (16),
        height: (16),
        position: 'absolute',
        left: 0,
    }
});