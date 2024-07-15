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
import React, { useEffect, useState } from "react";
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

export default function DashBoard() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={"DashBoard"} Back={false} />
      <View style={{ flex: 1, margin: RFValue(12) }}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.NewsFeed)}
        >
          <Text style={styles.buttonText}>{" Add News Feed  ->"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate(SCREENS.MyJobs)}
        >
          <Text style={styles.buttonText}>{" My Jobs  ->"}</Text>
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
