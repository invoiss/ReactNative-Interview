import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button, Dialog, Portal, Provider } from 'react-native-paper';
import Video from 'react-native-video';

const styles = StyleSheet.create( {
	container: {
		flex:           1,
		justifyContent: 'center',
		alignItems:     'center'
	}
} );

export default function FeatureTwo( { navigation } ) {
	const [ modal, setModal ]         = React.useState( false ),
	      [ mediaType, setMediaType ] = React.useState( 0 ),
	      [ media, setMedia ]         = React.useState<string>();
	
	return <Provider>
		<View style={ styles.container }>
			<Button mode='contained' onPress={ () => setModal( true ) }>
				Select File
			</Button>
			<Portal>
				<Dialog visible={ modal } onDismiss={ () => setModal( false ) }>
					<Dialog.Title>
						Choose Type of File
					</Dialog.Title>
					<View style={ {
						flexDirection:  'row',
						justifyContent: 'space-evenly',
						marginBottom:   16
					} }>
						<Button mode='contained' onPress={ () => {
							launchImageLibrary( {
								mediaType: 'photo'
							}, ( response ) => {
								if ( response.uri ) {
									setMediaType( 0 );
									setMedia( response.uri );
									setModal( false );
								}
							} );
						} }>
							Image
						</Button>
						<Button mode='contained' onPress={ () => {
							launchImageLibrary( {
								mediaType: 'video'
							}, ( response ) => {
								if ( response.uri ) {
									setMediaType( 1 );
									setMedia( response.uri );
									setModal( false );
								}
							} );
						} }>
							Video
						</Button>
					</View>
				</Dialog>
			</Portal>
			{ /*Display media in a window below button*/ }
			{ media && ( mediaType ?
				<Video
					source={ { uri: media } }
					resizeMode='contain'
					style={ {
						width:  '80%',
						height: '75%'
					} }/> :
				<Image
					source={ { uri: media } }
					resizeMode='contain'
					style={ {
						width:  '80%',
						height: '75%'
					} }/> ) }
		</View>
	</Provider>;
}
