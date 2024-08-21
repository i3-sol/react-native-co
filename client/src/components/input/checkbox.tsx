import React from 'react';
import styled from 'styled-components/native';
import { Platform, Pressable, TouchableOpacity } from 'react-native';

import { useGlobalContext } from '../../provider';
import { getHeight, getWidth } from '../../theme/responsive';

const isIOS = Platform.OS === 'ios';
const NativeButton = !isIOS ? Pressable : TouchableOpacity;

const FormPressable = ({ children, hitSlop, onPress }: { children: React.ReactNode, hitSlop?: number, onPress: () => void }) => {
  const [state] = useGlobalContext()
  return (
    <StyledCheckBox
      lang={state.lang}
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

const StyledCheckBox = styled(NativeButton)<{ lang: string }>(({ theme, lang }) => ({
  display: 'flex',
  flexDirection: lang === "en" ? 'row' : 'row-reverse',
  alignItems: 'center',
  gap: getWidth(2.2),
  paddingTop: getHeight(.7)
}))

export { FormPressable };
