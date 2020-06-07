import React, { ReactNode } from 'react';

import 'components/LabelBlock/styles.scss';

interface LabelBlockInterface {
  children: ReactNode,
  title?: string,
};

const LabelBlock = ({ title, children }: LabelBlockInterface) => (
  <div className="label-block">
    {title && <h4>{title}</h4>}
    <div className="label-block-content">
      {children}
    </div>
  </div>
);

export default LabelBlock;
