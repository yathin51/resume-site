import React, { createContext, useContext, useState, useEffect } from 'react';
import locales from './locales';

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState('en');

    useEffect(() => {
        try {
            const saved = localStorage.getItem('locale');
            if (saved && locales[saved]) setLocale(saved);
        } catch (e) { }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('locale', locale);
        } catch (e) { }
    }, [locale]);

    const t = (path, fallback = '') => {
        const parts = path.split('.');
        let cur = locales[locale] || {};
        for (const p of parts) {
            cur = cur && cur[p];
            if (cur === undefined) return fallback;
        }
        return cur;
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}
