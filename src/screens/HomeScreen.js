import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destinations from "../components/Destinations";

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-4 mt-3"}
      >
        {/* avatar */}
        <View className="mx-4 flex-row justify-between items-center">
          <Text
            // style={{ fontSize: wp(6) }}
            className="font-bold text-neutral-700 w-[200px] text-[32px]"
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-4 mb-3">
          <View className="flex-row items-center bg-neutral-100 rounded-full px-4 py-2 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>

         {/* categories */}
         <View className="mb-4">
          <Categories />
        </View>

        {/* sort categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
