import React, {
  useCallback,
} from 'react';

import {
  useHistory,
} from 'react-router-dom';

import 'components/Header/styles.scss';

import { FaArrowLeft } from 'react-icons/fa';

export interface HeaderInterface {
  useNavigation: boolean,
}

const Header = ({ useNavigation }: HeaderInterface) => {
  const { push } = useHistory();

  const handleBack = useCallback(() => {
    push('/');
  }, [push])

  return (
    <div className="header">
      <div className="header-pokedex">
        <div className="header-pokedex-ball" />
        <div className="header-pokedex-ball-2" />
        <div className="header-pokedex-ball-3" />
      </div>
      {useNavigation && (
        <div
          className="header-navigation"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>Go back</span>
        </div>
      )}
    </div>
  )
};

Header.defaultProps = {
  useNavigation: true,
};

export default Header;
