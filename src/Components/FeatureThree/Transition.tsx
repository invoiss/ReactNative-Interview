import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedElementTransition } from 'react-native-shared-element';

export default function Transition(
	{
		scene1Node,
		scene1Ancestor,
		scene2Node,
		scene2Ancestor,
		progress
	} ) {
	return <View style={ StyleSheet.absoluteFill } pointerEvents='none'>
		<SharedElementTransition
			start={ {
				node:     scene1Node,
				ancestor: scene1Ancestor
			} }
			end={ {
				node:     scene2Node,
				ancestor: scene2Ancestor
			} }
			position={ progress }
			animation='move'
			resize='auto'
			align='auto'/>
	</View>;
}
