[<h1 align="center"><img width="500" src="/assets/images/invoiss-logo.png"></h1>](https://invoiss.com)

<h1 align='center'>Welcome to Invoiss React-Native Technical Interview</h1>

## This project is running with expo so setting it up is extremely simple  

### Make sure your environment is set up correctly according to the [React Native Docs](https://reactnative.dev/docs/environment-setup) and [Expo Docs](https://docs.expo.dev/get-started/installation/) before you attend the interview question  

<br/>

- ## Installation

#### Fork this repo, open the project and cd in the project folder and

```bash
npm/yarn install 
```

#### Also run expo install

```bash
expo install 
```

#### now run

```bash
expo start
```

- ### head over to [localhost:19000](http://localhost:19000/) and click on run simulator

- ### By now you should have an iOS simulator running

<h3 align="center">You should be able to see this App Screen once your app is loaded on iOS Simulator.

</br></br>

<img src="/assets/images/app-screen.png" width="200">
</h3>

## Your Task : As part of your interview, you must complete all 3 Tasks below and deliver it, before the due date

# Task A: Horizontal Scrolling Effect

- Create this feature below within the given boiler plate app.
  - _Note:_ if the gif below doesn't load correctly, try this link for the full demo video : [Demo Video](http://www.invoiss.com/assets/pages/invoiss-main-page/assets/video/app-example.mp4)

 <p align="center"><img src="/assets/images/app-example.gif" width="200"></p>

**Create this feature in the "Tab 1" Screen of the boilerplate App.**

- Your task is to a create a custom horizontally scrolling category section so that as the user scrolls down the page, then the categories on the top also scroll horizontally and shift over. Use `FlatList`. User should also be able to click on any of these categories and the page should scroll down to that section.

- You may use the `Reanimated API V2`.

# Task B: Document Uploading

- Create this feature below within the given boiler plate app.
  - _Note:_ if the gif below doesn't load correctly, try this link for the full demo video : [Demo Video](https://www.invoiss.com/assets/pages/invoiss-main-page/assets/video/app-example2.mp4)

<p align="center"><img src="/assets/images/app-example2.gif" width="200"></p>

**Create this feature in the "Tab 2" Screen of the boilerplate App.**

- Add a button that pops a modal which asks the user what kind of document they would like to upload, they can choose a picture, or video from their gallery, and upload it to the empty screen.

</br>

# Task C: Global BottomSheetModal Provider

**Call the provider in the "Tab 3" Screen of the boilerplate App.**

- Providers are a good way to eliminate prop drilling and here we have an idea of a BottomSheet provider. It will allow us to call the BottomSheet without having to create refs in each file and instead call the provider and use the bottomSheet anywhere.
- Refer to this [Bottom Sheet Modal Library](https://gorhom.github.io/react-native-bottom-sheet/modal/)

- Once you are done creating the provider an example way to use the provider would be like the following:
  
```JSX
import React from 'react';
import { useBottomSheet } from './providers/bottomSheetProvider.tsx';

export default function App() {
	const bottomSheet = useBottomSheet();

	return (
		<Button
			onPress={ () => bottomSheet( {
				render( modal ) {
					return <BottomSheetContent />;
				},
				snapPoints: [ '50%', '70%' ]
			} ) }>
			Show Modal
		</Button>
	)
}
```

**Put the provider it self in the /providers/bottomSheetProvider.tsx file**

<p align="center">-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>
- ### Please keep in mind that, we love to encourage our developers to seek google and the online dev community for answers and help. But these tasks above are what we expect from a developer to do on their own when hired with us for this react native role.

<div align="center">
<h2>Once you are done, commit your changes, push it to your own forked repo, and create a pull request to this repo and we will take it from there! </h2>
Thanks for applying to Invoiss!
</div>
