import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlayButton = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    // style={{backgroundColor:'yellow'}}
    {...props}
  >
    <Path
      fill="#865DFF"
      fillRule="evenodd"
      d="M6.667 40.02C6.667 21.62 21.628 6.666 40 6.666S73.333 21.62 73.333 40.019c0 18.36-14.961 33.314-33.333 33.314S6.667 58.38 6.667 40.02Zm45.56 3.373c.353-.354.804-.9.9-1.03a3.872 3.872 0 0 0 .773-2.344c0-.936-.29-1.804-.837-2.511a12.69 12.69 0 0 1-.247-.265c-.214-.233-.521-.568-.815-.861-2.638-2.83-9.524-7.461-13.127-8.876-.547-.222-1.93-.707-2.67-.74-.709 0-1.384.161-2.028.483a4.171 4.171 0 0 0-1.801 1.994c-.226.579-.58 2.315-.58 2.347-.354 1.898-.547 4.985-.547 8.394 0 3.251.194 6.207.483 8.136.008.008.036.146.079.36.13.652.403 2.01.693 2.567.708 1.35 2.092 2.187 3.572 2.187h.128c.966-.033 2.993-.869 2.993-.9 3.41-1.416 10.135-5.822 12.837-8.748l.194-.193Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PlayButton