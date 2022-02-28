import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import customDrawer from "./naviguation/customDrawer";

import { createStore , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/rootReducer"

const store = createStore(rootReducer , applyMiddleware(thunk))

const stack = createStackNavigator()
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <stack.Navigator screenOptions={{ headerShown:false}} initialRouteName="Home">
                    <stack.Screen name="Home" component={customDrawer}/>
                </stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App