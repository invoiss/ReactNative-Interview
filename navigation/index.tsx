import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabFourScreen from '../screens/TabFourScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

export default function Navigation( { colorScheme }: { colorScheme: ColorSchemeName } ) {
	return (
		<NavigationContainer
			theme={ colorScheme === 'dark' ? DarkTheme : DefaultTheme }>
			<BottomTabNavigator />
		</NavigationContainer>
	);
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={ {
				tabBarActiveTintColor: Colors[ colorScheme ].tint,
			} }>
			<BottomTab.Screen
				name="TabOne"
				component={ TabOneScreen }
				options={ {
					title: 'Tab One',
					tabBarIcon: ( { color } ) => <TabBarIcon name="code" color={ color } />,
				} }
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={ TabTwoScreen }
				options={ {
					title: 'Tab Two',
					tabBarIcon: ( { color } ) => <TabBarIcon name="code" color={ color } />,
				} }
			/>
			<BottomTab.Screen
				name="TabThree"
				component={ TabThreeScreen }
				options={ {
					title: 'Tab Three',
					tabBarIcon: ( { color } ) => <TabBarIcon name="code" color={ color } />,
				} }
			/>
			<BottomTab.Screen
				name="TabFour"
				component={ TabFourScreen }
				options={ {
					title: 'Tab Four',
					tabBarIcon: ( { color } ) => <TabBarIcon name="code" color={ color } />,
				} }
			/>
		</BottomTab.Navigator>
	);
}

function TabBarIcon( props: {
	name: React.ComponentProps<typeof FontAwesome>[ 'name' ];
	color: string;
} ) {
	return <FontAwesome size={ 30 } style={ { marginBottom: -3 } } { ...props } />;
}
