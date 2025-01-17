import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../utils/colors/colors"

const EyeOpen = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={20}
        viewBox="0 96 960 960"
        width={20}
        fill={Colors.Disable2}
        {...props}
    >
        <Path d="M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Z" />
    </Svg>
)

export default EyeOpen
