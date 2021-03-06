import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './data';

const styles = StyleSheet.create( {
	headerBody: {
		fontSize:        24,
		padding:         8,
		backgroundColor: '#fff'
	},
	item:       {
		padding:  8,
		fontSize: 20
	}
} );

export default function HeaderBody() {
	return <>
		{ data.map( ( section, i ) =>
			<View
				key={ i }
				onLayout={ ( e ) => {
					section.bodyOffset = e.nativeEvent.layout.y;
				} }>
				<Text style={ styles.headerBody }>
					{ section.title }
				</Text>
				{ section.data.map( ( item, i ) =>
					<Text key={ i } style={ styles.item }>{ item }</Text> ) }
			</View> ) }
	</>;
}
