import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
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
import RazorpayCheckout from "react-native-razorpay";
import { FlatList } from "react-native";
import moment from "moment";

const PostJob = ({ route }: any) => {
  const NavData = route?.params?.MainItem ? route?.params?.MainItem : null;
  const navigation = useNavigation();
  const pickerRef = useRef();
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Single Job/Service", value: "1" },
    { label: "Employment", value: "2" },
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

  const [CandidateMessagevalue, setCandidateMessagevalue] = useState("");

  const [sbscriptionAmount, setSbscriptionAmount] = useState(50);
  const [sbscriptionDayes, setSbscriptionDayes] = useState(10);
  const [sbscriptionInDayes, setSbscriptionInDayes] = useState(10);
  useEffect(() => {
    console.log(AdditionalFacilityvalue, AdditionalFacilityitems);
  }, [AdditionalFacilityvalue]);
  const CheckValidation = () => {
    if (value == null) {
      Alert.alert("Please Select Job Type");
      return;
    }
    if (JobTitlevalue == null) {
      Alert.alert("Please Select Job Title");
      return;
    }
    if (value == 2) {
      if (BusinnesTypevalue == null) {
        Alert.alert("Please Select Business Type");
        return;
      }
      if (WorkingTimevalue == null) {
        Alert.alert("Please Select Working Time");
        return;
      }
      if (GenderListvalue == null) {
        Alert.alert("Please Select Gender List");
        return;
      }
      if (EducationLinevalue == null) {
        Alert.alert("Please Select Education Line");
        return;
      }
      if (Qualificationvalue == null) {
        Alert.alert("Please Select Qualification");
        return;
      }
      if (AddSkillsvalue == null) {
        Alert.alert("Please Select Add Skills");
        return;
      }
      if (WorkExperiencevalue == null) {
        Alert.alert("Please Select Work Experience");
        return;
      }
      if (Vaccanciesvalue == null) {
        Alert.alert("Please Select Vaccancies");
        return;
      }
      if (AgeListvalue == null) {
        Alert.alert("Please Select Age List");
        return;
      }
      if (WorkPlacevalue == null) {
        Alert.alert("Please Select Work Place");
        return;
      }
      if (SalaryRangevalue == null) {
        Alert.alert("Please Select Salary Range");
        return;
      }
      if (Localityvalue == null) {
        Alert.alert("Please Select Locality");
        return;
      }

      if (AdditionalFacilityvalue == null) {
        Alert.alert("Please Select Additional Facility");
        return;
      }
    }

    handlePayment();
  };
  const handlePayment = () => {
    var options = {
      description: "Credits towards consultation",
      image: "https://zingthing.in/frontend_theme/assets/images/logo.png",
      currency: "INR",
      key: "rzp_test_1Y0isRtUawGbne", // Your api key
      amount: sbscriptionAmount * 100, // Amount in paise
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
        onSubmit();
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Something Wen't Wrong`);
      });
  };

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

    try {
      const response = await fetch(
        "https://zingthing.ptechwebs.com/api/job-post-subscription-list"
      );
      const json = await response.json();
      console.log("HARDIK HARDIK", json.data);
      setSbscriptionAmount(json.data[0].job_post_rupees);
      const expirationDate = moment(moment().format("YYYY-MM-DD")).add(
        Number(json.data[0].job_post_days),
        "days"
      );
      console.log("object", moment(expirationDate).format("DD-MM-YYYY"));
      setSbscriptionDayes(moment(expirationDate).format("DD-MM-YYYY"));
      setSbscriptionInDayes(json.data[0].job_post_days);
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
      data.append("business_id", BusinnesTypevalue ? BusinnesTypevalue : "");
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
      console.log(json);
      Alert.alert(
        "CONGRATULATIONS",
        `YOUR REQUEST FOR JOB POST WITH NUMBER ${sbscriptionDayes} IS POSTED SUCCESSFULLY AND YOU WILL RECEIVE THE UPDATE NOTIFICATION IN CASE ANY CANDIDATE FITS YOUR JOB POST. YOUR JOB POST WILL REMAIN LIVE TILL ${sbscriptionDayes}. FOR ANY FURTHER ASSISTANCE, PLEASE CONTACT US ON 9723233194 / 9737333194 / 9824333194 / 9979333194 WITH YOUR JOB POST NUMBER.`,
        [
          {
            text: "OK",
            onPress: (password) => navigation.navigate(SCREENS.DashBoard),
          },
        ]
      );
    } catch (err: any) {
      Alert.alert(err);
    }
  };
  const setDropdownOpenFunction = (index) => {
    setOpen(index == 0 ? !open : false);
    setJobTitleOpen(index == 1 ? !JobTitleopen : false);
    setBusinnesTypeOpen(index == 2 ? !BusinnesTypeopen : false);
    setWorkingTimeOpen(index == 3 ? !WorkingTimeopen : false);
    setGenderListOpen(index == 4 ? !GenderListopen : false);
    setEducationLineOpen(index == 5 ? !EducationLineopen : false);
    setQualificationOpen(index == 6 ? !Qualificationopen : false);
    setAddSkillsOpen(index == 7 ? !AddSkillsopen : false);
    setWorkExperienceOpen(index == 8 ? !WorkExperienceopen : false);
    setVaccanciesOpen(index == 9 ? !Vaccanciesopen : false);
    setAgeListOpen(index == 10 ? !AgeListopen : false);
    setWorkPlaceOpen(index == 11 ? !WorkPlaceopen : false);
    setSalaryRangeOpen(index == 12 ? !SalaryRangeopen : false);
    setLocalityOpen(index == 13 ? !Localityopen : false);
    setAdditionalFacilityOpen(index == 14 ? !AdditionalFacilityopen : false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EFFDFD",
        justifyContent: "center",
      }}
    >
      <OnBordingHeader label={"Post Job"} Back={false} />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        // keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: RFValue(40),
          backgroundColor: COLORS.White,
          paddingVertical: width * 0.034,
          marginVertical: width * 0.04,
          marginHorizontal: RFValue(12),
          paddingHorizontal: width * 0.04,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            color: COLORS.TextBlack,
            fontWeight: "600",
          }}
        >
          Job Type * :{" "}
        </Text>
        <DropDownPicker
          listMode="SCROLLVIEW"
          scrollViewProps={{ nestedScrollEnabled: true }}
          open={open}
          value={value}
          placeholder="Select Job Type (Single)"
          placeholderStyle={{
            color: COLORS.SperatorColor,
            fontWeight: "500",
          }}
          items={items}
          dropDownDirection="BOTTOM"
          setOpen={() => setDropdownOpenFunction(0)}
          setValue={setValue}
          listItemLabelStyle={{
            color: COLORS.Black,
            backgroundColor: COLORS.White,
          }}
          style={{
            marginVertical: width * 0.02,
            borderWidth: 0,
            elevation: 4,
            zIndex: 1000,
          }}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          setItems={setItems}
        />
        <Text
          style={{
            color: COLORS.TextBlack,
            marginTop: RFValue(10),
            fontWeight: "600",
          }}
        >
          Job Title :
        </Text>
        <DropDownPicker
          open={JobTitleopen}
          listMode="SCROLLVIEW"
          scrollViewProps={{ nestedScrollEnabled: true }}
          placeholder="Select Job Title (Single)"
          placeholderStyle={{
            color: COLORS.SperatorColor,
            fontWeight: "500",
          }}
          value={JobTitlevalue}
          items={JobTitleitems}
          setOpen={() => setDropdownOpenFunction(1)}
          setValue={setJobTitleValue}
          listItemLabelStyle={{
            color: COLORS.Black,
            backgroundColor: COLORS.White,
          }}
          style={{
            marginVertical: width * 0.02,
            borderWidth: 0,
            elevation: 4,
            zIndex: 999,
          }}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          setItems={setItems}
        />
        {value == 2 && (
          <>
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Business Type :
            </Text>
            <DropDownPicker
              max={5}
              multiple={true}
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={BusinnesTypeopen}
              placeholder="Select Business Type ( Max 5)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              value={BusinnesTypevalue}
              items={BusinnesTypeitems}
              setOpen={() => setDropdownOpenFunction(2)}
              setValue={setBusinnesTypeValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 998,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <FlatList
              data={[1]}
              scrollEnabled={false}
              style={{ flexWrap: "wrap", marginTop: RFValue(5) }}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) =>
                BusinnesTypevalue != null ? (
                  typeof BusinnesTypevalue == "number" ? (
                    <Text style={styles.itemText}>
                      {BusinnesTypeitems[BusinnesTypevalue - 5].label}
                    </Text>
                  ) : (
                    BusinnesTypevalue.map((items, indexx) => (
                      <Text style={{ maxHeight: RFValue(250) }}>
                        {BusinnesTypeitems?.[items - 5]?.label}
                      </Text>
                    ))
                  )
                ) : null
              }
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Job Time/Working Time :
            </Text>
            <DropDownPicker
              multiple={true}
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={WorkingTimeopen}
              value={WorkingTimevalue}
              placeholder="Select Time ( Multiple)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              items={WorkingTimeitems}
              setOpen={() => setDropdownOpenFunction(3)}
              setValue={setWorkingTimeValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 997,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <FlatList
              data={[1]}
              horizontal={true}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) =>
                WorkingTimevalue != null ? (
                  typeof WorkingTimevalue == "number" ? (
                    <Text style={styles.itemText}>
                      {WorkingTimeitems[WorkingTimevalue - 1].label},{" "}
                    </Text>
                  ) : (
                    WorkingTimevalue.map((items, indexx) => (
                      <Text style={styles.itemText}>
                        {WorkingTimeitems?.[items - 1]?.label},{" "}
                      </Text>
                    ))
                  )
                ) : null
              }
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Gender :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={GenderListopen}
              value={GenderListvalue}
              items={GenderListitems}
              setOpen={() => setDropdownOpenFunction(4)}
              placeholder="Select Gender (Single)"
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
                zIndex: 996,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />

            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Line of Education :
            </Text>
            <DropDownPicker
              max={3}
              multiple={true}
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={EducationLineopen}
              value={EducationLinevalue}
              dropDownDirection="BOTTOM"
              placeholder="Select Education ( Max 3)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              items={EducationLineitems}
              setOpen={() => setDropdownOpenFunction(5)}
              setValue={setEducationLineValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 995,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <FlatList
              data={[1]}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) =>
                EducationLinevalue != null ? (
                  typeof EducationLinevalue == "number" ? (
                    <Text style={styles.itemText}>
                      {EducationLineitems[EducationLinevalue - 1].label},{" "}
                    </Text>
                  ) : (
                    EducationLinevalue.map((items, indexx) => (
                      <Text style={styles.itemText}>
                        {EducationLineitems?.[items - 1]?.label},{" "}
                      </Text>
                    ))
                  )
                ) : null
              }
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Qualification :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={Qualificationopen}
              value={Qualificationvalue}
              items={Qualificationitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Qualification (Single)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(6)}
              setValue={setQualificationValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 994,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Additional Skills :
            </Text>
            <DropDownPicker
              max={3}
              multiple={true}
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={AddSkillsopen}
              value={AddSkillsvalue}
              items={AddSkillsitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Skills ( Max 3)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(7)}
              setValue={setAddSkillsValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 993,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <FlatList
              data={[1]}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) =>
                AddSkillsvalue != null ? (
                  typeof AddSkillsvalue == "number" ? (
                    <Text style={styles.itemText}>
                      {AddSkillsitems[AddSkillsvalue - 1].label},{" "}
                    </Text>
                  ) : (
                    AddSkillsvalue.map((items, indexx) => (
                      <Text style={styles.itemText}>
                        {AddSkillsitems?.[items - 1]?.label},{" "}
                      </Text>
                    ))
                  )
                ) : null
              }
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Work Experience Years :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={WorkExperienceopen}
              value={WorkExperiencevalue}
              items={WorkExperienceitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Experience (Single)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(8)}
              setValue={setWorkExperienceValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 992,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              NO. of Vacancies :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={Vaccanciesopen}
              value={Vaccanciesvalue}
              items={Vaccanciesitems}
              dropDownDirection="BOTTOM"
              placeholder="10 (Single)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(9)}
              setValue={setVaccanciesValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 991,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Age Group :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={AgeListopen}
              value={AgeListvalue}
              items={AgeListitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Age Group"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(10)}
              setValue={setAgeListValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 990,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Work Place :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={WorkPlaceopen}
              value={WorkPlacevalue}
              items={WorkPlaceitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Work Place"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(11)}
              setValue={setWorkPlaceValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 989,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Salary Range :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={SalaryRangeopen}
              value={SalaryRangevalue}
              items={SalaryRangeitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Range"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(12)}
              setValue={setSalaryRangeValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 988,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Locality :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              open={Localityopen}
              value={Localityvalue}
              items={Localityitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Locality"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(13)}
              setValue={setLocalityValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 987,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <Text
              style={{
                color: COLORS.TextBlack,
                marginTop: RFValue(10),
                fontWeight: "600",
              }}
            >
              Additional Facilities :
            </Text>
            <DropDownPicker
              listMode="SCROLLVIEW"
              scrollViewProps={{ nestedScrollEnabled: true }}
              multiple={true}
              open={AdditionalFacilityopen}
              value={AdditionalFacilityvalue}
              items={AdditionalFacilityitems}
              dropDownDirection="BOTTOM"
              placeholder="Select Additional Facilites (Multiple Allowed)"
              placeholderStyle={{
                color: COLORS.SperatorColor,
                fontWeight: "500",
              }}
              setOpen={() => setDropdownOpenFunction(14)}
              setValue={setAdditionalFacilityValue}
              listItemLabelStyle={{ color: COLORS.Black }}
              style={{
                marginVertical: width * 0.02,
                borderWidth: 0,
                elevation: 4,
                zIndex: 986,
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              setItems={setItems}
            />
            <FlatList
              data={[1]}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) =>
                AdditionalFacilityvalue != null ? (
                  typeof AdditionalFacilityvalue == "number" ? (
                    <Text style={styles.itemText}>
                      {
                        AdditionalFacilityitems[AdditionalFacilityvalue - 4]
                          .label
                      }
                      ,{" "}
                    </Text>
                  ) : (
                    AdditionalFacilityvalue.map((items, indexx) => (
                      <Text style={styles.itemText}>
                        {AdditionalFacilityitems?.[items - 4]?.label},{" "}
                      </Text>
                    ))
                  )
                ) : null
              }
            />
          </>
        )}
        <Text
          style={{
            color: COLORS.TextBlack,
            marginTop: RFValue(10),
            fontWeight: "600",
          }}
        >
          Additonal Message :
        </Text>
        <TextInput
          value={CandidateMessagevalue}
          onChange={(text) => setCandidateMessagevalue(text)}
          placeholderTextColor={COLORS.SperatorColor}
          textAlignVertical="top"
          style={{
            width: "100%",
            height: RFValue(130),
            marginVertical: width * 0.02,
            borderWidth: 1,
            borderColor: COLORS.SperatorColor,
            borderRadius: 8,
            zIndex: 985,
            padding: RFValue(8),
            color: COLORS.Black,
          }}
          placeholder="Enter Candidate Message"
        />
        <Text
          style={{
            color: COLORS.TextBlack,
            marginTop: RFValue(6),
            fontSize: RFValue(10),
            textAlign: "left",
          }}
        >
          {`On Click of Pay & Submit, You will be redirected to payments page to pay ₹${sbscriptionAmount} to make your job post active. This job post will be available for ${sbscriptionInDayes} days.\nThe best match from our database as soon as we have your required service provider`}
        </Text>
        <TouchableOpacity
          onPress={() => CheckValidation()}
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
            Pay & Submit Job Post
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PostJob;

const styles = StyleSheet.create({
  dropDownContainerStyle: {
    zIndex: 1000, // Ensures dropdown is above other elements
  },
});
