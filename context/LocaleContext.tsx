import React, {useEffect, FC, useState, createContext} from 'react'
import {useRouter} from 'next/router'
import {Locale, isLocale} from 'translations/types'

interface ContextProps {
    readonly locale: Locale
    readonly setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<ContextProps>({
    locale: 'en',
    setLocale: () => null,
});

export const LocaleProvider: FC<{ lang: Locale }> = ({lang, children}) => {
    const [locale, setLocale] = useState(lang);
    const {pathname} = useRouter();
    const {query} = useRouter();

    // store the preference
    useEffect(() => {
        if (locale !== localStorage.getItem('locale')) {
            localStorage.setItem('locale', locale)
        }
    }, [locale]);

    useEffect(() => {
        // Check that initial route is OK
        if (pathname === '/[lang]') {
            window.location.href = `/${locale}/business`;
        }
    }, [])

    // sync locale value on client-side route changes
    useEffect(() => {
        if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
            setLocale(query.lang)
        }
    }, [query.lang, locale]);

    return <LocaleContext.Provider value={{locale, setLocale}}>{children}</LocaleContext.Provider>
};
