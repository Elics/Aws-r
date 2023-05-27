/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Pract(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="416px"
      height="120px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Pract")}
      {...rest}
    >
      <View
        width="416px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,253,253,1)"
        {...getOverrideProps(overrides, "Rectangle 82")}
      ></View>
      <Icon
        width="100px"
        height="100px"
        viewBox={{ minX: 0, minY: 0, width: 100, height: 100 }}
        paths={[
          {
            d: "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="8.33%"
        left="2.88%"
        right="73.08%"
        {...getOverrideProps(overrides, "Ellipse 16")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="268px"
        height="50px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19.17%"
        bottom="39.17%"
        left="30.53%"
        right="5.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Yohan Lemur"
        {...getOverrideProps(overrides, "Yohan Lemur")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="200"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="16.94318199157715px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="197px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="59.17%"
        bottom="8.33%"
        left="40.38%"
        right="12.26%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Computer Science"
        {...getOverrideProps(overrides, "Computer Science")}
      ></Text>
    </View>
  );
}
