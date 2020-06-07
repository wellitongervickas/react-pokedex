import React, {
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';

import './styles.scss';

interface LoadingInterface {
  label?: string,
  open?: boolean,
};

const Loading = ({ label, open }: LoadingInterface) => {
  const [show, setShow] = useState(true);
  const [classes, setClasses] = useState(['loading']);


  useEffect(() => {
    if (open) {
      setClasses([...classes, 'loading-out']);

      setTimeout(() => {
        setShow(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return show ? (
    <div className={cn(classes)}>
      <div className="loading-top"></div>
      <div className="loading-ball">
        <div className="loading-ball-rounded">
          <div className="loading-ball-rounded-child" />
        </div>
      </div>
      <div className="loading-bottom">
        <div className="loading-progress-label">
          <span>{label}</span>
        </div>
      </div>
    </div>
  ) : null;
};

Loading.defaultProps = {
  label: 'Loading...',
  open: false,
};

export default Loading;
