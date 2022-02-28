import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity , SafeAreaView , StyleSheet} from 'react-native'
import {TextInput,ScrollView} from 'react-native-gesture-handler'

import Couches from './../../components/common/Couches'
import New from './../../components/common/New'
import Best from './../../components/common/Best'
import { COLORS, icons,SIZES,dummyData, FONTS } from '../../constants'
import { Header } from '../components'

const profile = require('./../../assets/images/profile.png')

export default function  Home({navigation}){
        return(
        <SafeAreaView style={{ flex: 1}}>
            
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor:"#fff",
                
            }}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40,
                    alignItems:"center",
                    paddingHorizontal:20
                    
                }}>
                    <View style={{
                        width:"50%"
                    }}>
                        <Text style={{...FONTS.h2,color:COLORS.black}}>documents</Text>
                    </View>
                    <View style={{flexDirection:'row',width:"50%"}}>
                        <View style={{width:"50%",alignItems:'center', }}>
                            <Image source={icons.cart} style={{width:30,height:30}}/>
                        </View>
                        <View style={{width:"50%",alignItems:'center' }}>
                            <Image source={icons.notification} style={{width:30,height:30}}/>
                        </View>
                        
                    </View>
                </View>
                <View style={{
                        marginTop:SIZES.padding,
                        flexDirection:"row",
                        alignItems:"center",
                        //marginHorizontal:SIZES.padding,
                        //backgroundColor:COLORS.lightGray2,
                        paddingHorizontal:SIZES.radius +10,
                        height:100,
                        width:'100%',
                        //borderRadius:SIZES.radius,
                        //backgroundColor:COLORS.darkBlue,
                        
                        
                    }}>
                        <Image source={icons.search} style={{height:20,width:20, tintColor:COLORS.black}}/>
                        <TextInput
                                placeholder="Search document ..."
                                style={{
                                    flex:1,
                                    marginLeft:SIZES.radius,
                                    ...FONTS.body3
                            }}
                        />
                        <TouchableOpacity>
                            <Image source={icons.filter} style={{height:20,width:20, tintColor:COLORS.black}}/>
                        </TouchableOpacity>
                </View>




                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:18,
                        color:"#4f4a4a"
                    }}>
                        Modern
                    </Text>
                    <View style={{
                        width:5,
                        height:5,
                        borderRadius:5,
                        marginHorizontal:5,
                        backgroundColor:"#4f4a4a"
                    }}></View>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:9,
                        color:"#4f4a4a"
                    }}>
                        Good Quality items
                    </Text>
                </View>


                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Couches
                            src={profile}
                            name="Beautiful Couches"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />
                         <Couches
                            src={profile}
                            name="Autobe best chair"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />
                         <Couches
                            src={profile}
                            name="Beautiful Couches"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />

                    </ScrollView>


                    <View style={{
                        flexDirection:"row",
                        marginTop:30,
                        marginBottom:10,
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#4f4a4a",
                            fontSize:20
                        }}>
                            New Arrivals
                        </Text>
                        <View style={{
                            height:5,
                            width:5,
                            borderRadius:5,
                            backgroundColor:"#4f4a4a",
                            marginHorizontal:4
                        }}>
                        </View>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:10,
                            color:"#4f4a4a"
                        }}>
                            Good Quality items
                        </Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <New src={profile}/>
                        <New src={profile}/>
                        <New src={profile} />
                    </ScrollView>

                    <Text style={{
                        marginTop:20,
                        color:"#4f4a4a",
                        fontSize:18,
                        fontFamily:"Bold"
                    }}>
                        Best Sellers
                    </Text>
            
            
                <View style={{flex:1 ,paddingBottom:100}} >
                        <Best/>
                        <Best/>
                        <Best/>
                        <Best/>
                        <Best/>
                        <View style={{height:50,backgroundColor:COLORS.lightGray2}}></View>
                </View>
                   
            </ScrollView>
        </SafeAreaView>
        );
}
const styles = StyleSheet.create({
    HearderStyle:{
        height:50,
        paddingHorizontal:SIZES.padding,
        marginTop:10,
        alignItems:'center',
        backgroundColor:COLORS.transparent
    },
    leftStyle:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:COLORS.gray2,
        borderRadius:SIZES.radius
    },
    rightStyle:{
        borderRadius:SIZES.radius,
        alignItems:'center',
        justifyContent:'center',
    },
    footer:{
        height:60,
        justifyContent:'flex-end'
    },
    footerTab:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:SIZES.radius,
        paddingBottom:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:COLORS.white
    },
    flatlist:{

    }
})
