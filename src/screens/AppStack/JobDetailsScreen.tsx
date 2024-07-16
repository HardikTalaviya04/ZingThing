import {
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

export default function JobDetailsScreen({ route }) {
  const JobId = route?.params?.Job_Id;
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [mainDetilsData, setMainDetilsData] = useState([]);

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
            {mainDetilsData.job_posts?.[0].salary_range}
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
