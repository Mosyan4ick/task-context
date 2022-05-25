import { ReactElement } from 'react';
import { useContext } from 'react';
import React from 'react';

type Theme = 'light' | 'dark';
const newTheme = React.createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    const themeValue = props.theme;
    return (
        <newTheme.Provider value={themeValue}>
            {props.children};
        </newTheme.Provider>
    );
}

export function useTheme(): Theme {
    const themeValue = useContext(newTheme);
    return themeValue;
}
