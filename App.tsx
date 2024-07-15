//import liraries
import React, {createContext, useState} from 'react';
import {View, StyleSheet, LogBox, StatusBar} from 'react-native';
import Router from './src/screens/Router';
import {COLORS} from './src/common/Utils/Colors';
import Loader from './src/common/Components/Loader';
import Network from './src/common/Components/Network';

// create a component
export const LoaderContext = createContext();

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.White} barStyle={'dark-content'} />
      <LoaderContext.Provider value={[showLoader, setShowLoader]}>
        <Network />
        <Router />
        {/* <Home /> */}
        {showLoader && <Loader />}
      </LoaderContext.Provider>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;

// import {View, Text, Button} from 'react-native';
// import React, {useEffect, useState} from 'react';

// import {
//   BannerAd,
//   InterstitialAd,
//   RewardedAd,
//   AppOpenAd,
//   TestIds,
//   BannerAdSize,
//   AdEventType,
// } from 'react-native-google-mobile-ads';

// export default function App() {
//   const [interstitialAdds, setInterstitialAdds] = useState(null);
//   const [rewardedAdds, setRewardedAdds] = useState(null);

//   useEffect(() => {
//     initIntertatialADD();
//     // initIRewardedADD();
//   }, []);

//   const initIntertatialADD = async () => {
//     const interstitialAd = InterstitialAd.createForAdRequest(
//       TestIds.INTERSTITIAL,
//     );
//     console.log('checke:', interstitialAd);
//     interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
//       setInterstitialAdds(interstitialAd);
//       console.log('Inter LOADED');
//     });
//     interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
//       console.log('Inter CLOSED');
//       initIntertatialADD();
//     });
//   };

//   const showInterAd = async () => {
//     console.log(interstitialAdds);
//     if (interstitialAdds) {
//       interstitialAdds.show();
//     }
//   };

//   // const initIRewardedADD = async () => {
//   //   const rewardedAd = RewardedAd.createForAdRequest(TestIds.REWARDED);
//   //   rewardedAd.addAdEventListener(AdEventType.LOADED, () => {
//   //     setRewardedAdds(rewardedAd);
//   //     console.log('Rewarded LOADED');
//   //   });
//   //   rewardedAd.addAdEventListener(AdEventType.CLOSED, () => {
//   //     console.log('Rewarded CLOSED');
//   //     initIRewardedADD();
//   //   });
//   // };

//   const showRewardedAd = async () => {
//     if (rewardedAdds) {
//       rewardedAdds.show();
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <View style={{marginVertical: 20}}>
//         <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
//       </View>
//       <Button title="Show Interstitial Ad" onPress={showInterAd} />
//       <Button title="Show Rewarded Ad" onPress={showRewardedAd} />
//     </View>
//   );
// }
