/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PractOverridesProps = {
    Pract?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 82"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 16"?: PrimitiveOverrideProps<IconProps>;
    "Yohan Lemur"?: PrimitiveOverrideProps<TextProps>;
    "Computer Science"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PractProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PractOverridesProps | undefined | null;
}>;
export default function Pract(props: PractProps): React.ReactElement;
