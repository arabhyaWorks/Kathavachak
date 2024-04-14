import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Dimensions from "../../utils/dimension/dimensions"
const ProfileLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={140}//{Dimensions.WP_30_7}//120}
    height={45}
    fill="none"
    // style={{backgroundColor:'red'}}
    {...props}
  >
    <Path
      // stroke="#676D75"
      stroke= {props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.489}
      // fill={props.color}
      d="M61.061 12.725a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM69.651 22.725c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
      />
    <Path
      fill={props.color}
      // fill="#676D75"
      d="M49.027 36.809c0 .69-.238 1.266-.714 1.726-.469.453-1.187.68-2.156.68h-1.595v3.464h-1.084v-8.3h2.68c.936 0 1.647.227 2.131.68.492.452.738 1.035.738 1.75Zm-2.87 1.512c.604 0 1.048-.131 1.334-.393.286-.262.429-.635.429-1.12 0-1.023-.588-1.536-1.763-1.536h-1.595v3.049h1.595Zm5.3-1.107c.191-.374.461-.663.81-.87.358-.206.79-.31 1.299-.31v1.12h-.286c-1.215 0-1.822.659-1.822 1.977v3.548h-1.084v-6.525h1.084v1.06Zm6.206 5.573a3.374 3.374 0 0 1-1.667-.417 3.029 3.029 0 0 1-1.168-1.18c-.277-.515-.416-1.11-.416-1.785 0-.667.143-1.255.428-1.763.294-.516.691-.909 1.191-1.179.5-.278 1.06-.416 1.68-.416.619 0 1.178.138 1.678.416.5.27.893.66 1.18 1.167.293.508.44 1.1.44 1.775 0 .674-.15 1.27-.453 1.786a3.065 3.065 0 0 1-1.202 1.179 3.466 3.466 0 0 1-1.691.417Zm0-.953c.389 0 .754-.091 1.095-.274.342-.183.615-.456.822-.822.214-.365.321-.81.321-1.333 0-.524-.103-.969-.31-1.334a1.988 1.988 0 0 0-.809-.81 2.22 2.22 0 0 0-1.084-.274c-.397 0-.762.091-1.095.274a1.936 1.936 0 0 0-.786.81c-.199.365-.298.81-.298 1.334 0 .532.095.98.286 1.345.198.365.46.64.786.822.325.175.683.262 1.072.262Zm7.426-4.787h-1.37v5.632h-1.083v-5.632h-.845v-.893h.845v-.465c0-.73.187-1.262.56-1.596.381-.34.988-.512 1.822-.512v.905c-.477 0-.814.096-1.012.286-.19.183-.286.489-.286.917v.465h1.37v.893Zm1.823-1.953a.713.713 0 0 1-.524-.215.713.713 0 0 1-.214-.523c0-.207.072-.382.214-.525a.713.713 0 0 1 .524-.214.66.66 0 0 1 .5.215.713.713 0 0 1 .215.523.713.713 0 0 1-.214.524.66.66 0 0 1-.5.215Zm.524 1.06v6.525h-1.083v-6.525h1.084Zm2.931-2.287v8.812h-1.084v-8.812h1.084Zm7.801 5.3c0 .206-.012.424-.036.654h-5.215c.04.644.258 1.148.654 1.513.405.357.894.536 1.465.536.469 0 .858-.107 1.167-.322.318-.222.54-.516.667-.881h1.167a2.834 2.834 0 0 1-1.048 1.536c-.524.39-1.175.584-1.953.584-.619 0-1.175-.14-1.667-.417a2.971 2.971 0 0 1-1.143-1.18c-.278-.515-.417-1.11-.417-1.785 0-.675.135-1.267.405-1.775s.647-.897 1.131-1.167c.493-.278 1.056-.416 1.691-.416.62 0 1.167.134 1.644.404.476.27.841.643 1.095 1.12.262.468.393 1 .393 1.596Zm-1.12-.227c0-.413-.09-.766-.273-1.06a1.724 1.724 0 0 0-.75-.678 2.237 2.237 0 0 0-1.036-.239 2.03 2.03 0 0 0-1.406.524c-.38.35-.599.834-.654 1.453h4.12Z"
    />
  </Svg>
)
export default ProfileLogo