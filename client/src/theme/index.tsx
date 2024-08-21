import React from "react";
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { getHeight, getWidth } from "./responsive";

declare module 'styled-components/native' {
  export interface DefaultTheme {
    white: string;
    black: string;
    green: string;
    red: string;

    globalBoxPadding: number
    globalSpacingX: number
    globalSpacingGap: number

    baseBackground: string
    footerBackground: string
    FirstBackground: string
    SecondBackground: string
    thirdBackground: string
    fourthBackground: string

    typographyBaseColor: string
    typographySecondColor: string
    typographyActiveColor: string
    typographyThirdColor: string

    hoverActiveColor: string

    borderBaseColor: string
    borderActiveColor: string
    borderActiveColor1: string

    getWidth: (size: number) => number
    getHeight: (size: number) => number
  }
}

const StyledThemeProvider = ({ children }: any) => {
  const theme: DefaultTheme = {
    white: '#ffffff',
    black: '#000000',
    green: '#40bb10',
    red: '#bb1010',

    globalBoxPadding: getWidth(1.9),
    globalSpacingX: getWidth(3.7),
    globalSpacingGap: getWidth(3.7),

    baseBackground: "#ffffff",
    footerBackground: "#F3F4F6",
    FirstBackground: "#111827",
    SecondBackground: '#60C5D1',
    thirdBackground: "#86EFAC",
    fourthBackground: "#E5E7EB",

    typographyBaseColor: "#374151",
    typographySecondColor: "#060f1f",
    typographyActiveColor: "#3B82F6",
    typographyThirdColor: "#5968F2",

    hoverActiveColor: "#EFF6FF",

    borderBaseColor: "#D1D5DB",
    borderActiveColor: "#3B82F6",
    borderActiveColor1: "#3b83f663",

    getWidth: getWidth,
    getHeight: getHeight,
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { StyledThemeProvider };