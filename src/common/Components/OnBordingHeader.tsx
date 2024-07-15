import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {IMAGE} from '../Utils/image';
import {COLORS} from '../Utils/Colors';
import {FONTS} from '../Utils/fonts';
import {useNavigation} from '@react-navigation/native';
const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;
const OnBordingHeader = ({label, Back = true}: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.PrimeryColor}
      />
      <View style={styles.headerView}>
        {Back && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Image source={IMAGE.Back} style={styles.backImge} />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: COLORS.PrimeryColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: RFPercentage(2),
    paddingHorizontal: RFValue(20),
  },
  headerText: {
    textAlign: 'center',
    color: COLORS.White,
    fontSize: RFValue(16),
    fontFamily: FONTS.ExtraBold,
    fontWeight: 'bold',
    width: ScreenWidth - RFValue(64),
  },
  backImge: {
    resizeMode: 'contain',
    height: RFValue(24),
    width: RFValue(24),
  },
});

export default OnBordingHeader;
