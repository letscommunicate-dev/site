import { createContext, useContext } from 'react'
import Page from '../defs/page';

export interface IAppContext {
    pages?: Page[],
}

const AppContext = createContext<IAppContext>({});

export function AppProvider(props: any) {
    const {value, children} = props

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(): IAppContext {
    return useContext<IAppContext>(AppContext);
}
