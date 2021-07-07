import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { SharedElement } from 'react-native-shared-element';

export default function Scene1( { ancestor, node, onPress } ) {
	return <TouchableWithoutFeedback onPress={ onPress }>
		<View ref={ ancestor }>
			<SharedElement onNode={ node }>
				<Image style={ {
					resizeMode: 'cover',
					width:      200,
					height:     200
				} } source={ require( '../../Media/house.jpg' ) }/>
			</SharedElement>
		</View>
	</TouchableWithoutFeedback>;
}
