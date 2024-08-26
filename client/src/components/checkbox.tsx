import React from 'react';
import styled from 'styled-components/native';
import { Platform, Pressable, TouchableOpacity } from 'react-native';
import { getHeight, getWidth } from '../theme/responsive';

const isIOS = Platform.OS === 'ios';
const NativeButton = !isIOS ? Pressable : TouchableOpacity;

const Checkbox = ({ children, hitSlop, onPress }: { children: React.ReactNode, hitSlop?: number, onPress: () => void }) => {
    return (
        <StyledCheckBox
            android_ripple={{
                borderless: false,
                foreground: true,
            }}
            hitSlop={hitSlop}
            onPress={onPress}
        >
            {children}
        </StyledCheckBox>
    );
};

const StyledCheckBox = styled(NativeButton)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: getWidth(2.2),
    paddingTop: getHeight(.7)
}))

export default Checkbox;
