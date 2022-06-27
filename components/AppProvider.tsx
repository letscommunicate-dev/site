import { createContext, useContext } from 'react'

const AppContext = createContext({});

export function AppProvider(props: any) {
    const {value, children} = props

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(): any {
    return useContext(AppContext);
}
