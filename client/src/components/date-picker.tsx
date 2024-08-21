import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import { useGlobalContext } from '../provider';
import { TextH3 } from './typography';
import { getWidth, getHeight } from '../theme/responsive';


const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>{children}</View>
    </TouchableWithoutFeedback>
);

interface InputProps {
    title?: string
    onChangeDate: (date: Date, k: string) => void;
    value: string
    onPress?: () => {}
    icon?: number
    inputProps?: any
    placeholder?: string
    k: string
}

const StyledDatePicker = (props: InputProps) => {
    const theme = useTheme();
    const [state]: GlobalContextType = useGlobalContext()
    const { title, value, onPress, icon, onChangeDate, placeholder, k } = props
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date())
    return (
        <DismissKeyboard>
            {title && <TextH3 style={{ paddingBottom: getHeight(.5) }}>{title}</TextH3>}
            <StyledTouchableOpacity
                lang={state.lang}
                activeOpacity={1}
                onPress={onPress}>
                <StyledView value={value} lang={state.lang}>
                    <StyledText value={value} onPress={() => setOpen(true)}>{value ? value : placeholder}</StyledText>
                </StyledView>
                {icon && (
                    <Image source={icon} style={{ width: getWidth(5), height: getWidth(5), resizeMode: 'contain' }} />
                )}
            </StyledTouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                dividerColor="white"
                locale={state.lang}
                onConfirm={(date) => {
                    setOpen(false)
                    onChangeDate(date, k)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </DismissKeyboard>
    );
};

const StyledTouchableOpacity = styled(TouchableOpacity)<{ lang: string }>(({ theme, lang }) => ({
    flexDirection: lang === "en" ? 'row' : "row-reverse",
    color: theme.black,
    borderRadius: getWidth(100),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: lang === "en" ? getWidth(2) : getWidth(4),
    paddingRight: lang === "en" ? getWidth(4) : getWidth(2),
}))

const StyledView = styled(View)<{ value: string, lang: string }>(({ theme, value, lang }) => ({
    textAlign: 'left',
    display: 'flex',
    flexDirection: lang === "en" ? "row" : 'row-reverse',
    justifyContent: lang === "en" ? 'flex-start' : "start",
    alignItems: lang === "en" ? 'center' : "center",
    height: getHeight(5),
    fontSize: getWidth(4),
    paddingHorizontal: getWidth(3)
}))

const StyledText = styled(Text)<{ value: string }>(({ theme, value }) => ({
    color: theme.black,
    fontSize: getWidth(4),
    textAlign: 'center',
    width: '100%'
}))

export default StyledDatePicker;
