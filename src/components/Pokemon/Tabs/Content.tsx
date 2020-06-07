import React, { ReactNode } from 'react';
import cn from 'classnames';
import 'components/Pokemon/Tabs/styles.scss';

interface TabsContentInterface  {
  children: ReactNode,
  active: boolean,
}

const TabsContent = ({ children, active }: TabsContentInterface) => (
  <div
    className={cn('tabs-content-item', {
      'tabs-content-item-active': active,
    })}
  >
    {children}
  </div>
);

export default TabsContent;
