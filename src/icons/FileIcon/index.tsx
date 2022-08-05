import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const FileIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={71} height={71} viewBox="0 0 71 71" fill="none" {...props}>
      <Path
        d="M38.393 5.907H17.72a5.907 5.907 0 00-5.907 5.906v47.254a5.907 5.907 0 005.907 5.906h35.44a5.907 5.907 0 005.907-5.906V26.58L38.393 5.907z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M38.393 5.907V26.58h20.674"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FileIcon;
