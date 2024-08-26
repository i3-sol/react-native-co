import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import { routerConfig } from './router-config';
import { Profile } from './pages/profile';
import { Dashboard } from './pages/dashboard';
import { SignIn } from './pages/auth/signin';

import { SocialSignUp } from './pages/auth/social-signup';
import { SignUp } from './pages/auth/signup';
import { PersonalSignUp } from './pages/auth/personal-signup';
import { StoreSignUp } from './pages/auth/store-signup';

import { MeetingHome, MeetingDetail } from './pages/meeting';

import { ChangeChatNameSetting, ChangeChatPhotoSetting, ChatHome, ChatSetting, ChangeChatDescSetting } from './pages/chat';

import { Auth } from './pages/auth';
import { getWidth } from './theme/responsive';
import { useGlobalContext } from './provider';
import { Loading } from './components/loading';
import { MeetDetail, MeetNow } from './pages/meetNow';
import { ChangeChatCategorySetting } from './pages/chat/change-category-setting';

// Enable screens for better performance
enableScreens();

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false };

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        width: getWidth(70),
        maxWidth: 300,
        borderLeftColor: 'green',
      }}
      contentContainerStyle={{
        paddingHorizontal: 10,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        width: getWidth(70),
        maxWidth: 300,
        borderLeftColor: 'tomato',
      }}
      contentContainerStyle={{
        paddingHorizontal: 10,
      }}
    />
  )
}

const Routers = () => {
  const [state]: GlobalContextType = useGlobalContext();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routerConfig.auth.name}>
          <Stack.Screen name={routerConfig.auth.name} component={Auth} options={screenOptions} />
          <Stack.Screen name={routerConfig.signin.name} component={SignIn} options={screenOptions} />

          <Stack.Screen name={routerConfig.socialSignup.name} component={SocialSignUp} options={screenOptions} />
          <Stack.Screen name={routerConfig.signup.name} component={SignUp} options={screenOptions} />
          <Stack.Screen name={routerConfig.personalSignup.name} component={PersonalSignUp} options={screenOptions} />
          <Stack.Screen name={routerConfig.storeSignup.name} component={StoreSignUp} options={screenOptions} />

          <Stack.Screen name={routerConfig.home.name} component={Dashboard} options={screenOptions} />
          <Stack.Screen name={routerConfig.profile.name} component={Profile} options={screenOptions} />
          
          <Stack.Screen name={routerConfig.meetingHome.name} component={MeetingHome} options={screenOptions} />
          <Stack.Screen name={routerConfig.meetingDetail.name} component={MeetingDetail} options={screenOptions} />

          <Stack.Screen name={routerConfig.meetNow.name} component={MeetNow} options={screenOptions} />
          <Stack.Screen name={routerConfig.meetDetail.name} component={MeetDetail} options={screenOptions} />

          <Stack.Screen name={routerConfig.chat.name} component={ChatHome} options={screenOptions} />
          <Stack.Screen name={routerConfig.setting.name} component={ChatSetting} options={screenOptions} />
          <Stack.Screen name={routerConfig.changeChatName.name} component={ChangeChatNameSetting} options={screenOptions} />
          <Stack.Screen name={routerConfig.changeChatPhoto.name} component={ChangeChatPhotoSetting} options={screenOptions} />
          <Stack.Screen name={routerConfig.changeChatDesc.name} component={ChangeChatDescSetting} options={screenOptions} />
          <Stack.Screen name={routerConfig.changeChatCategory.name} component={ChangeChatCategorySetting} options={screenOptions} />

          <Stack.Screen name="*" component={Dashboard} options={screenOptions} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast config={toastConfig} />
      <Loading isLoading={state.loading} />
    </SafeAreaProvider>
  )
}

export { Routers }