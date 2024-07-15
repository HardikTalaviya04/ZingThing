import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../common/Utils/Colors";
import OnBordingHeader from "../../common/Components/OnBordingHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../common/Utils/screenName";

export default function JobDetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainBody}>
      <OnBordingHeader label={"JOB ID : 1233454 Details"} Back={false} />
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
          <Text style={styles.BodyText}>John Smith</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Job Title :</Text>
          <Text style={styles.BodyText}>Electrician</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>City : </Text>
          <Text style={styles.BodyText}>Rajkot</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Salary : </Text>
          <Text style={styles.BodyText}>15,000/-</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Qualifications :</Text>
          <Text style={styles.BodyText}>Diploma</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Candiate Type :</Text>
          <Text style={styles.BodyText}>Local</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Mobile Number :</Text>
          <Text style={styles.BodyText}>+1 1234567890</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Working Hours :</Text>
          <Text style={styles.BodyText}>Full Time</Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Age Group :</Text>
          <Text style={styles.BodyText}>20 + </Text>
        </View>
        <View style={{ marginTop: RFValue(8) }}>
          <Text style={styles.HeadingText}>Resume : </Text>
          <TouchableOpacity
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
          <Text style={styles.BodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>
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
  },
  BodyText: {
    fontSize: RFValue(20),
    color: COLORS.Black,
    fontWeight: "bold",
  },
});
