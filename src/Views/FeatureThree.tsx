import React from 'react';
import { nodeFromRef, SharedElementNode } from 'react-native-shared-element';

import FeatureThreeMain from '../Components/FeatureThree/Main';

export default class FeatureThree extends React.Component {
	state: {
		scene1Ancestor: SharedElementNode | null,
		scene2Ancestor: SharedElementNode | null,
	} = {
		scene1Ancestor: null,
		scene2Ancestor: null
	};
	
	onSetScene1Ref = ref => {
		this.setState( { scene1Ancestor: nodeFromRef( ref ) } );
	};
	
	onSetScene2Ref = ref => {
		this.setState( { scene2Ancestor: nodeFromRef( ref ) } );
	};
	
	render() {
		const { state } = this;
		
		return <FeatureThreeMain
			onSetScene1Ref={ this.onSetScene1Ref }
			onSetScene2Ref={ this.onSetScene2Ref }
			scene1Ancestor={ state.scene1Ancestor }
			scene2Ancestor={ state.scene2Ancestor }/>;
	}
}
