import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../utils/colors/colors"

const EyeClose = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={20}
        viewBox="0 96 960 960"
        width={20}
        fill={Colors.Disable2}
        {...props}
    >
        <Path d="M816 992 648 827q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40 556q20-52 55.5-101.5T182 360L56 234l42-43 757 757-39 44ZM480 726q14 0 30-2.5t27-7.5L320 499q-5 12-7.5 27t-2.5 30q0 72 50 121t120 49Zm278 40L629 637q10-16 15.5-37.5T650 556q0-71-49.5-120.5T480 386q-22 0-43 5t-38 16L289 296q35-16 89.5-28T485 256q143 0 261.5 81.5T920 556q-26 64-67 117t-95 93ZM585 593 443 451q29-11 60-4.5t54 28.5q23 23 32 51.5t-4 66.5Z" />
    </Svg>
)

export default EyeClose
