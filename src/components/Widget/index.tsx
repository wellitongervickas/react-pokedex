import React, { ReactNode } from 'react';

import 'components/Widget/styles.scss';

interface WidgetInterface {
  children: ReactNode
}

const Widget = ({ children }: WidgetInterface) => (
  <div className="widget">{children}</div>
);

export default Widget;
