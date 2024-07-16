import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../../common/Utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FONTS } from "../../common/Utils/fonts";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import OnBordingHeader from "../../common/Components/OnBordingHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { SCREENS } from "../../common/Utils/screenName";

const PostJob = () => {
  const navigation = useNavigation();
  const pickerRef = useRef();
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "On Site", value: "1" },
    { label: "Remote", value: "2" },
  ]);

  const [JobTitleopen, setJobTitleOpen] = useState(false);
  const [JobTitlevalue, setJobTitleValue] = useState(null);
  const [JobTitleitems, setJobTitleItems] = useState([]);

  const [BusinnesTypeopen, setBusinnesTypeOpen] = useState(false);
  const [BusinnesTypevalue, setBusinnesTypeValue] = useState(null);
  const [BusinnesTypeitems, setBusinnesTypeItems] = useState([]);

  const [WorkingTimeopen, setWorkingTimeOpen] = useState(false);
  const [WorkingTimevalue, setWorkingTimeValue] = useState(null);
  const [WorkingTimeitems, setWorkingTimeItems] = useState([]);

  const [GenderListopen, setGenderListOpen] = useState(false);
  const [GenderListvalue, setGenderListValue] = useState(null);
  const [GenderListitems, setGenderListItems] = useState([]);

  const [EducationLineopen, setEducationLineOpen] = useState(false);
  const [EducationLinevalue, setEducationLineValue] = useState(null);
  const [EducationLineitems, setEducationLineItems] = useState([]);

  const [Qualificationopen, setQualificationOpen] = useState(false);
  const [Qualificationvalue, setQualificationValue] = useState(null);
  const [Qualificationitems, setQualificationItems] = useState([]);

  const [AddSkillsopen, setAddSkillsOpen] = useState(false);
  const [AddSkillsvalue, setAddSkillsValue] = useState(null);
  const [AddSkillsitems, setAddSkillsItems] = useState([]);

  const [WorkExperienceopen, setWorkExperienceOpen] = useState(false);
  const [WorkExperiencevalue, setWorkExperienceValue] = useState(null);
  const [WorkExperienceitems, setWorkExperienceItems] = useState([]);

  const [Vaccanciesopen, setVaccanciesOpen] = useState(false);
  const [Vaccanciesvalue, setVaccanciesValue] = useState(null);
  const [Vaccanciesitems, setVaccanciesItems] = useState([]);

  const [AgeListopen, setAgeListOpen] = useState(false);
  const [AgeListvalue, setAgeListValue] = useState(null);
  const [AgeListitems, setAgeListItems] = useState([]);

  const [WorkPlaceopen, setWorkPlaceOpen] = useState(false);
  const [WorkPlacevalue, setWorkPlaceValue] = useState(null);
  const [WorkPlaceitems, setWorkPlaceItems] = useState([]);

  const [SalaryRangeopen, setSalaryRangeOpen] = useState(false);
  const [SalaryRangevalue, setSalaryRangeValue] = useState(null);
  const [SalaryRangeitems, setSalaryRangeItems] = useState([]);

  const [Localityopen, setLocalityOpen] = useState(false);
  const [Localityvalue, setLocalityValue] = useState(null);
  const [Localityitems, setLocalityItems] = useState([]);

  const [AdditionalFacilityopen, setAdditionalFacilityOpen] = useState(false);
  const [AdditionalFacilityvalue, setAdditionalFacilityValue] = useState(null);
  const [AdditionalFacilityitems, setAdditionalFacilityItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/all-list"
      );
      const json = await response.json();
      const JobTitle = json.data["JobTitle Lists"].map((item: any) => {
        return { label: item?.job_title, value: item?.id };
      });
      setJobTitleItems(JobTitle);
      const BusinessType = json.data["Business Lists"].map((item: any) => {
        return { label: item?.business, value: item?.id };
      });
      setBusinnesTypeItems(BusinessType);
      const WorkingTime = json.data["WorkingTime Lists"].map((item: any) => {
        return { label: item?.working_time, value: item?.id };
      });
      setWorkingTimeItems(WorkingTime);
      const GenderList = json.data["Gender Lists"].map((item: any) => {
        return { label: item?.gender, value: item?.id };
      });
      setGenderListItems(GenderList);
      const LineOfEductaion = json.data["LineOfEducation Lists"].map(
        (item: any) => {
          return { label: item?.line_of_education, value: item?.id };
        }
      );
      setEducationLineItems(LineOfEductaion);
      const QualificationList = json.data["Qualification Lists"].map(
        (item: any) => {
          return { label: item?.qualification, value: item?.id };
        }
      );
      setQualificationItems(QualificationList);
      const AdditionalSkills = json.data["Skills Lists"].map((item: any) => {
        return { label: item?.skills, value: item?.id };
      });
      setAddSkillsItems(AdditionalSkills);
      const Expirence = json.data["Experience Lists"].map((item: any) => {
        return { label: item?.experience, value: item?.id };
      });
      setWorkExperienceItems(Expirence);

      const VaccaniciesList = json.data["Quantity Lists"].map((item: any) => {
        return { label: item?.quantity, value: item?.id };
      });
      setVaccanciesItems(VaccaniciesList);

      const AgeGroup = json.data["AgeGroup Lists"].map((item: any) => {
        return { label: item?.age_group, value: item?.id };
      });
      setAgeListItems(AgeGroup);

      const WorkPlace = json.data["EnvironmentToWork Lists"].map(
        (item: any) => {
          return { label: item?.environment_to_work_with, value: item?.id };
        }
      );
      setWorkPlaceItems(WorkPlace);

      const SalaryRange = json.data["SalaryRange Lists"].map((item: any) => {
        return { label: item?.salary_range, value: item?.id };
      });
      setSalaryRangeItems(SalaryRange);

      const Locality = json.data["Localilty Lists"].map((item: any) => {
        return { label: item?.localilty, value: item?.id };
      });
      setLocalityItems(Locality);

      const AdditionalFacility = json.data["Facilities Lists"].map(
        (item: any) => {
          return { label: item?.facilities, value: item?.id };
        }
      );
      setAdditionalFacilityItems(AdditionalFacility);
      // console.log("object", newData)
      // setMainData(json.data);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async () => {
    try {
      const data = new FormData();
      data.append("job_post_date", "2024-07-11");
      data.append("vendor_id", "1");
      data.append("job_title_id", JobTitlevalue);
      data.append("business_id", BusinnesTypevalue);
      data.append("working_time_id", WorkingTimevalue);
      data.append("gender_id", GenderListvalue);
      data.append("line_of_educations_ids", EducationLinevalue);
      data.append("qualification_id", Qualificationvalue);
      data.append("skill_id", AddSkillsvalue);
      data.append("experience_id", WorkExperiencevalue);
      data.append("quantity_id", Vaccanciesvalue);
      data.append("age_group_id", AgeListvalue);
      data.append("localilty_id", Localityvalue);
      data.append("environment_to_work_id", WorkPlacevalue);
      data.append("place_of_posting", "sample");
      data.append("salary_range_id", SalaryRangevalue);
      data.append("facility_ids", AdditionalFacilityvalue);
      data.append("job_type_id", value);
      data.append("job_post_subscription_id", "1");
      data.append("job_search_subscription_id", "1");

      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/jobpost-add",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      navigation.navigate(SCREENS.MyJobs);
    } catch (err: any) {
      Alert.alert(err);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EFFDFD" }}>
      <OnBordingHeader label={"Post Job"} Back={false} />
      <ScrollView contentContainerStyle={{ paddingBottom: RFValue(40) }}>
        <View
          style={{
            backgroundColor: COLORS.White,
            width: width * 0.92,
            alignSelf: "center",
            paddingVertical: width * 0.034,
            marginVertical: width * 0.04,
            paddingHorizontal: width * 0.04,
            flex: 1,
          }}
        >
          <View
            style={{
              zIndex: 14,
            }}
          >
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Job Type * :{" "}
            </Text>
            <DropDownPicker
              open={open}
              value={value}
              placeholder="Select Job Type"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              items={items}
              dropDownDirection="BOTTOM"
              setOpen={setOpen}
              setValue={setValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
                zIndex: 10,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>
          <View style={{ zIndex: 13 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Job Title :
            </Text>
            <DropDownPicker
              open={JobTitleopen}
              placeholder="Select Job Title"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              value={JobTitlevalue}
              items={JobTitleitems}
              setOpen={setJobTitleOpen}
              setValue={setJobTitleValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>
          <View style={{ zIndex: 12 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Business Type :
            </Text>
            <DropDownPicker
              open={BusinnesTypeopen}
              placeholder="Select Business Type ( Max 5)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              value={BusinnesTypevalue}
              items={BusinnesTypeitems}
              setOpen={setBusinnesTypeOpen}
              setValue={setBusinnesTypeValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>
          <View style={{ zIndex: 11 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Job Time/Working Time :
            </Text>
            <DropDownPicker
              open={WorkingTimeopen}
              value={WorkingTimevalue}
              placeholder="Select Time ( Multiple)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              items={WorkingTimeitems}
              setOpen={setWorkingTimeOpen}
              setValue={setWorkingTimeValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>
          <View style={{ zIndex: 10 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Gender :
            </Text>
            <DropDownPicker
              open={GenderListopen}
              value={GenderListvalue}
              items={GenderListitems}
              setOpen={setGenderListOpen}
              placeholder="Select Gender"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setValue={setGenderListValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>
          <View style={{ zIndex: 9 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Line of Education :
            </Text>
            <DropDownPicker
              open={EducationLineopen}
              value={EducationLinevalue}
              dropDownDirection="BOTTOM"
              placeholder="Select Education ( Max 3)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              items={EducationLineitems}
              setOpen={setEducationLineOpen}
              setValue={setEducationLineValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              // setItems={setEducationLineItems}
            />
          </View>
          <View style={{ zIndex: 8 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Qualification :
            </Text>
            <DropDownPicker
              open={Qualificationopen}
              value={Qualificationvalue}
              items={Qualificationitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Qualification"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setQualificationOpen}
              setValue={setQualificationValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 7 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Additional Skills :
            </Text>
            <DropDownPicker
              open={AddSkillsopen}
              value={AddSkillsvalue}
              items={AddSkillsitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Skills ( Max 3)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setAddSkillsOpen}
              setValue={setAddSkillsValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 6 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Work Experience Years :
            </Text>
            <DropDownPicker
              open={WorkExperienceopen}
              value={WorkExperiencevalue}
              items={WorkExperienceitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Experience"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setWorkExperienceOpen}
              setValue={setWorkExperienceValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 5 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              NO. of Vacancies :
            </Text>
            <DropDownPicker
              open={Vaccanciesopen}
              value={Vaccanciesvalue}
              items={Vaccanciesitems}
              dropDownDirection="BOTTOM"
              placeholder="10"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setVaccanciesOpen}
              setValue={setVaccanciesValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 4 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Age Group :
            </Text>
            <DropDownPicker
              open={AgeListopen}
              value={AgeListvalue}
              items={AgeListitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Age Group"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setAgeListOpen}
              setValue={setAgeListValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 3 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Work Place :
            </Text>
            <DropDownPicker
              open={WorkPlaceopen}
              value={WorkPlacevalue}
              items={WorkPlaceitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Work Place"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setWorkPlaceOpen}
              setValue={setWorkPlaceValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 2 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Salary Range :
            </Text>
            <DropDownPicker
              open={SalaryRangeopen}
              value={SalaryRangevalue}
              items={SalaryRangeitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Range"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setSalaryRangeOpen}
              setValue={setSalaryRangeValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 1 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Locality :
            </Text>
            <DropDownPicker
              open={Localityopen}
              value={Localityvalue}
              items={Localityitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Locality"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setLocalityOpen}
              setValue={setLocalityValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <View style={{ zIndex: 0 }}>
            <Text style={{ color: COLORS.TextBlack, fontWeight: "600" }}>
              Additional Facilities :
            </Text>
            <DropDownPicker
              open={AdditionalFacilityopen}
              value={AdditionalFacilityvalue}
              items={AdditionalFacilityitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Additional Facilites (Multiple Allowed)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={setAdditionalFacilityOpen}
              setValue={setAdditionalFacilityValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                borderRadius: 0,
              }}
              // listItemContainerStyle={{backgroundColor:'red'}}
              // // style={{backgroundColor:'red'}}
              // dropDownContainerStyle={{backgroundColor:'red'}}
              setItems={setItems}
            />
          </View>

          <TouchableOpacity
            onPress={() => onSubmit()}
            style={{
              backgroundColor: COLORS.Black,
              paddingVertical: height * 0.014,
              borderRadius: width * 0.02,
              marginTop: 20,
              zIndex: -1,
            }}
          >
            <Text
              style={{
                color: COLORS.White,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Submit Job Post
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostJob;

const styles = StyleSheet.create({});
