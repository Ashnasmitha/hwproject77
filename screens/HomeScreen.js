import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView,StatusBar,Platform,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
              <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>STELLAR APP</Text>
                    <Image source={require('../assets/main-icon.png')} style={styles.image}/>
                </View> 
                <TouchableOpacity style={styles.button} onPress={() =>
                    this.props.navigation.navigate("SpaceCrafts")}>
                        <Text style={styles.text}>SPACE CRAFTS</Text>
                        <Image source={require('../assets/space_crafts.png')}
                        style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>
                    this.props.navigation.navigate("StarMap")}>
                        <Text style={styles.text}>STAR MAP</Text>
                        <Image source={require('../assets/star_map.png')}
                        style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>
                        this.props.navigation.navigate("DailyPic")}>
                        <Text style={styles.text}>DAILY PICTURES</Text>
                        <Image source={require('../assets/daily_pictures.png')}
                        style={styles.iconImage}/>
                </TouchableOpacity>
              </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    droidSafeArea:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    button:{
        flex:0.25,
        marginLeft:50,
        marginLeft:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white'
    },
    text:{
        fontSize:35,
        fontWeight:'bold',
        color:'rgb(236,55,171)',
        marginTop:75,
        paddingLeft:30,
        justifyContent:'center',
        alignItems:'center'
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:-30,
        top:-80
    },
    image:{
        height:300,
        width:300,  
        marginTop:20
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover' 
    },
    titleBar:{
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    }
})