import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";

//TABS
import { Tabs } from './app/config/router';

export default createAppContainer(Tabs);