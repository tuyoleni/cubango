'use client'
import { createContext, useState, useContext, ReactNode } from 'react';

const SearchContext = createContext<{ searchQuery: string, setSearchQuery: (query: string) => void } | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};