import { Page } from '@framework/contentful/content/page';
import { createContext, useContext } from 'react'

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
