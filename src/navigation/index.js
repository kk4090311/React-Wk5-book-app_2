import React,{useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Input, HStack, Text ,Box ,Pressable} from 'native-base';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import MyTheme from '../Theme';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}







const CustomDrawerContent = (props) => {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Box safeArea h='108px' mt="40px" pl='16px' mb='32px'>
        <Image
        source={require("../images/img_avatar.png")}
        alt='albumImage'
      />
      <Text medium fontSize='24' pt='16px'>May</Text>
      </Box>
      <Divider my="2"/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack1"
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary100,
        drawerActiveTintColor: colors.primary700,
        drawerInactiveTintColor: colors.light500,
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack1"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
        <Drawer.Screen
        name="account"
        component={MyTabs}
        options={{
          headerShown: false,
          drawerLabel: "account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light500,
        tabBarActiveTintColor: colors.primary700,
        tabBarIconStyle:{marginTop:8},
        tabBarLabelStyle:{marginBottom:8 ,fontSize:12},
        tabBarStyle:{height:56},
        tabBarItemStyle:{height:56},
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 12
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />
       <Tab.Screen
        name="book-open"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "My Books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 12
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}





const HomeStack = ({ navigation }) => {

  const [toggle,settoggle]= useState(true);
  const togglefun=() =>{
    settoggle(!toggle);
  }


  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="c1"
        component={AlbumScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={24}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        
          headerRight: () => (
            <Pressable onPress={()=>togglefun()}>
            {toggle? <MaterialCommunityIcons
            name={'bookmark'}
            size={24}
            color="#6200EE"/>
            :
            <MaterialCommunityIcons
            name={'bookmark-outline'}
            size={24}
            color="#000000"/>
            }

             
          </Pressable>
            
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;