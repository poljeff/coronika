import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/logic';
import screens from './components/screens';
import { COLOR_PRIMARY, COLOR_SECONDARY } from './constants';
import configureStore from './createStore';

const styles = StyleSheet.create({
  appNavigatorWrapper: {
    backgroundColor: COLOR_SECONDARY,
    flex: 1,
  },
  appNavigatorWrapperInner: {
    backgroundColor: '#ffffff',
    bottom: 0,
    height: '50%',
    left: 0,
    right: 0,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  loading: {
    backgroundColor: COLOR_PRIMARY,
    height: '100%',
    width: '100%',
  },
});

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    headerMode={'none'}
    initialRouteName={'App'}
    mode={'card'}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}>
    <Stack.Screen component={App} name={'App'} />
    <Stack.Screen component={screens.About} name={'About'} />
    <Stack.Screen component={screens.AddEntry} name={'AddEntry'} />
    <Stack.Screen component={screens.Day} name={'Day'} />
    <Stack.Screen component={screens.Export} name={'Export'} />
    <Stack.Screen component={screens.Legal} name={'Legal'} />
    <Stack.Screen component={screens.Menu} name={'Menu'} />
    <Stack.Screen component={screens.Overview} name={'Overview'} />
    <Stack.Screen component={screens.Settings} name={'Settings'} />
    <Stack.Screen component={screens.TipAmIInfected} name={'TipAmIInfected'} />
    <Stack.Screen component={screens.TipAvoidCrowdsOfPeople} name={'TipAvoidCrowdsOfPeople'} />
    <Stack.Screen component={screens.TipCoronaWarnApp} name={'TipCoronaWarnApp'} />
    <Stack.Screen component={screens.TipCoughingSneezing} name={'TipCoughingSneezing'} />
    <Stack.Screen component={screens.TipDistanceAndMouthguard} name={'TipDistanceAndMouthguard'} />
    <Stack.Screen component={screens.TipMouthguard} name={'TipMouthguard'} />
    <Stack.Screen component={screens.TipNotFeelingWell} name={'TipNotFeelingWell'} />
    <Stack.Screen component={screens.TipReliableSources} name={'TipReliableSources'} />
    <Stack.Screen component={screens.TipWashingHands} name={'TipWashingHands'} />
  </Stack.Navigator>
);

const AppNavigatorWrapper = () => (
  <SafeAreaView style={styles.appNavigatorWrapper}>
    <View style={styles.appNavigatorWrapperInner} />

    <AppNavigator />
  </SafeAreaView>
);

const Tab = createBottomTabNavigator();

const InitialNavigator = () => (
  <Tab.Navigator backBehaviour={'none'} initialRouteName={'Splash'} tabBar={() => null}>
    <Tab.Screen component={AppNavigatorWrapper} name={'App'} options={{ gestureEnabled: false }} />
    <Tab.Screen component={screens.Splash} name={'Splash'} />
    <Tab.Screen component={screens.Welcome} name={'Welcome'} />
  </Tab.Navigator>
);

const Navigator = () => (
  <NavigationContainer>
    <InitialNavigator />
  </NavigationContainer>
);

const Loading = () => <View style={styles.loading} />;

export default () => {
  const { persistor, store } = configureStore();

  return (
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </PersistGate>
  );
};
