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
import DownloadFile from "../../common/Components/DownloadFile";

export default function NewsFeed() {
  const [screenState, setscreenState] = useState(0);
  const [documentPath, setdocumentPath] = useState("");
  const [document, setDocument] = useState([]);
  const [mainData, setMainData] = useState([]);
  const ScreenHeight = Dimensions.get("screen").height;
  const ScreenWidth = Dimensions.get("screen").width;

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.doc,
          DocumentPicker.types.docx,
        ],
      });
      // setResumeData(res);
      if (res && res[0].uri) {
        const path = await copyDocumentToAppDirectory(res[0]);
        console.log("--object--", res, path);
        setdocumentPath(path);
        postData(res[0], path);
      } else {
        Alert.alert("Error", "Selected document URI is undefined");
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log("User cancelled document picker");
      } else {
        Alert.alert("Error", "Something went wrong while picking the document");
        console.log(err);
      }
    }
  };

  const copyDocumentToAppDirectory = async (document) => {
    document;
    const fileName = document.name;
    const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    try {
      await RNFS.copyFile(document.uri, destPath);
      return destPath;
    } catch (error) {
      console.error("Error copying document to app directory", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/newsfeeds-list"
      );
      const json = await response.json();
      console.log("object", json);
      setMainData(json.data);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postData = async (data, path) => {
    try {
      const Fdata = new FormData();
      Fdata.append("document", {
        uri: data.uri,
        type: data.type,
        name: data.name,
      });
      Fdata.append("vendor_id", "1");
      Fdata.append("create_date", "15/06/2024");
      Fdata.append("expire_date", "16/06/2024");
      Fdata.append("paid", "Yes");
      console.log("hardik", data.uri, data.type, data.name, Fdata);

      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/newsfeeds-add",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: Fdata,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log("hardik", json);
      fetchData();
      setscreenState(1);
      // setResponseMessage(json.message);
      Alert.alert("Success", "Data posted successfully");
    } catch (error) {
      console.log("--error--", error);
      // setResponseMessage(error.message);
      Alert.alert("Error", JSON.stringify(error));
    }
  };

  const renderItem = ({ item }) => {
    // const Views = item.user;
    // const arrayLength = Views.length;
    // console.log(arrayLength);
    // console.log(Views);
    return (
      <View
        style={{
          backgroundColor: COLORS.White,
          borderRadius: RFValue(2),
          padding: RFValue(15),
          marginTop: RFValue(15),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(15),
            color: "#4B4E6380",
            fontWeight: "bold",
          }}
        >
          News Feed Posted : {item.create_date}
        </Text>
        <Text
          style={{
            fontSize: RFValue(15),
            color: "#4B4E6380",
            fontWeight: "bold",
            marginTop: RFValue(10),
          }}
        >
          News Feed Expires : {item.expire_date}
        </Text>
        <TouchableOpacity
          onPress={() => DownloadFile({ FileUrl: item.document })}
          activeOpacity={0.7}
          style={{
            backgroundColor: COLORS.Black,
            paddingHorizontal: RFValue(14),
            paddingVertical: RFValue(10),
            borderRadius: RFValue(8),
            marginTop: RFValue(20),
            width: RFValue(118),
          }}
        >
          <Text style={{ color: COLORS.White }}>Download PDF</Text>
        </TouchableOpacity>
        <View
          style={{
            width: ScreenWidth - 60,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "#F58D3A", fontWeight: "bold" }}>
            Total View : {item.user ? 1 : 0}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={"News Feed"} Back={false} />
      <ImageBackground
        source={IMAGE.BackgroundImg}
        resizeMode="contain"
        style={{
          flex: 1,
          paddingHorizontal: RFValue(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: COLORS.White,
            justifyContent: "space-between",
            borderRadius: RFValue(8),
          }}
        >
          <TouchableOpacity
            onPress={() => setscreenState(0)}
            style={{ padding: RFValue(15) }}
          >
            <Text
              style={{
                color:
                  screenState == 0
                    ? COLORS.PrimeryColor
                    : COLORS.extraLightBlack,
                fontSize: RFValue(15),
                fontFamily: FONTS.ExtraBold,
                fontWeight: "bold",
              }}
            >
              Post New Feed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setscreenState(1)}
            style={{ padding: RFValue(15) }}
          >
            <Text
              style={{
                color:
                  screenState == 1
                    ? COLORS.PrimeryColor
                    : COLORS.extraLightBlack,
                fontSize: RFValue(15),
                fontFamily: FONTS.ExtraBold,
                fontWeight: "bold",
              }}
            >
              View Existing Feed
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: COLORS.White,
            justifyContent: "space-between",
            borderRadius: RFValue(8),
          }}
        >
          {screenState == 0 && (
            <View
              style={{
                flex: 0.38,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: RFValue(5),
                  width: RFValue(87),
                  backgroundColor: COLORS.PrimeryColor,
                }}
              />
            </View>
          )}
          {screenState == 1 && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: ScreenWidth * 0.58,
              }}
            >
              <View
                style={{
                  height: RFValue(5),
                  width: RFValue(87),
                  backgroundColor: COLORS.PrimeryColor,
                }}
              />
            </View>
          )}
        </View>
        {screenState == 0 ? (
          <View
            style={{
              backgroundColor: COLORS.White,
              width: ScreenWidth - 30,
              height: RFValue(420),
              marginTop: RFValue(15),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: RFValue(8),
            }}
          >
            <TouchableOpacity
              onPress={() => pickDocument()}
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.Black,
                paddingHorizontal: RFValue(14),
                paddingVertical: RFValue(10),
                borderRadius: RFValue(8),
              }}
            >
              <Text style={{ color: COLORS.White }}>Upload PDF</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{ marginTop: RFValue(15) }}
            showsVerticalScrollIndicator={false}
            data={mainData}
            renderItem={renderItem}
          />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
});
