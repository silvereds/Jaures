import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated ,{useSharedValue,useAnimatedStyle,withTiming} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { COLORS, constants, dummyData, SIZES,icons, FONTS } from '../constants';
import { setSelectedTab } from '../store/tab/tabAction';
import { Header } from '../components';

import {Home , DocList , CartTab , Favourite ,Notification} from './'
//import Home2 from './Home2';

const TabButton = ({label,icon,isFocused,onPress,outerContainerStyle,innerContainerStyle})=>{
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[
                { flex:1,alignItems:'center',justifyContent:'center'},outerContainerStyle]
            }>
                <Animated.View
                    style={[{
                        flexDirection:'row',
                        width:'99%', 
                        height:50,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:25
                    },
                    innerContainerStyle]
                }
                >
                    <Image source={icon} style={{ height:20,width:20,tintColor:COLORS.darkBlue}}/>
                    {isFocused && 
                    <Text numberOfLines={1} style={{marginLeft:SIZES.base,color:COLORS.white,...FONTS.h3}}>
                        {label}    
                    </Text>}
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const MainLayout = ({drawerAnimationStyle,navigation,selectedTab,setSelectedTab}) => {
    flatlistRef = React.useRef()

    //reanimated value
    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const my_faxTabFlex = useSharedValue(1)
    const my_faxTabColor = useSharedValue(COLORS.white)
    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)
    const favouriteTabFlex = useSharedValue(1)
    const favouriteTabColor = useSharedValue(COLORS.white)
    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)
    
    // reanimated animated style
    
    const homeFlexStyle = useAnimatedStyle(()=>{
        return {
            flex:homeTabFlex.value
        }
    })
    const homeColorStyle = useAnimatedStyle(()=>{
        return {
            backgroundColor:homeTabColor.value
        }
    })
    //for my_fax 
    const my_faxFlexStyle = useAnimatedStyle(()=>{
        return {
            flex:my_faxTabFlex.value
        }
    })
    const my_faxColorStyle = useAnimatedStyle(()=>{
        return {
            backgroundColor:my_faxTabColor.value
        }
    })
    
    // for cart 
    
    const cartFlexStyle = useAnimatedStyle(()=>{
        return {
            flex:cartTabFlex.value
        }
    })
    const cartColorStyle = useAnimatedStyle(()=>{
        return {
            backgroundColor:cartTabColor.value
        }
    })
    // for favourite
    const favouriteFlexStyle = useAnimatedStyle(()=>{
        return {
            flex:favouriteTabFlex.value
        }
    })
    const favouriteColorStyle = useAnimatedStyle(()=>{
        return {
            backgroundColor:favouriteTabColor.value
        }
    })
    
    //for notifications
    const notificationFlexStyle = useAnimatedStyle(()=>{
        return {
            flex:notificationTabFlex.value
        }
    })
    const notificationColorStyle = useAnimatedStyle(()=>{
        return {
            backgroundColor:notificationTabColor.value
        }
    })
    
    React.useEffect(()=>{setSelectedTab(constants.screens.home)},[])
    React.useEffect(()=>{
        if(selectedTab == constants.screens.home){
            flatlistRef?.current?.scrollToIndex({index: 0,Animated:false})
            homeTabFlex.value = withTiming(4,{duration:500}) 
            homeTabColor.value =  withTiming(COLORS.primary,{duration:500}) 
        }else{
            homeTabFlex.value = withTiming(1,{duration:500}) 
            homeTabColor.value =  withTiming(COLORS.white,{duration:500})           
        }
    
        if(selectedTab == constants.screens.my_fax){
            
            flatlistRef?.current?.scrollToIndex({index: 1,Animated:false})
            my_faxTabFlex.value = withTiming(4,{duration:500}) 
            my_faxTabColor.value =  withTiming(COLORS.primary,{duration:500}) 
        }else{
            my_faxTabFlex.value = withTiming(1,{duration:500}) 
            my_faxTabColor.value =  withTiming(COLORS.white,{duration:500})           
        }
    
        if(selectedTab == constants.screens.cart){
            flatlistRef?.current?.scrollToIndex({index: 2,Animated:false})
            cartTabFlex.value = withTiming(4,{duration:500}) 
            cartTabColor.value =  withTiming(COLORS.primary,{duration:500}) 
        }else{
            cartTabFlex.value = withTiming(1,{duration:500}) 
            cartTabColor.value =  withTiming(COLORS.white,{duration:500})           
        }
    
        /*if(selectedTab == constants.screens.favourite){
            flatlistRef?.current?.scrollToIndex({index: 3,Animated:false})
            favouriteTabFlex.value = withTiming(4,{duration:500}) 
            favouriteTabColor.value =  withTiming(COLORS.primary,{duration:500}) 
        }else{
            favouriteTabFlex.value = withTiming(1,{duration:500}) 
            favouriteTabColor.value =  withTiming(COLORS.white,{duration:500})           
        }*/
    
        if(selectedTab == constants.screens.notification){
            flatlistRef?.current?.scrollToIndex({index: 3,Animated:false})
            notificationTabFlex.value = withTiming(4,{duration:500}) 
            notificationTabColor.value =  withTiming(COLORS.primary,{duration:500}) 
        }else{
            notificationTabFlex.value = withTiming(1,{duration:500}) 
            notificationTabColor.value =  withTiming(COLORS.white,{duration:500})           
        }
    },[selectedTab])
    return (
        <Animated.View style={{flex: 1,backgroundColor:COLORS.white,...drawerAnimationStyle}}>
            
            {/*Header <Tabs navigation={navigation}/>*/} 
            <Header 
                containerStyle={styles.HearderStyle} 
                title={selectedTab.toUpperCase()}
                leftComponent={
                <TouchableOpacity style={styles.leftStyle} onPress={()=>navigation.openDrawer()}>
                    <Image source={icons.menu}/>
                </TouchableOpacity>
                }
                rightComponent={
                <TouchableOpacity style={styles.rightStyle}>
                    <Image source={dummyData?.myProfile?.profile_image} style={{width:40,height:40,borderRadius:SIZES.radius}}/>
                </TouchableOpacity>
                }

            />
            {/*content*/}


            <View style={{flex:1}}>
                <FlatList 
                    ref={flatlistRef} 
                    style={styles.flatlist}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={(item) => item.id}
                    renderItem={({item,index})=>{
                        return (
                            <View style={{height:SIZES.height,width:SIZES.width}}>
                                {item.label == constants.screens.home && <Home />}
                                {item.label == constants.screens.my_fax && <DocList/>}
                                {item.label == constants.screens.cart && <CartTab/>}
                                {item.label == constants.screens.notification && <Notification/>}
                            </View>
                            
                        )
                    }}

                />
            </View>


            {/*footer*/}
            <View style={styles.footer}>
                <LinearGradient
                start={{x:0,y:0}}
                end={{x:0,y:4}}
                colors={[COLORS.transparent,COLORS.primary]}
                style={{
                    position:'absolute',
                    top:-20,
                    left:0,
                    right:0,
                    height:100,
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                }}/>

                {/*tab view */}

                <View style={styles.footerTab}>
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab==constants.screens.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.home)}
                    />
                    <TabButton
                        label={constants.screens.my_fax}
                        icon={icons.wallet}
                        isFocused={selectedTab==constants.screens.my_fax}
                        outerContainerStyle={my_faxFlexStyle}
                        innerContainerStyle={my_faxColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.my_fax)}
                    /> 
                    <TabButton
                        label={constants.screens.cart}
                        icon={icons.cart}
                        isFocused={selectedTab==constants.screens.cart}
                        outerContainerStyle={cartFlexStyle}
                        innerContainerStyle={cartColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.cart)}
                    />
                    <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab==constants.screens.notification}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.notification)}
                    />
                </View>

            </View>
        </Animated.View>
            
        
    )
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

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout)