import React from "react"
import { TouchableOpacity,View,Text,Image } from 'react-native'
import {COLORS,SIZES , FONTS , icons} from '../constants'



const VerticalDocsCard = ({containerStyle,item,onPress})=>{
    return (
        <TouchableOpacity style={{
            width:200,
            padding:SIZES.radius,
            alignItems:'center',
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.lightGray2,
            ...containerStyle
        }}
        onPress={onPress}
        >
            <View style={{flexDirection:'row'}}>
                <View style={{ flex:1,flexDirection:'row'}}>
                    <Image source={icons.calories} style={{height:30,width:30}} />
                    <Text style={{color:COLORS.darkGray2,...FONTS.body5}}>
                        {item.calories}calories
                    </Text>
                </View>
                <Image source={icons.love} style={{
                        height:20,
                        width:20,
                        tintColor:item.isFavourite?COLORS.primary:COLORS.gray
                    }}
                />
            </View>
            <View style={{height:150,width:150,alignItems:'center',justifyContent:'center'}} >
                <Image source={item.image} style={{height:'100%',width:'100%'}} />
            </View>
            <View style={{marginTop:-20 ,alignItems:'center'}} >
                <Text style={{...FONTS.h3}} >
                    {item.name}
                </Text>
                <Text style={{...FONTS.body5,color:COLORS.darkGray2,textAlign:'center'}} >
                    {item.description}
                </Text>
                <Text style={{...FONTS.h2,marginTop:SIZES.radius}} >
                    ${item.price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default VerticalDocsCard