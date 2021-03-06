import React from 'react';
import { Animated, PanResponder, PanResponderInstance, StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { nodeFromRef, SharedElementNode } from 'react-native-shared-element';

import Scene1 from '../Components/FeatureThree/Scene1';
import Scene2 from '../Components/FeatureThree/Scene2';
import Transition from '../Components/FeatureThree/Transition';

const styles = StyleSheet.create( {
	container: {
		flex:           1,
		justifyContent: 'center',
		alignItems:     'center'
	}
} );

export default class FeatureThree extends React.Component {
	state: {
		progress: Animated.Value,
		isScene2Visible: boolean,
		isInProgress: boolean,
		position: Animated.ValueXY,
		scale: Animated.Value,
		panResponder: PanResponderInstance,
		scene1Ancestor: SharedElementNode | null,
		scene1Node: SharedElementNode | null,
		scene2Ancestor: SharedElementNode | null,
		scene2Node: SharedElementNode | null,
	} = {
		progress:        new Animated.Value( 0 ),
		isScene2Visible: false,
		isInProgress:    false,
		position:        new Animated.ValueXY( { x: 0, y: 0 } ),
		scale:           new Animated.Value( 1 ),
		panResponder:    null as any,
		scene1Ancestor:  null,
		scene1Node:      null,
		scene2Ancestor:  null,
		scene2Node:      null
	};
	
	constructor( props ) {
		super( props );
		
		this.state.panResponder = PanResponder.create( {
			onStartShouldSetPanResponder: () => true,
			onPanResponderStart:          () => {
				Animated.timing( this.state.scale, {
					toValue:         .75,
					duration:        250,
					useNativeDriver: false
				} ).start();
			},
			onPanResponderMove:           ( event, gesture ) => {
				this.state.position.setValue( { x: gesture.dx, y: gesture.dy } );
			},
			onPanResponderEnd:            () => {
				this.setState( { isInProgress: true } );
				Animated.timing( this.state.progress, {
					toValue:         0,
					duration:        250,
					useNativeDriver: true
				} ).start( () => {
					this.state.position.setValue( { x: 0, y: 0 } );
					this.state.scale.setValue( 1 );
					this.setState( {
						isScene2Visible: false,
						isInProgress:    false
					} );
				} );
			}
		} );
	}
	
	onSetScene1Ref = ref => {
		this.setState( { scene1Ancestor: nodeFromRef( ref ) } );
	};
	
	onSetScene2Ref = ref => {
		this.setState( { scene2Ancestor: nodeFromRef( ref ) } );
	};
	
	render() {
		const { state } = this;
		
		return <Provider>
			<View style={ styles.container }>
				<Scene1
					ancestor={ this.onSetScene1Ref }
					node={ node => this.setState( { scene1Node: node } ) }
					onPress={ () => {
						this.setState( { isScene2Visible: true, isInProgress: true } );
						Animated.timing( state.progress, {
							toValue:         1,
							duration:        250,
							useNativeDriver: true
						} ).start( () => {
							this.setState( { isInProgress: false } );
						} );
					} }/>
				
				{ state.isScene2Visible ? <Scene2
						ancestor={ this.onSetScene2Ref }
						node={ node => this.setState( { scene2Node: node } ) }
						state={ state }/>
					: undefined }
				
				{ state.isInProgress ? <Transition state={ state }/> : undefined }
			</View>
		</Provider>;
	}
}
