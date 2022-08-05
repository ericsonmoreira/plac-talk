import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const JobIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={75} height={75} viewBox="0 0 75 75" fill="none" {...props}>
      <Path
        d="M34.706 59.706c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM66.535 66.535L52.94 52.94"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M39.565 30.286v.5h4.318v11.735a3.099 3.099 0 01-3.098 3.099H27.83a3.099 3.099 0 01-3.099-3.099V30.786h4.318v-1.94a5.264 5.264 0 015.258-5.257 5.264 5.264 0 015.258 5.258v1.44zm-2.379.5h.5v-1.94a3.382 3.382 0 00-3.379-3.378 3.382 3.382 0 00-3.379 3.379v1.94h6.258zm-.14 2.379a1.58 1.58 0 103.16 0 1.58 1.58 0 00-3.16 0zm-8.637 0a1.58 1.58 0 103.16 0 1.58 1.58 0 00-3.16 0z"
        stroke="#000"
      />
    </Svg>
  );
};

export default JobIcon;
