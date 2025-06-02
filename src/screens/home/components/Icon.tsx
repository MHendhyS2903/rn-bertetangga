import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  path: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}

const Icon = ({ path, size = 24, color = '#000', onPress }: IconProps) => {
  const icon = (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d={path} fill={color} />
    </Svg>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        {icon}
      </TouchableOpacity>
    );
  }

  return icon;
};

export default Icon; 