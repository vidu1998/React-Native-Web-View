import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function App() {
return (
<WebView
style={styles.container}
source={{ uri: 'https://www.skrill.com/en/' }}

/>



);
}

const styles = StyleSheet.create({
container: {
flex: 1,
//marginTop: Constants.statusBarHeight,
},
});