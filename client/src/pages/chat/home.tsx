import { StyleSheet, View } from "react-native";

import { Layout } from "../../components/layout";
import { ChatHeader } from "./common/header";
import { ChatFooter } from "./common/footer";
import { ChatMain } from "./common/main";
import styled from "styled-components";
import { getHeight, getWidth } from "../../theme/responsive";

const ChatHome = ({ navigation }: ComPropsObject) => {
    return (
        <ChatHomeWrapper>
            <ChatHeader />
            <ChatMain />
            <ChatFooter />
        </ChatHomeWrapper>
    )
}


const ChatHomeWrapper = styled(View)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}))

export { ChatHome };