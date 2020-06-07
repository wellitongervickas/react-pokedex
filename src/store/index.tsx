import React, {
  useState,
  ReactNode,
  useCallback,
} from 'react';

import pokemon from 'store/modules/pokemon';
import moduleGenerator from 'store/module-generator';

interface StoreContextProviderInterface {
  children: ReactNode,
}

interface StoreContextInterface {
  states: any,
  setStoreState: React.Dispatch<React.SetStateAction<any>>,
  setStore: Function,
};

const StoreContext = React.createContext<StoreContextInterface>({
  setStoreState: () => {},
  setStore: () => {},
  states: {},
});

const StoreContextProvider = ({ children }: StoreContextProviderInterface) => {
  const [storeStates, setStoreState] = useState({
    pokemon,
  });

  const setStore = useCallback((store: string, payload: any) => {
    try {
      setStoreState((r: any) => {
        const [prefix, sufix] = store.split('/');

        if (sufix === 'clear') {
          r[prefix] = {
            ...moduleGenerator(),
          };

        } else {
          r[prefix][sufix] = payload;
        }

        return { ...r };
      });
    } catch (error) {
      console.error('Store handler error:', error);
    }
  }, [setStoreState]);

  return (
    <StoreContext.Provider
      value={{
        setStore,
        setStoreState,
        states: {
          ...storeStates,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export {
  StoreContextProvider,
};

export default StoreContext;
