import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  Modal,
  StatusBar,
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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "../../common/Utils/fonts";
import DocumentPicker from "react-native-document-picker";
import RNFS from "react-native-fs";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../common/Utils/screenName";
import { translator } from "../../localization/I18n";
import { ContextProvider } from "../StateManagment/StateManagment";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function DashBoard() {
  const navigation = useNavigation();
  const {Language,SetLanguage} = useContext(ContextProvider)
  const [Open,SetOpen]=useState(false)
  console.log('--Language--',Language)
  return (
    <View style={styles.mainBody}>
      <Modal
      visible={Open}
      transparent={true}
      >
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:COLORS.White,paddingHorizontal:40,borderRadius:10}}>
            <Text style={{color:COLORS.Black,fontWeight:'600',paddingTop:14,marginBottom:10}}>Select Language</Text>
            <TouchableOpacity style={{paddingVertical:14}}
            onPress={()=>{SetLanguage("en")
              SetOpen(false)

            }}
            >
              <Text style={{color:COLORS.Black,fontWeight:'500',textAlign:'center'}}>ENGLISH</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor:COLORS.Black,borderBottomWidth:1}}/>
            <TouchableOpacity style={{paddingVertical:14}}
                        onPress={()=>{SetLanguage("hi")
                          SetOpen(false)
            
                        }}>
              <Text style={{color:COLORS.Black,fontWeight:'500',textAlign:'center'}}>HINDI</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor:COLORS.Black,borderBottomWidth:1}}/>
            <TouchableOpacity style={{paddingVertical:14}}
                        onPress={()=>{SetLanguage("gu")
                          SetOpen(false)
            
                        }}>
              <Text style={{color:COLORS.Black,fontWeight:'500',textAlign:'center'}}>GUJARATI</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor:COLORS.Black,borderBottomWidth:1}}/>
            <TouchableOpacity style={{paddingVertical:14}}
                        onPress={()=>{SetLanguage("mr")
                          SetOpen(false)
            
                        }}>
              <Text style={{color:COLORS.Black,fontWeight:'500',textAlign:'center'}}>MARATHI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    <View>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.PrimeryColor}
      />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{translator("Dashboard",Language)}</Text>
          <TouchableOpacity
          onPress={()=>SetOpen(true)}
          >
            <MaterialIcons name="translate" size={24} color={COLORS.White}/>
          </TouchableOpacity>
        
      </View>
    </View>
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
    width: Dimensions.get("window").width - RFValue(64),
  },
  backImge: {
    resizeMode: "contain",
    height: RFValue(24),
    width: RFValue(24),
  },
});
