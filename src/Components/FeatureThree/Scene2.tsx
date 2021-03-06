import React from 'react';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SharedElement } from 'react-native-shared-element';

export default function Scene2( { ancestor, node, state } ) {
	const windowHeight = Dimensions.get( 'window' ).height;
	
	return <View style={ [ StyleSheet.absoluteFill, {
		backgroundColor: 'white',
		justifyContent:  'flex-start'
	} ] } ref={ ancestor }>
		<Animated.View
			style={ [ {
				transform: [ { scale: state.scale } ]
			}, state.position.getLayout() ] }>
			<View { ...state.panResponder.panHandlers }>
				<SharedElement onNode={ node }>
					<Image style={ {
						resizeMode: 'cover',
						height:     200,
						width:      400,
						opacity:    1
					} } source={ require( '../../Media/house.jpg' ) }/>
				</SharedElement>
			</View>
			<Animated.View style={ {
				opacity: state.progress.interpolate( {
					inputRange:  [ .6, 1 ],
					outputRange: [ 0, 1 ]
				} )
			} }>
				<View style={ { height: windowHeight - 250 } }>
					{ dummyText }
				</View>
			</Animated.View>
		</Animated.View>
	</View>;
}

const dummyText = <ScrollView>
	<Text>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque rhoncus, dapibus nisl id,
		vehicula mauris. In viverra mollis quam, euismod sollicitudin elit efficitur et. Fusce ut
		vestibulum sapien. Suspendisse commodo vel ante nec sodales. Mauris vitae pharetra sapien.
		Pellentesque vel massa consequat, tincidunt ex nec, facilisis mi. Phasellus volutpat ex et
		suscipit viverra. Ut ornare orci feugiat, accumsan neque sit amet, tincidunt est. Nunc
		pellentesque sodales velit, id tempus ipsum suscipit in. Praesent mattis congue porta. Aliquam
		erat volutpat.
	</Text>
	<Text>
		Praesent nec eleifend erat. Proin sed elit et tortor laoreet mattis. Aliquam lacinia ultrices
		nisi a lobortis. Sed posuere sapien in est sollicitudin, quis vehicula tortor mollis. Praesent
		blandit luctus ante at imperdiet. Nunc rutrum libero dictum turpis venenatis congue. Nullam
		vitae fermentum libero. Fusce eleifend ullamcorper neque, nec viverra enim convallis a. In hac
		habitasse platea dictumst.
	</Text>
	<Text>
		Duis volutpat nisl a pellentesque semper. Class aptent taciti sociosqu ad litora torquent per
		conubia nostra, per inceptos himenaeos. Donec consectetur, orci eu sollicitudin laoreet, mi
		libero interdum quam, in porttitor justo erat sed justo. Vivamus mollis ex et lectus
		condimentum gravida. Donec aliquet fermentum sapien et faucibus. In pharetra, arcu ac ornare
		egestas, turpis ipsum vestibulum velit, nec iaculis nibh nisl et enim. Phasellus molestie
		sapien maximus tortor pretium bibendum. Etiam a pellentesque velit. Mauris at erat quis orci
		fermentum molestie nec ut justo. Suspendisse vulputate sollicitudin efficitur. Donec faucibus
		ante sed lectus tempus tincidunt.
	</Text>
	<Text>
		Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
		vitae augue facilisis, sollicitudin mauris eu, fringilla felis. Nullam pharetra sagittis urna.
		Proin vitae risus lacinia, ullamcorper mi id, porta massa. Suspendisse potenti. Nulla quis
		rhoncus sapien, eget posuere mauris. Nulla facilisi. Nunc quis lectus efficitur, iaculis nunc
		non, blandit risus. Nullam non finibus justo. Nullam eu lacus purus. Donec imperdiet orci eu
		erat maximus feugiat. Ut viverra enim vitae turpis faucibus facilisis. Integer pulvinar, urna
		in cursus mollis, metus lacus pellentesque justo, a ultrices felis lorem sit amet turpis.
		Aenean sit amet tincidunt ligula. Quisque in bibendum tortor.
	</Text>
	<Text>
		Praesent porta, lorem et dapibus dapibus, risus mi cursus dui, ac scelerisque est nisl ac
		ligula. Suspendisse bibendum lobortis orci eu finibus. Sed pretium mauris accumsan, ultrices
		neque eu, ultricies risus. Sed blandit felis eu felis eleifend aliquam. Aliquam eleifend risus
		consectetur aliquam hendrerit. Aenean vulputate urna magna, eu fermentum nibh tristique non.
		Integer nec vehicula orci, ut pretium metus. Duis imperdiet tellus ac tellus tincidunt
		suscipit. Quisque auctor, ex non sodales aliquet, ex purus molestie nibh, quis pellentesque
		dui ligula sit amet arcu. Cras laoreet, elit ac tristique fringilla, ligula neque vestibulum
		nulla, nec auctor neque dui vitae nulla.
	</Text>
</ScrollView>;
