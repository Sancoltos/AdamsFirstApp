import React from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
View,
Image,
} from 'react-native';
function App() {
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}> 
        {/* Bird*/} {/*this is where my bird icon is shown and renders in the header above the title*/}
        <Image
          source={require('./assets/icon.png')} //file path
          style={{ width: 80, height: 80 }} //sizing for the icon
        />
<Text style={styles.title}>Welcome to Adams Test App</Text>{/* all the writing for the app */} 
<Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
</View>
<View style={styles.content}>
<Text style={styles.greeting}>Hello, I'm Adam Walters!</Text>
<Text style={styles.info}>Student ID: N01701019</Text>
<Text style={styles.info}>Program: Computer Programming</Text>
<View style={styles.goals}>
<Text style={styles.sectionTitle}>My Course Goals:</Text>
<Text style={styles.goal}>• Learn React Native fundamentals</Text>
<Text style={styles.goal}>• Build cross-platform mobile apps</Text>
<Text style={styles.goal}>• Master state management with Redux</Text>
<Text style={styles.goal}>• Make fun apps for me and my friends</Text>
<Text style={styles.goal}>• Be true to myself to learn more</Text>
</View>
</View>
</SafeAreaView>
);
}
const styles = StyleSheet.create({ //these are the styles for the containers and text I changed the color on some too add flair
container: {
flex: 1,
backgroundColor: '#de88e8ff',
},
header: {
backgroundColor: '#3498db',
padding: 20,
alignItems: 'center',
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: 'white',
marginBottom: 5,
},
subtitle: {
fontSize: 16,
color: 'white',
fontStyle: 'italic',
},
content: {
flex: 1,
padding: 20,
},
greeting: {
fontSize: 22,
fontWeight: 'bold',
color: '#2c3e50',
textAlign: 'center',
marginBottom: 10,
},
info: {
fontSize: 16,
color: '#000000ff',
textAlign: 'center',
marginBottom: 5,
},
goals: {
marginTop: 30,
padding: 15,
backgroundColor: 'white',
borderRadius: 10,
elevation: 2,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 2,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#2c3e50',
marginBottom: 10,
},
goal: {
fontSize: 16,
color: '#34495e',
marginBottom: 5,
lineHeight: 22,
},
});
export default App;