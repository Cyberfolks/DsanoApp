import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions,
    Text,
    Alert,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    NetInfo
} from 'react-native';
const {width, height} = Dimensions.get('window');
//import { CheckBox } from 'react-native-elements'
import CheckBox from 'react-native-check-box'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userEmail: '',
            userMobile: '',
            checked:true
        };

        this.submit = this.submit.bind(this);

    }

    static navigationOptions = {
        header: null
    };


    componentDidMount() {}

    submit()
    {
        const {navigate} = this.props.navigation;
        navigate("Menu");

    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/login/background_img.png')}>
                <View
                    style={{
                        position:'absolute',
                        top:0,
                        height:80,
                        width:'100%',
                        backgroundColor:'#DEF2FF',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>

                    <Text style={{fontWeight:'700',color:'#015285',alignSelf:'center'}}>
                        LOG IN
                    </Text>
                </View>
                <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/SignUp/username.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        underlineColorAndroid='transparent'
                        onChangeText=
                            {(text) => this.setState({userPassword: text})}
                        ref={(input) => {
                        }}
                        placeholder="Username"
                        placeholderTextColor='#015285'
                        />
                </ImageBackground>
                <ImageBackground   style={styles.inputContainer3} source={require('../Images/SignUp/profile_background.png')}>
                    <Image source={require('../Images/login/password.png')} resizeMode="center" style={{width: 20, height: 20,marginTop:20,marginLeft:20}}/>
                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        underlineColorAndroid='transparent'
                        onChangeText=
                            {(text) => this.setState({userPassword: text})}
                        ref={(input) => {
                        }}
                        placeholder="Password"
                        placeholderTextColor='#015285'
                        secureTextEntry/>
                </ImageBackground>


                <CheckBox
                    style={{padding:5,marginLeft:width/1.8,marginTop:10}}
                    onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    rightText={"Remember Me"}
                />
                <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15}}>
                    <TouchableOpacity onPress={this.submit}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>

                        <Text
                            style={{marginTop:30,alignSelf:'center',color:'#015285'}}
                            onPress={this.forgotPasswordDialog}>
                            Forgot your Password ?
                        </Text>


                </View>
                <View style={{
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 40,
                    left:width/3
                }}>
                    <Text
                        style={{color:'#015285',alignSelf:'center'}}
                        onPress={this.forgotPasswordDialog}>
                        Don't have an Account ?

                    </Text>

                </View>
                <View style={{
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 20,
                    left:width/2
                }}>
                    <Text
                        style={{color:'#00CA9D',alignSelf:'center'}}
                        onPress={this.forgotPasswordDialog}>
                       SINGUP

                    </Text>

                </View>
            </ImageBackground>

        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#F5FCFF'
        },

        inputContainer: {
            marginLeft:20,
            marginRight:20,
           justifyContent:'center',
            backgroundColor: '#F5FCFF'
        },
        inputContainer3: {
            marginLeft:20,
            marginTop:20,
            flexDirection:'row',
            marginRight:20,
            justifyContent:'flex-start',
            backgroundColor: '#F5FCFF'
        },
        input: {
            height: 40,
            width:'100%',
            margin: 10,
            padding: 10,
            color: '#000000'
        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            marginTop:30,
            backgroundColor: '#00CA9D',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff'
        },
        buttonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF'
        }
    });