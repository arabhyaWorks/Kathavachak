import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlaySymbol = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      fill="#865DFF"
      fillRule="evenodd"
      d="M2.75 16.508C2.75 8.918 8.922 2.75 16.5 2.75s13.75 6.169 13.75 13.758c0 7.573-6.172 13.742-13.75 13.742S2.75 24.081 2.75 16.508ZM21.544 17.9a5.45 5.45 0 0 0 .371-.425c.213-.279.319-.623.319-.967 0-.386-.12-.744-.346-1.036a5.173 5.173 0 0 1-.101-.11c-.089-.095-.215-.233-.336-.354-1.089-1.168-3.93-3.078-5.416-3.662-.225-.091-.796-.292-1.101-.305-.292 0-.57.066-.836.2a1.721 1.721 0 0 0-.744.822c-.092.238-.238.955-.238.968-.146.783-.226 2.056-.226 3.462 0 1.342.08 2.56.2 3.357.002.003.014.06.031.148.054.27.167.83.287 1.059a1.67 1.67 0 0 0 1.473.902h.053c.398-.013 1.234-.358 1.234-.372 1.407-.583 4.18-2.4 5.296-3.608l.08-.08Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PlaySymbol
