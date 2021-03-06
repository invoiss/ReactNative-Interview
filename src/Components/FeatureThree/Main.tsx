import React from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { SharedElementNode } from 'react-native-shared-element';

import Scene1 from './Scene1';
import Scene2 from './Scene2';
import Transition from './Transition';

const styles = StyleSheet.create( {
	container: {
		flex:           1,
		justifyContent: 'center',
		alignItems:     'center'
	}
} );

export default function FeatureThreeMain(
	{
		onSetScene1Ref,
		scene1Ancestor,
		onSetScene2Ref,
		scene2Ancestor
	} ) {
	const [ scene2Visible, setScene2Visible ] = React.useState( false ),
	      [ isInProgress, setInProgress ]     = React.useState( false );
	
	const [ scene1Node, setScene1Node ] = React.useState<SharedElementNode | null>(),
	      [ scene2Node, setScene2Node ] = React.useState<SharedElementNode | null>();
	
	// animated values
	const progress = React.useRef( new Animated.Value( 0 ) ).current,
	      position = React.useRef( new Animated.ValueXY( { x: 0, y: 0 } ) ).current,
	      scale    = React.useRef( new Animated.Value( 1 ) ).current;
	
	const panResponder = React.useRef( PanResponder.create( {
		onStartShouldSetPanResponder: () => true,
		onPanResponderStart:          () => {
			Animated.timing( scale, {
				toValue:         .75,
				duration:        250,
				useNativeDriver: false
			} ).start();
		},
		onPanResponderMove:           ( event, gesture ) => {
			position.setValue( { x: gesture.dx, y: gesture.dy } );
		},
		onPanResponderEnd:            () => {
			setInProgress( true );
			Animated.timing( progress, {
				toValue:         0,
				duration:        250,
				useNativeDriver: true
			} ).start( () => {
				// reset to initial values
				position.setValue( { x: 0, y: 0 } );
				scale.setValue( 1 );
				setScene2Visible( false );
				setInProgress( false );
			} );
		}
	} ) ).current;
	
	return <Provider>
		<View style={ styles.container }>
			<Scene1
				ancestor={ onSetScene1Ref }
				node={ node => setScene1Node( node ) }
				onPress={ () => {
					// start scene transition
					setScene2Visible( true );
					setInProgress( true );
					Animated.timing( progress, {
						toValue:         1,
						duration:        250,
						useNativeDriver: true
					} ).start( () => {
						// remove transition
						setInProgress( false );
					} );
				} }/>
			
			{/*Shows when visible and modified when transitioning*/ }
			{ scene2Visible ? <Scene2
					ancestor={ onSetScene2Ref }
					node={ node => setScene2Node( node ) }
					progress={ progress }
					position={ position }
					scale={ scale }
					panResponder={ panResponder }/>
				: undefined }
			
			{ /*Transition element that only shows when scene transition in progress*/ }
			{ isInProgress ? <Transition
				scene1Node={ scene1Node }
				scene1Ancestor={ scene1Ancestor }
				scene2Node={ scene2Node }
				scene2Ancestor={ scene2Ancestor }
				progress={ progress }/> : undefined }
		</View>
	</Provider>;
}
