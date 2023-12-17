import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImgURL } from "../../../utils/helper";

const Company = ({ companyName, location, jobTitle, companyLogo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          resizeMode="contain"
          source={{
            uri: checkImgURL(companyLogo)
              ? companyLogo
              : "https://t3.ftcdn.net/jpg/04/87/40/60/360_F_487406068_oUBuqBaJC747gByiYQEbCWvtzB9Zmetn.jpg",
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle ? jobTitle : "no name"}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
