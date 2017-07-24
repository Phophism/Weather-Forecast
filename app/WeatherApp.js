import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class WeatherApp extends Component {
 
    state = {
        name1: '(City)',
        day1: 'day',
        weather1: 'n/a',
        icon1: 'openweathermap.org/img/w/10d.png',
        temp1:'tmp',

        name2: '(City)',
        day2: 'day',
        weather2: 'n/a',
        icon2: 'openweathermap.org/img/w/10d.png',
        temp2:'tmp',

        name3: '(City)',
        day3: 'day',
        weather3: 'n/a',
        icon3: 'openweathermap.org/img/w/10d.png',
        temp3:'tmp',

        name4: '(City)',
        day4: 'day',
        weather4: 'n/a',
        icon4: 'openweathermap.org/img/w/10d.png',
        temp4:'tmp',

        name5: '(City)',
        day5: 'day',
        weather5: 'n/a',
        icon5: 'openweathermap.org/img/w/10d.png',
        temp5:'tmp',
    };
    _log() {
        console.log(this.state);
    }
    handleName(event) {

        var name = event.nativeEvent.text;
        var appid = 'e97a1633f5f02b1d405e616a6d3a3b8f';
        var cnt = 5;

        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&units=metric' +'&appid=' + appid )
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({ 
                    name1: name,
                    day1 : responseJSON.list[0].dt_txt,
                    weather1: responseJSON.list[0].weather[0].main,
                    temp1: responseJSON.list[0].main.temp,
                    icon1: 'openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',

                    name2: name,
                    day2 : responseJSON.list[8].dt_txt,
                    weather2: responseJSON.list[8].weather[0].main,
                    temp2: responseJSON.list[8].main.temp ,
                    icon2: 'openweathermap.org/img/w/' + responseJSON.list[8].weather[0].icon + '.png',

                    name3: name,
                    day3 : responseJSON.list[16].dt_txt,
                    weather3: responseJSON.list[16].weather[0].main,
                    temp3: responseJSON.list[16].main.temp ,
                    icon3: 'openweathermap.org/img/w/' + responseJSON.list[16].weather[0].icon + '.png',

                    name4: name,
                    day4 : responseJSON.list[24].dt_txt,
                    weather4: responseJSON.list[24].weather[0].main,
                    temp4: responseJSON.list[24].main.temp ,
                    icon4: 'openweathermap.org/img/w/' + responseJSON.list[24].weather[0].icon + '.png',

                    name5: name,
                    day5 : responseJSON.list[32].dt_txt,
                    weather5: responseJSON.list[32].weather[0].main,
                    temp5: responseJSON.list[32].main.temp ,
                    icon5: 'openweathermap.org/img/w/' + responseJSON.list[32].weather[0].icon + '.png'
                    
                });
                console.loge(this.state.weather);
            })
            .catch((error) => {
                console.warn(error);
            });
        this.setState({
            name: name,
        },
        );
    }


    render() {
        return (
            <View style={styles.container}> 

                <Text style={styles.welcomFontSize} >Weather Forcast</Text>      
                          
                <TextInput style={styles.textInput} onSubmitEditing={ (event) => this.handleName(event)}/>    

                <Text style={styles.cityName}> {this.state.name1} </Text>             
    
                {/* <TouchableOpacity onPress={(event) => this.onPressIn(event)} onPressOut={(event)=>this.onPressOut(event)}>
                    <View style={styles.button}>
                        <Text >
                            {this.state.pressing ? '...' : 'Submit'}
                        </Text>
                    </View>            
                </TouchableOpacity> */}
            
                <View style={styles.weatherSet}>
                    <View style={styles.weatherBox}>
                        <Text style={styles.textDescription}>{this.state.day1}</Text>
                         <Image
                            style={styles.icon}
                            source={{ uri: 'http://' + this.state.icon1 }}
                        />
                        <Text style={styles.textDescription} >{this.state.name1}</Text> 
                        <Text style = {styles.title}>Weather</Text>
                        <Text style={styles.textDescription}>{this.state.weather1}</Text>
                        <Text style = {styles.title}>Temp</Text>
                        <Text style={styles.textDescription}>{this.state.temp1} C</Text>
                    </View >

                    <View style={styles.weatherBox}>
                    <Text style={styles.textDescription}>{this.state.day2}</Text>
                         <Image
                            style={styles.icon}
                            source={{ uri: 'http://' + this.state.icon2 }}
                        />
                        <Text style={styles.textDescription} >{this.state.name2}</Text>
                        <Text style = {styles.title}>Weather</Text>
                        <Text style={styles.textDescription}>{this.state.weather2}</Text>
                        <Text style = {styles.title}>Temp</Text>
                        <Text style={styles.textDescription}>{this.state.temp2} C</Text>
                    </View >
                    
                     <View style={styles.weatherBox}>
                     <Text style={styles.textDescription}>{this.state.day3}</Text>
                         <Image
                            style={styles.icon}
                            source={{ uri: 'http://' + this.state.icon3 }}
                        />
                        <Text style={styles.textDescription} >{this.state.name3}</Text>    
                        <Text style = {styles.title}>Weather</Text>
                        <Text style={styles.textDescription}>{this.state.weather3}</Text>
                        <Text style = {styles.title}>Temp</Text>
                        <Text style={styles.textDescription}>{this.state.temp3} C</Text>
                    </View >
                    
                    <View style={styles.weatherBox}>
                     <Text style={styles.textDescription}>{this.state.day4}</Text>
                     <Image
                            style={styles.icon}
                            source={{ uri: 'http://' + this.state.icon4 }}
                        />
                        <Text style={styles.textDescription} >{this.state.name4}</Text>
                        <Text style = {styles.title}>Weather</Text>
                        <Text style={styles.textDescription}>{this.state.weather4}</Text>
                        <Text style = {styles.title}>Temp</Text>
                        <Text style={styles.textDescription}>{this.state.temp4} C</Text>
                    </View >

                    <View style={styles.weatherBox}> 
                     <Text style={styles.textDescription}>{this.state.day5}</Text>
                         <Image
                            style={styles.icon}
                            source={{ uri: 'http://' + this.state.icon5 }}
                        />
                        <Text style={styles.textDescription} >{this.state.name5}</Text>
                        <Text style = {styles.title}>Weather</Text>
                        <Text style={styles.textDescription}>{this.state.weather5}</Text>
                        <Text style = {styles.title}>Temp</Text>
                        <Text style={styles.textDescription}>{this.state.temp5} C</Text>
                    </View >
                </View>
            </View>
        );
  }
  
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        alignItems : 'center',
        backgroundColor : 'white'
    },
    welcomFontSize:{
        fontSize:20,
        textAlign: 'center',
        marginTop :30,
        marginBottom : 10
    },
    textInput : {
        borderRadius : 15,
        height: 40,
        width : 160,
        borderWidth : 1
    },
    icon : {
        width: 50, 
        height: 50,
        alignItems : 'center'
    },
    weatherSet : {
        marginTop:25 ,
        flexDirection : 'row'
    },
    weatherBox : {
        alignItems : 'center',
        borderWidth : 1,
        height: 300,
        width : 70 ,
        margin : 1
    },
    button : {
        backgroundColor : '#E91E63',
        borderRadius : 50,
        borderColor : '#ccc',
        height: 65,
        width : 65 ,
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 8,
        zIndex : 10,
        marginTop : 15
    },
    textDescription : {
        alignItems : 'center',
        fontSize : 12,
        marginTop : 15
  
    }
    ,
    cityName:{
        fontSize : 25
    } ,

    title : {
        marginTop: 15,
        fontSize : 15,

    }
  });