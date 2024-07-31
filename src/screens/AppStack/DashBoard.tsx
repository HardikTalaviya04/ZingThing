import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { COLORS } from "../../common/Utils/Colors";
import AuthHeader from "../../common/Components/AuthHeader";
import OnBordingHeader from "../../common/Components/OnBordingHeader";
import { IMAGE } from "../../common/Utils/image";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "../../common/Utils/fonts";
import DocumentPicker from "react-native-document-picker";
import RNFS from "react-native-fs";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../common/Utils/screenName";
import { translator } from "../../localization/I18n";
import { ContextProvider } from "../StateManagment/StateManagment";

export default function DashBoard() {
  const navigation = useNavigation();
  const {Language,SetLanguage} = useContext(ContextProvider)
  console.log('--Language--',Language)
  return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={translator("Dashboard",Language)} Back={false} Locale={true}/>
      <View style={{ flex: 1, margin: RFValue(12) }}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.NewsFeed)}
        >
          <Text style={styles.buttonText}>{translator("AddNewsFeed",Language)+" ->"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.MyJobs)}
        >
          <Text style={styles.buttonText}>{translator("MyJobs",Language)+" ->"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    fontSize: RFValue(16),
    color: COLORS.PrimeryColor,
    fontWeight: "bold",
  },
  buttonView: {
    backgroundColor: COLORS.White,
    borderWidth: 1,
    borderColor: COLORS.PrimeryColor,
    padding: RFValue(10),
    borderRadius: RFValue(4),
    marginTop: RFValue(12),
  },
});
