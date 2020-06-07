import React, { ReactNode } from 'react';

import 'components/Badget/styles.scss';

interface BadgetInterface {
  children: ReactNode,
};

const Badget = ({ children }: BadgetInterface) => (
  <div className="badget">{children}</div>
);

export default Badget;
