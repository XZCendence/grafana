import { IconName } from '@grafana/data';

import { Icon } from '../Icon/Icon';

import { PercentChangeStyles } from './BigValueLayout';

export interface Props {
  percentChange: number;
  percentChangeDecimals?: number;
  styles: PercentChangeStyles;
}

export const PercentChange = ({ percentChange, styles, percentChangeDecimals = 2 }: Props) => {
  let percentChangeIcon: IconName | undefined = undefined;
  if (percentChange > 0) {
    percentChangeIcon = 'arrow-up';
  } else if (percentChange < 0) {
    percentChangeIcon = 'arrow-down';
  }

  return (
    <div style={styles.containerStyles}>
      {percentChangeIcon && (
        <Icon name={percentChangeIcon} height={styles.iconSize} width={styles.iconSize} viewBox="6 6 12 12" />
      )}
      {percentChangeString(percentChange, percentChangeDecimals)}
    </div>
  );
};

// percentChange is expected to be a value between 0-100
export const percentChangeString = (percentChange: number, percentChangeDecimals: number): string => {
  return (percentChange / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: percentChangeDecimals,
    maximumFractionDigits: percentChangeDecimals,
  });
};
