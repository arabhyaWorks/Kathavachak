import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FolderLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#060047"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.419 15.732c0 3.578-2.109 5.687-5.687 5.687H7.95c-3.587 0-5.7-2.109-5.7-5.687v-7.8c0-3.573 1.314-5.682 4.893-5.682h2a2.28 2.28 0 0 1 1.824.913l.913 1.214a2.29 2.29 0 0 0 1.826.913h2.83c3.587 0 4.911 1.826 4.911 5.477l-.028 4.965Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#060047"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.481 13.463h8.735M11.848 9.095v8.736"
    />
  </Svg>
)
export default FolderLogo
