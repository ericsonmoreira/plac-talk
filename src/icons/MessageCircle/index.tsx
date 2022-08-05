import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MessageCircle: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={71} height={71} viewBox="0 0 71 71" fill="none" {...props}>
      <Path
        d="M62.02 33.963a24.75 24.75 0 01-2.658 11.223 25.103 25.103 0 01-22.445 13.88c-3.898.01-7.744-.9-11.223-2.657L8.86 62.019l5.611-16.833a24.75 24.75 0 01-2.658-11.223 25.103 25.103 0 0113.881-22.445A24.749 24.749 0 0136.917 8.86h1.476A25.044 25.044 0 0162.02 32.487v1.476z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MessageCircle;
