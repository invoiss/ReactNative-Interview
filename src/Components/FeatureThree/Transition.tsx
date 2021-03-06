import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedElementTransition } from 'react-native-shared-element';

export default function Transition( { state } ) {
	return <View style={ StyleSheet.absoluteFill } pointerEvents='none'>
		<SharedElementTransition
			start={ {
				node:     state.scene1Node,
				ancestor: state.scene1Ancestor
			} }
			end={ {
				node:     state.scene2Node,
				ancestor: state.scene2Ancestor
			} }
			position={ state.progress }
			animation='move'
			resize='auto'
			align='auto'/>
	</View>;
}
