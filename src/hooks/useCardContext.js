import { useContext } from 'react';
import { CardContext } from '../contexts/CardContext';

export function useCardContext() {
    return useContext(CardContext); 
};