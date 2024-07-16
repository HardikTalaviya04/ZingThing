//import liraries
import React from "react";
import { Image, Platform, LogBox, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "./AuthStack/SplashScreen";
import { SCREENS } from "../common/Utils/screenName";
import NewsFeed from "./AppStack/NewsFeed";
import DashBoard from "./AppStack/DashBoard";
import MyJobs from "./AppStack/MyJobs";
import JobDetailsScreen from "./AppStack/JobDetailsScreen";
import FindJobs from "./AppStack/FindJobs";

LogBox.ignoreAllLogs();

// create a component
const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'FindJobs'}
        screenOptions={{
          headerShown: false,
        }}
      >
      <Stack.Screen
        name={'FindJobs'}
        component={FindJobs}
        options={{ headerShown: false }}
      />
        <Stack.Screen
          name={SCREENS.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.DashBoard}
          component={DashBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.NewsFeed}
          component={NewsFeed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.MyJobs}
          component={MyJobs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.JobDetailsScreen}
          component={JobDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
