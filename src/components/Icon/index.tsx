import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  path: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ path, size = 24, color = '#000' }) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};

export default Icon; 