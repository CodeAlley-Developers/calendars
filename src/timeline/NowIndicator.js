import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { calcTimeOffset } from './helpers/presenter';
import { HOUR_BLOCK_HEIGHT } from './Packer';

const NowIndicator = (props) => {
  const { styles, width, left } = props;
  const indicatorPosition = calcTimeOffset(HOUR_BLOCK_HEIGHT);

const nowIndicatorStyle = useMemo(() => {
    return [styles.nowIndicator, { top: indicatorPosition, left }];
  }, [indicatorPosition, left, styles.nowIndicator]);

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: false });

  return (
    <View style={nowIndicatorStyle}>
      <View style={[styles.nowIndicatorLine, ]}  />
      <View style={styles.nowIndicatorDot}></View>
      <View style={styles.connectingLine} />
      <View style={styles.nowIndicatorKnob}>
        <Text style={styles.nowIndicatorTime}>{currentTime}</Text>
      </View>
    </View>
  );
};

export default NowIndicator;