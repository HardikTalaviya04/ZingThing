import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  Settings,
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
import RazorpayCheckout from "react-native-razorpay";
import RNFetchBlob from "rn-fetch-blob";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { Linking } from "react-native";
import moment from "moment";

export default function NewsFeed() {
  const [screenState, setscreenState] = useState(0);
  const [documentPath, setdocumentPath] = useState("");
  const [document, setDocument] = useState([]);
  const [mainData, setMainData] = useState([]);
  const ScreenHeight = Dimensions.get("screen").height;
  const ScreenWidth = Dimensions.get("screen").width;
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handlePayment = () => {
    var options = {
      description: "Credits towards consultation",
      image: "https://zingthing.in/frontend_theme/assets/images/logo.png",
      currency: "INR",
      key: "rzp_test_1Y0isRtUawGbne", // Your api key
      amount: 100, // Amount in paise
      name: "ZingThing",
      prefill: {
        email: "example@razorpay.com",
        contact: "1234567890",
        name: "Razorpay User",
      },
      theme: { color: COLORS.PrimeryColor },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        // Alert.alert(`Success: ${data.razorpay_payment_id}`);
        pickDocument();
      })
      .catch((error) => {
        // handle failure
        Alert.alert("Alert", `Something Wen't Wrong`);
      });
  };

  const requestStoragePermission = async ({ FileUrl }) => {
    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
      .then(async (result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              "This feature is not available (on this device / in this context)"
            );
            break;
          case RESULTS.DENIED:
            request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
              async () => {
                console.log("-beettttwweeennn-", RNFS.DocumentDirectoryPath);
                // setIsDownloading(true);

                const url = FileUrl; // Replace with your file URL
                const fileName = "File.pdf"; // Replace with your file name
                const destinationPath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

                const options = {
                  fromUrl: url,
                  toFile: destinationPath,
                  progress: (res) => {
                    const progressPercent =
                      (res.bytesWritten / res.contentLength) * 100;
                    setDownloadProgress(Math.floor(progressPercent));
                  },
                  begin: () => {
                    console.log("Download started");
                  },
                  progressDivider: 1,
                };

                try {
                  const downloadResult = await RNFS.downloadFile(options)
                    .promise;
                  if (downloadResult.statusCode === 200) {
                    Alert.alert("Success", "File downloaded successfully");
                  } else {
                    Alert.alert("Error", "Failed to download file");
                  }
                } catch (err) {
                  console.error(err);
                  Alert.alert(
                    "Error",
                    "An error occurred while downloading the file"
                  );
                }

                // const { config, fs } = RNFetchBlob;
                // const downloads = fs.dirs.DownloadDir;
                // const fileName = "sample.pdf";

                // config({
                //   addAndroidDownloads: {
                //     useDownloadManager: true,
                //     notification: true,
                //     path: `${downloads}/${fileName}`,
                //     description: "Downloading PDF file",
                //   },
                // })
                //   .fetch("GET", FileUrl)
                //   .then((res) => {
                //     Alert.alert(
                //       "Download Success",
                //       "PDF file downloaded successfully."
                //     );
                //     // setIsDownloading(false);
                //   });
                // await launchCamera(Options, response => {
                //   if (response.didCancel) {
                //     console.log('User cancelled camera');
                //   } else if (response.error) {
                //     console.log('Camera Error: ', response.error);
                //   } else {
                //     let imageUri = response.uri || response.assets?.[0];
                //     SetAddProductImageUPLD(imageUri)
                //     console.log('Inside = ', imageUri);
                //   }
                // })
              }
            );
            break;
          case RESULTS.LIMITED:
            console.log("The permission is limited: some actions are possible");
            break;
          case RESULTS.GRANTED:
            console.log("GRANTED");

            console.log("-beettttwweeennn-");
            // setIsDownloading(true


            const url = FileUrl; // Replace with your file URL
            const fileName = "File.pdf"; // Replace with your file name
            const destinationPath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

            const options = {
              fromUrl: url,
              toFile: destinationPath,
              progress: (res) => {
                const progressPercent =
                  (res.bytesWritten / res.contentLength) * 100;
                setDownloadProgress(Math.floor(progressPercent));
              },
              begin: () => {
                console.log("Download started");
              },
              progressDivider: 1,
            };

            try {
              const downloadResult = await RNFS.downloadFile(options)
                .promise;
              if (downloadResult.statusCode === 200) {
                Alert.alert("Success", "File downloaded successfully");
              } else {
                Alert.alert("Error", "Failed to download file");
              }
            } catch (err) {
              console.error(err);
              Alert.alert(
                "Error",
                "An error occurred while downloading the file"
              );
            }


            // await launchCamera(Options, response => {
            //   if (response.didCancel) {
            //     console.log('User cancelled camera');
            //   } else if (response.error) {
            //     console.log('Camera Error: ', response.error);
            //   } else {
            //     let imageUri = response.uri || response.assets?.[0];
            //     SetAddProductImageUPLD(imageUri)
            //     console.log('Inside = ', imageUri);
            //   }
            // })
            break;
          case RESULTS.BLOCKED:
            console.log("The permission is denied and not requestable anymore");
            break;
        }
      })
      .catch((error) => {
        console.log("Inside Errorjj", error);
      });
    // if (Platform.OS === "android") {
    //   const status = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    //   console.log('--permission-check-pdf--',status);
    //   if (status === RESULTS.GRANTED) {
    //     return true;
    //   }

    //   const result = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    //   console.log('--Request-check-pdf--',result);
    //   if (result === RESULTS.GRANTED) {
    //     return true;
    //   }

    //   Alert.alert(
    //     "Permission Required",
    //     "Storage permission is required to download files. Please grant the permission in the app settings.",
    //     [
    //       { text: "Cancel", style: "cancel" },
    //       { text: "Open Settings", onPress: () => Linking.openSettings() },
    //     ]
    //   );
    //   return false;
    // }
    // return true; // iOS doesn't require explicit storage permission for downloads.
  };
  const DownloadFileFunction = async ({ FileUrl }) => {
    if (Platform.OS === "android") {
      requestStoragePermission();
      // if (!granted) {
      //   return;
      // }
    }
  };

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
        "https://zingthing.ptechwebs.com/api/newsfeeds-list/1"
      );
      const json = await response.json();
      console.log("object", json);
      const reversedData = [...json.data].reverse();
      setMainData(reversedData);
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
      Fdata.append("create_date", moment().format("DD/MM/YYYY"));
      Fdata.append("expire_date", moment().add(1, "days").format("DD/MM/YYYY"));
      Fdata.append("paid", "Yes");
      Fdata.append("news_feeds_subscription_id", "1");

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
        console.log("ERROR: ", response);
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log("object", json);
      fetchData();
      setscreenState(1);
      // setResponseMessage(json.message);
      // Alert.alert("Success", "Data posted successfully");
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
        <Text
          style={{
            fontSize: RFValue(15),
            color: "#4B4E6380",
            fontWeight: "bold",
            marginTop: RFValue(10),
          }}
        >
          Status :<Text style={{
            color: item.status=='active'?'green':'red',textTransform:'uppercase'}}> {item.status}
            </Text>
        </Text>
        <TouchableOpacity
          onPress={() => requestStoragePermission({ FileUrl: item.document })}
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
            Total View : {item?.total_views}
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
              onPress={() => handlePayment()}
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
