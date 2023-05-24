import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps {
    id: number;
    description: string,
    amount: number,
    type: string,
    createdAt: string,
    category: string,
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

interface TransactionsContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction : TransactionInput) => Promise<void>;
}

export function TransactionProvider({children} : TransactionsProviderProps){

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput : TransactionInput){
        const response = await api.post('/transactions',{...transactionInput,createdAt: new Date()})
        const { transaction } = response.data;
        setTransactions([...transactions, transaction])
    }

    return(
        <TransactionsContext.Provider value={{
            transactions,
            createTransaction
        }}>
        {children}
        </TransactionsContext.Provider>
    );

}
