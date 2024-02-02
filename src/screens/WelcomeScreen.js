import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex flex-1 justify-end">
      {/* background img */}
      <Image
        source={require("../../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />
      {/* content & gradient */}
      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={['transparent', 'rgba(3,105,161,0.9)']}
          locations={[0, 1]}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        {/* text */}
        <View className="space-y-3">
          <Text
            className="text-white font-bold text-5xl"
            style={{ fontSize: wp(10) }}
          >
            Traveling made easy!
          </Text>
          <Text
            className="text-neutral-200 font-medium"
            style={{ fontSize: wp(4) }}
          >
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        {/* buttons */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ backgroundColor: theme.bg(1) }}
          className="mx-auto p-3 px-12 rounded-full shadow-lg"
        >
          <Text
            className="text-white font-bold w-[80px] text-center"
            style={{ fontSize: wp(5.5) }}
          >
            Let's go!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen;
