import React, { ReactEventHandler } from 'react';
import cn from 'classnames';
import 'components/Pokemon/Tabs/styles.scss';

interface TabsNavInterface  {
  active: boolean,
  title: string,
  onClick: ReactEventHandler,
}

const TabsNav = ({ active, title, onClick }: TabsNavInterface) => (
  <h3
    onClick={onClick}
    className={cn('tabs-nav-item', {
      'tabs-nav-item-active': active,
    })}
  >
    {title}
  </h3>
);

export default TabsNav;
