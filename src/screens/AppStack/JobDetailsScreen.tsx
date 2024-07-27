import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../common/Utils/Colors";
import OnBordingHeader from "../../common/Components/OnBordingHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../common/Utils/screenName";
import { FONTS } from "../../common/Utils/fonts";
import DownloadFile from "../../common/Components/DownloadFile";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import RNFS from "react-native-fs";


export default function JobDetailsScreen({ route }) {
  const JobId = route?.params?.Job_Id;
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [mainDetilsData, setMainDetilsData] = useState([]);
  const [downloadProgress, setDownloadProgress] = useState(0);


  const requestStoragePermission = async ({ FileUrl }) => {
    console.log('--Pdf-Url--',FileUrl)
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

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://zingthing.ptechwebs.com/api/job-apply/${JobId}`
      );
      const json = await response.json();
      console.log("object", json.data);
      setMainDetilsData(json.data[0]);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [focus]);

  https: return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={`JOB ID : ${JobId} Details`} Back={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: RFValue(50) }}
        style={{
          flex: 1,
          paddingHorizontal: RFValue(28),
          paddingTop: RFValue(12),
        }}
      >
        <View>
          <Text style={styles.HeadingText}>Name :</Text>
          <Text style={styles.BodyText}>{mainDetilsData.name}</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Job Title :</Text>
          <Text style={styles.BodyText}>
            {mainDetilsData.job_posts?.[0].job_title}
          </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>City : </Text>
          <Text style={styles.BodyText}>{mainDetilsData.city}</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Salary : </Text>
          <Text style={styles.BodyText}>
            ₹ {mainDetilsData.job_posts?.[0].salary_range}
          </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Qualifications :</Text>
          <Text style={styles.BodyText}>
            {mainDetilsData.job_posts?.[0].qualification}
          </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Candiate Type :</Text>
          <Text style={styles.BodyText}>
            {mainDetilsData.job_posts?.[0].localilty}
          </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Mobile Number :</Text>
          <Text style={styles.BodyText}>{mainDetilsData.mobile_no}</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Working Hours :</Text>
          <Text style={styles.BodyText}>
            {mainDetilsData.job_posts?.[0].working_time}
          </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Age Group :</Text>
          <Text style={styles.BodyText}>
            {mainDetilsData.job_posts?.[0].age_group}
          </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Resume : </Text>
          <TouchableOpacity
            onPress={() => requestStoragePermission({ FileUrl: mainDetilsData.resume })}
            activeOpacity={0.5}
            style={{
              backgroundColor: COLORS.Black,
              borderRadius: RFValue(4),
              width: RFValue(180),
              alignSelf: "center",
              marginTop: RFValue(10),
            }}
          >
            <Text
              style={{
                color: COLORS.White,
                alignSelf: "center",
                paddingHorizontal: RFValue(16),
                paddingVertical: RFValue(8),
              }}
            >
              Download Resume
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Candidate Message:</Text>
          <Text style={styles.BodyText}>{mainDetilsData.message}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  HeadingText: {
    fontSize: RFValue(16),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
  },
  BodyText: {
    fontSize: RFValue(14),
    fontFamily: FONTS.SemiBold,
    color: COLORS.Black,
    // fontWeight: "bold",
  },
});
