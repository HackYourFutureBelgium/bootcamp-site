import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../styles/constants';

const DottedGraphic = ({ amountWide, amountHigh, spacingX, spacingY, color, radius, ...rest }) => {
  const $circles = [];
  for (let yIncrement = 0; yIncrement < amountHigh; yIncrement += 1) {
    for (let xIncrement = 0; xIncrement < amountWide; xIncrement += 1) {
      const attributes = {
        key: `${yIncrement}-${xIncrement}`,
        cx: xIncrement * spacingX + radius,
        cy: yIncrement * spacingY + radius,
        r: radius,
        fill: color
      };
      $circles.push(<circle {...attributes} />);
    }
  }
  return (
    <svg height={amountHigh * spacingY} width={amountWide * spacingX} {...rest}>
      {$circles}
    </svg>
  );
};

DottedGraphic.defaultProps = {
  color: colors.pink,
  amountWide: 10,
  amountHigh: 6,
  spacingX: 42,
  spacingY: 36,
  radius: 4
};

DottedGraphic.propTypes = {
  color: PropTypes.string,
  amountWide: PropTypes.number,
  amountHigh: PropTypes.number,
  spacingX: PropTypes.number,
  spacingY: PropTypes.number,
  radius: PropTypes.number
};

export default DottedGraphic;
