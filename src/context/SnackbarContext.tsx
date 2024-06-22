'use client';

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
    createContext, useContext, useState, ReactNode,
} from 'react';
import { Snackbar, Alert } from '@mui/material';

type SnackbarContextType = {
    showSnackbar: (msg: string, severity?: 'success' | 'error' | 'warning' | 'info') => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};

export function SnackbarProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');

    const showSnackbar = (msg: string, severity: 'success' | 'error' | 'warning' | 'info' = 'success') => {
        setMessage(msg);
        setSeverity(severity);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} variant="standard" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
}
