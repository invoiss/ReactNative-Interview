import React from 'react';
import { StyleSheet, Text } from 'react-native';

import data from './data';

const styles = StyleSheet.create( {
	headerNav: {
		fontSize: 18,
		padding:  8
	}
} );

export default function HeaderBar( { onPress }: { onPress: ( section ) => void } ) {
	return <>
		{ data.map( ( section, i ) => <Text
			key={ i }
			style={ styles.headerNav }
			onLayout={ ( e ) => {
				section.navOffset = e.nativeEvent.layout.x;
			} }
			onPress={ () => onPress( section ) }>
			{ section.title }
		</Text> ) }
	</>;
}
