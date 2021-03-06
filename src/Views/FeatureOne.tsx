import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import data from '../Components/FeatureOne/data';
import HeaderBar from '../Components/FeatureOne/headerBar';
import HeaderBody from '../Components/FeatureOne/headerBody';

const styles = StyleSheet.create( {
	container: {
		flex: 1
	}
} );

// used to disable top bar scrolling when bar is pressed (jumpy behavior)
let disableScroll = false;

export default function FeatureOne( { navigation } ) {
	const headerNavRef  = React.useRef<ScrollView>( null ),
	      headerBodyRef = React.useRef<ScrollView>( null );
	
	const [ lastNav, setLastNav ] = React.useState( 0 );
	
	return <View style={ styles.container }>
		<ScrollView horizontal ref={ headerNavRef }>
			<HeaderBar onPress={ ( section ) => {
				// scrolls bottom when top is pressed
				disableScroll = true;
				setTimeout( () => disableScroll = false, 1000 );
				headerBodyRef.current &&
				headerBodyRef.current.scrollTo( { y: section.bodyOffset, animated: true } );
			} }/>
		</ScrollView>
		<Divider/>
		<ScrollView
			ref={ headerBodyRef }
			onScroll={ ( e ) => {
				// scrolls top bar to follow bottom
				if ( disableScroll ) return;
				for ( let i = 0; i < data.length; ++i ) {
					if ( data[ i ].bodyOffset > e.nativeEvent.contentOffset.y ) {
						const newNav = Math.min( Math.max( i - 1, 0 ), data.length - 1 );
						if ( newNav !== lastNav ) {
							headerNavRef.current && headerNavRef.current.scrollTo( {
								x:        data[ Math.min( Math.max( i - 1, 0 ), data.length - 1 ) ].navOffset,
								animated: true
							} );
							setLastNav( newNav );
						}
						return;
					}
				}
			} }>
			<HeaderBody/>
		</ScrollView>
	</View>;
}

