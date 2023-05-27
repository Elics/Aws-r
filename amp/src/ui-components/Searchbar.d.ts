/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchbarOverridesProps = {
    Searchbar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 84"?: PrimitiveOverrideProps<ViewProps>;
    "iconamoon:search-thin"?: PrimitiveOverrideProps<ViewProps>;
    Vector727?: PrimitiveOverrideProps<IconProps>;
    "solar:camera-broken"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector730?: PrimitiveOverrideProps<IconProps>;
    Vector731?: PrimitiveOverrideProps<IconProps>;
    "heroicons:microphone"?: PrimitiveOverrideProps<ViewProps>;
    Vector733?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchbarOverridesProps | undefined | null;
}>;
export default function Searchbar(props: SearchbarProps): React.ReactElement;
