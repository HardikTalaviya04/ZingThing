import {
  Alert,
  Dimensions,
  FlatList,
  Image,
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
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../common/Utils/screenName";

export default function MyJobs() {
  const [screenState, setscreenState] = useState(0);
  const [mainDataForFirst, setMainDataForFirst] = useState([1, 2, 3, 4, 5]);
  const [mainDataForSecoend, setMainDataForSecoend] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const ScreenHeight = Dimensions.get("screen").height;
  const ScreenWidth = Dimensions.get("screen").width;
  const navigation = useNavigation();
  const renderItemForFirst = ({ item }) => {
    return (
      <View style={styles.subBodyContainer}>
        <View style={styles.firstSubBodyContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.SkyBlue,
              borderRadius: RFValue(2),
              paddingHorizontal: RFValue(12),
              paddingVertical: RFValue(5),
            }}
          >
            <Text
              style={{
                color: COLORS.White,
                fontSize: RFValue(14),
                fontWeight: "bold",
              }}
            >
              JOB POST
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.TextBlack,
              fontSize: RFValue(12),
              fontWeight: "400",
            }}
          >
            May 6th, 2024 05:53PM
          </Text>
        </View>
        <View style={styles.Sprator} />
        <View
          style={[styles.firstSubBodyContainer, { marginTop: RFValue(15) }]}
        >
          <Text
            style={{
              color: COLORS.DarkTextBlack,
              fontSize: RFValue(16),
              fontWeight: "400",
              width: ScreenWidth * 0.45,
            }}
          >
            JOB ID: #JOB23984
          </Text>
          <View style={styles.BlackSprator} />
          <Text
            style={{
              color: COLORS.Parpul,
              fontSize: RFValue(15),
              fontWeight: "800",
              width: ScreenWidth * 0.45,
              marginLeft: RFValue(10),
            }}
          >
            {"Local Jobs \nOne Time Job"}
          </Text>
        </View>
        <View style={styles.Sprator} />
        <View
          style={[styles.firstSubBodyContainer, { marginTop: RFValue(15) }]}
        >
          <View>
            <Text
              style={{
                color: COLORS.DarkTextBlack,
                fontSize: RFValue(12),
                fontWeight: "400",
                width: ScreenWidth * 0.48,
              }}
            >
              Job Staus
            </Text>
            <Text
              style={{
                color: COLORS.Red,
                fontSize: RFValue(16),
                fontWeight: "400",
                width: ScreenWidth * 0.48,
              }}
            >
              Expired
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: COLORS.DarkTextBlack,
                fontSize: RFValue(12),
                fontWeight: "400",
                width: ScreenWidth * 0.48,
              }}
            >
              Job Post Renewal
            </Text>
            <Text
              style={{
                color: COLORS.PrimeryColor,
                fontSize: RFValue(16),
                fontWeight: "700",
                width: ScreenWidth * 0.48,
              }}
            >
              ₹ 15.00
            </Text>
          </View>
        </View>
        <View style={styles.Sprator} />
        <View
          style={[
            styles.firstSubBodyContainer,
            { marginTop: RFValue(15), flexDirection: "column" },
          ]}
        >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Image
              source={IMAGE.Icon}
              style={{
                resizeMode: "contain",
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                color: COLORS.DarkTextBlack,
                fontSize: RFValue(12),
                fontWeight: "400",
                marginLeft: RFValue(10),
              }}
            >
              Job Title
            </Text>
          </View>
          <Text
            style={{
              color: COLORS.Black,
              fontSize: RFValue(15),
              fontWeight: "400",
              marginTop: RFValue(4),
              width: "100%",
            }}
          >
            Hiring a account manager with 2+ yrs exp
          </Text>
        </View>
      </View>
    );
  };
  const renderItemForSecoend = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.White,
          borderWidth: 1,
          borderColor: COLORS.Gray,
          borderRadius: RFValue(4),
          marginTop: RFValue(15),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={[styles.secoendListBoxText, { paddingTop: RFValue(8) }]}>
            Candiate Name : ABC
          </Text>
          <Text style={styles.secoendListBoxText}>Location : Delhi</Text>
          <Text style={styles.secoendListBoxText}>
            Experience : 2 + Yrs Exp
          </Text>
          <Text
            style={[styles.secoendListBoxText, { paddingBottom: RFValue(8) }]}
          >
            Salary Expected : 10,000+
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate(SCREENS.JobDetailsScreen)}
          style={{
            position: "absolute",
            top: RFValue(8),
            right: RFValue(8),
          }}
        >
          <Image
            source={IMAGE.InfoCircle}
            style={{
              resizeMode: "contain",
              height: RFValue(20),
              width: RFValue(20),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate(SCREENS.JobDetailsScreen)}
          style={{
            backgroundColor: COLORS.SkyBlue,
            paddingHorizontal: RFValue(12),
            paddingVertical: RFValue(5),
            position: "absolute",
            bottom: RFValue(0),
            right: RFValue(0),
          }}
        >
          <Text
            style={{
              color: COLORS.White,
              fontSize: RFValue(10),
              fontWeight: "bold",
            }}
          >
            JOB ID : 1233454
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const EmptyComponent = ({}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: ScreenHeight * 0.35,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16),
            fontWeight: "500",
            color: COLORS.PrimeryColor,
          }}
        >
          No results found
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={"My Jobs"} Back={false} isMyJob={true} />
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
              Renew Old Job Post
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
              Available Candiates
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
          <FlatList
            contentContainerStyle={{ marginTop: RFValue(15) }}
            showsVerticalScrollIndicator={false}
            data={mainDataForFirst}
            renderItem={renderItemForFirst}
            ListEmptyComponent={EmptyComponent}
          />
        ) : (
          <>
            <Text
              style={{
                fontSize: RFValue(17),
                color: COLORS.Gray,
                marginTop: RFValue(10),
                fontWeight: "500",
              }}
            >
              Candidates matching Job posts
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={mainDataForSecoend}
              renderItem={renderItemForSecoend}
              ListEmptyComponent={EmptyComponent}
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  subBodyContainer: {
    backgroundColor: COLORS.White,
    borderWidth: 1,
    borderColor: COLORS.Gray,
    borderRadius: RFValue(8),
    paddingVertical: RFValue(15),
    marginTop: RFValue(15),
    shadowColor: COLORS.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    // borderWidth: 1,
  },
  firstSubBodyContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: RFValue(15),
  },
  Sprator: {
    height: 1,
    backgroundColor: COLORS.SperatorColor,
    marginTop: RFValue(15),
  },
  BlackSprator: {
    height: 18,
    width: 3,
    backgroundColor: COLORS.Black,
  },
  secoendListBoxText: {
    color: COLORS.ThemBlue,
    fontSize: RFValue(14),
    fontWeight: "500",
    paddingHorizontal: RFValue(15),
    marginTop: RFValue(2),
  },
});
