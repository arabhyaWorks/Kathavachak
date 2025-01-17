// import * as React from "react"
// import Svg, { Path } from "react-native-svg"

// const AppleLogo = (props: any) => (
//     <Svg
//         width={17}
//         height={20}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}
//     >
//         <Path
//             d="M13.958 10.625c.028 3.027 2.655 4.034 2.684 4.047-.022.071-.42 1.435-1.383 2.845-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.301-.794-1.53 0-2.009.769-3.277.819-1.315.05-2.317-1.318-3.157-2.532-1.718-2.483-3.03-7.016-1.268-10.076.875-1.52 2.44-2.482 4.138-2.507 1.292-.025 2.511.869 3.301.869s2.271-1.075 3.829-.917c.652.027 2.482.263 3.658 1.984-.095.059-2.185 1.275-2.162 3.805Zm-2.517-7.432c.699-.845 1.169-2.022 1.04-3.193-1.006.04-2.223.67-2.945 1.516-.648.748-1.214 1.946-1.061 3.093 1.122.087 2.268-.57 2.966-1.416Z"
//             fill="#000"
//         />
//     </Svg>
// )

// export default AppleLogo

import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const AppleLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h23v23H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00333)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVFOTFGQTFGREVEQTExRUI4QUI5OUJGRTQ1NjlDMzkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVFOTFGQTIwREVEQTExRUI4QUI5OUJGRTQ1NjlDMzkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OERFNDNDRTRERUNEMTFFQjhBQjk5QkZFNDU2OUMzOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUU5MUZBMUVERURBMTFFQjhBQjk5QkZFNDU2OUMzOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5eBom0AAAUlklEQVR42uzd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"
        id="b"
        width={300}
        height={300}
      />
    </Defs>
  </Svg>
)
export default AppleLogo
