import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImgURL } from "../../../../utils/helper";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return item ? (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImgURL(item?.employer_logo)
              ? item?.employer_logo
              : "https://t3.ftcdn.net/jpg/04/87/40/60/360_F_487406068_oUBuqBaJC747gByiYQEbCWvtzB9Zmetn.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_company_type}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item?.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <Text>Loading</Text>
  );
};

export default PopularJobCard;
