import { HexColorPicker } from "react-colorful";
import styled from "@emotion/styled";

const CustomColorPicker = styled(HexColorPicker)`
  &.react-colorful {
    width: 100%;
    height: 200px;
  }

  & .react-colorful__hue {
    height: 30px;
  }
`;

export default CustomColorPicker;
