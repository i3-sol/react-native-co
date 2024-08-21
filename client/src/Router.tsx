import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import { routerConfig } from './router-config';
import { Profile } from './pages/profile';
import { Dashboard } from './pages/dashboard';
import { SignUp } from './pages/auth/signup';
import { SignIn } from './pages/auth/signin';
import { Auth } from './pages/auth';
import { getWidth } from './theme/responsive';
import { useGlobalContext } from './provider';
import { Loading } from './components/loading';

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
          <Stack.Screen name={routerConfig.signup.name} component={SignUp} options={screenOptions} />

          <Stack.Screen name={routerConfig.home.name} component={Dashboard} options={screenOptions} />
          <Stack.Screen name={routerConfig.profile.name} component={Profile} options={screenOptions} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast config={toastConfig} />
      <Loading isLoading={state.loading} />
    </SafeAreaProvider>
  )
}

export { Routers }