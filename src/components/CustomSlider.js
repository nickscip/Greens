import { Dimensions, View } from "react-native";
import {useState} from "react";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import styles from "./styles";
import CustomPaging from "./CustomPaging";
import React from 'react';

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    sliderWidth: 400,
    sliderHeight: 4,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
    onSnapToItem: (index) => setSlideIndex(index), //add this in 'settings' variable. 
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
      <CustomPaging data={data} activeSlide={slideIndex} />
    </View>
  );
}