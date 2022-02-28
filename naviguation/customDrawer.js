import React from "react";
import {
    View,
    ScrollView,
    Text, 
    Image,
    TouchableOpacity 
} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { MainLayout } from "../screens";
import { COLORS , SIZES, FONTS, constants, icons,dummyData} from  '../constants'
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../store/tab/tabAction";


const drawer  = createDrawerNavigator()

const CustomDrawerItem = ({label,icon,isFocused,onPress})=>{
    return (
        <TouchableOpacity 
            style={{
                flexDirection:'row',
                height:50,
                marginBottom:SIZES.base,
                alignItems:'center',
                paddingLeft:SIZES.radius,
                borderRadius:SIZES.base,
                backgroundColor:isFocused?COLORS.transparentBlack1:null
            }}
            onPress={onPress}
        >
            <Image source={icon} style={{width:20,height:20, tintColor:COLORS.white}}/>
            <Text style={{marginLeft:15,color:COLORS.white, ...FONTS.h3}}> 
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation,selectedTab,setSelectedTab})=>{

    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex:1}}>
            <ScrollView style={{flex:1,paddingHorizontal:SIZES.radius}}>
                
                {/* profile section */}
                <TouchableOpacity style={{flexDirection:'row',marginTop:SIZES.radius,alignItems:'center',}}>
                    <Image source={dummyData.myProfile?.profile_image}
                    style={{
                        height:50,
                        width:50,
                        borderRadius:SIZES.radius
                    }}/>
                    <View style={{ marginLeft:SIZES.radius}}>
                        <Text style={{ color:COLORS.white , ...FONTS.h3}}> {dummyData.myProfile?.name} </Text>
                        <Text style={{ color:COLORS.white , ...FONTS.body4}}>Your Profile</Text>
                    </View>
                </TouchableOpacity>

                {/* drawer item */}

                <View style={{flex:1,marginTop:SIZES.padding}}>
                    <CustomDrawerItem 
                        label={constants.screens.home} icon={icons.home} 
                        isFocused={selectedTab == constants.screens.home}
                        onPress={
                            ()=>{setSelectedTab(constants.screens.home),navigation.navigate("MainLayout")}
                        }
                    />
                    <CustomDrawerItem label={constants.screens.my_fax} icon={icons.wallet} 
                        isFocused={selectedTab == constants.screens.my_fax}
                        onPress={
                            ()=>{setSelectedTab(constants.screens.my_fax),navigation.navigate("MainLayout")}
                        }
                    />
                    <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} 
                        isFocused={selectedTab == constants.screens.notification}
                        onPress={
                            ()=>{setSelectedTab(constants.screens.notification),navigation.navigate("MainLayout")}
                        }
                    />
                    <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite} 
                        isFocused={selectedTab == constants.screens.favourite}
                        onPress={
                            ()=>{setSelectedTab(constants.screens.favourite),navigation.navigate("MainLayout")}
                        }
                    />

                    {/* divider */}
                    <View style={{ 
                        height:1,
                        marginVertical:SIZES.radius,
                        marginLeft:SIZES.radius,
                        backgroundColor:COLORS.lightGray1
                    }}>
                    </View>
                    <CustomDrawerItem label="settings" icon={icons.setting}
                        isFocused={selectedTab == "settings"}
                        onPress={
                            ()=>{setSelectedTab("settings"),navigation.navigate("MainLayout")}
                        }
                    />
                    <CustomDrawerItem label="invite friend" icon={icons.profile}
                        isFocused={selectedTab == "invite friend"}
                        onPress={
                            ()=>{setSelectedTab("invite friend"),navigation.navigate("MainLayout")}
                        }
                    />
                    <CustomDrawerItem label="help center" icon={icons.help}
                        isFocused={selectedTab == "help center"}
                        onPress={
                            ()=>{setSelectedTab("help center"),navigation.navigate("MainLayout")}
                        }
                    />
                </View>
                <View style={{ marginBottom:SIZES.padding}}>
                    <CustomDrawerItem label="logout" icon={icons.logout}/>
                </View>
            </ScrollView>
        </DrawerContentScrollView>
    )
}

const customDrawer = ({selectedTab,setSelectedTab}) => {

    const [progress,setProgress] = React.useState(new Animated.Value(0))
    const scale = Animated.interpolateNode(progress,{inputRange:[0,1],outputRange:[1,0.9]})
    const borderRadius = Animated.interpolateNode(progress,{inputRange:[0,1],outputRange:[0,26]})
    const animatedStyle = {borderRadius , transform:[{scale}]}

    return (
        <View style={{ flex:1 , backgroundColor:COLORS.primary}}>
            <drawer.Navigator 
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{ flex:1,width:'65%', paddingRight:20 , backgroundColor:'transparent'}}
                sceneContainerStyle={{ backgroundColor:'transparent'}}
                initialRouteName="MainLayout"
                drawerContent={props =>{ 
                                        setTimeout(()=>{setProgress(props.progress)} , 0)
                                        return <CustomDrawerContent 
                                                    navigation={props.navigation}
                                                    selectedTab={selectedTab}
                                                    setSelectedTab={setSelectedTab}
                                                />
                                        } 
                                }
            >
                <drawer.Screen name="MainLayout" >
                    { props => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
                </drawer.Screen>
            </drawer.Navigator>
        </View>
    )
}

function mapStateToProps(state){
    return{
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch){
    return{
        setSelectedTab:(selectedTab)=>{return dispatch(setSelectedTab(selectedTab))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(customDrawer)