import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import colors from '../../../../colors';

const SvgComponent = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <Circle cx={16} cy={16} r={16} fill={colors.primary} />
    <Path
      d="M19.5 28.5s-.9-1.3-.1-4.2c.9-.8 1.7-1.8 2.3-3.2.2-.4.4-.9.5-1.4.6.1 1-.2 1.3-2.1.6-2 .1-2.3-.5-2.5v-.3c0-7.8-3-9.6-6.8-9.6S9.4 7 9.4 14.9v.2c-.6.1-1.1.5-.7 2.5.3 2 .7 2.2 1.3 2.1.2.5.3 1 .5 1.4.7 1.5 1.6 2.6 2.5 3.4.7 2.7 0 4 0 4-1.3 0-5.1.3-6.2.5.1 0 .1.1.2.2C9.5 31 12.6 32 16 32c3.5 0 6.7-1.1 9.3-3-.8-.1-4.5-.5-5.8-.5z"
      fill={colors.accentLight}
    />
  </Svg>
);

export default SvgComponent;
