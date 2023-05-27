/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="74px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <View
        width="240px"
        height="74px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Rectangle 86")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="224px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.86%"
        bottom="14.86%"
        left="3.33%"
        right="3.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="I’m feeling creative"
        {...getOverrideProps(overrides, "I\u2019m feeling creative")}
      ></Text>
    </View>
  );
}
