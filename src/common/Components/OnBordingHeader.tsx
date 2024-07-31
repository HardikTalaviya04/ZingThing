import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { IMAGE } from "../Utils/image";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../Utils/screenName";
const ScreenHeight = Dimensions.get("screen").height;
const ScreenWidth = Dimensions.get("screen").width;
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OnBordingHeader = ({ label, Back = true, isMyJob = false,Locale=false }: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.PrimeryColor}
      />
      <View style={styles.headerView}>
        {Back && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={IMAGE.Back} style={styles.backImge} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{label}</Text>
        {Locale&&(
          <TouchableOpacity>
            <MaterialIcons name="translate" size={24} color={COLORS.White}/>
          </TouchableOpacity>
        )}
        {isMyJob && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: COLORS.Red,
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(5),
              position: "absolute",
              right: RFValue(10),
              borderRadius: RFValue(2),
            }}
            onPress={() => navigation.navigate(SCREENS.PostJob)}
          >
            <Text
              style={{
                color: COLORS.White,
                fontWeight: "bold",
                fontSize: RFValue(12),
              }}
            >
              POST JOB
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: COLORS.PrimeryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFPercentage(2),
    paddingHorizontal: RFValue(20),
  },
  headerText: {
    textAlign: "center",
    color: COLORS.White,
    fontSize: RFValue(16),
    fontFamily: FONTS.ExtraBold,
    fontWeight: "bold",
    width: ScreenWidth - RFValue(64),
  },
  backImge: {
    resizeMode: "contain",
    height: RFValue(24),
    width: RFValue(24),
  },
});

export default OnBordingHeader;
