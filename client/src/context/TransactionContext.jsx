import React, { useEffect, useState } from 'react';
import { Contract, ethers } from 'ethers';
import { parseUnits } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();






const initializeProvider = async () => {
    const { ethereum } = window;
  
    let signer = null;
    let provider;
  
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
    }
  
    return { provider, signer };
  };
  
  const createEthereumContract = async () => {
    const { provider, signer } = await initializeProvider();
  
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log({ provider });
    console.log({ signer });
    console.log({ transactionsContract });
    console.log(transactionsContract);
  
    return transactionsContract;
  };

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState();
    const [formData, setformData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [IsLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };



    console.log(contractABI);











    



    const getAllTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const transactionsContract = await createEthereumContract();
            const availableTransactions = await transactionsContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleDateString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount) / 1e9
            }))

            console.log("Structured data", structuredTransactions);

            setTransactions(structuredTransactions);
            console.log(availableTransactions);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }



    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('please Install metamask');

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                getAllTransaction();

            } else {
                console.log('No accounts found: Please connect to Metamask Wallet');
            }
            console.log(accounts);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };


    const checkIfTransactionsExist = async () => {

        try {
            const transactionsContract = await createEthereumContract();
            const newTransactionCount = await transactionsContract.getTransactionCount();

            localStorage.setItem("transactionCount", newTransactionCount)
            window
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please install metamask ');

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
            await createEthereumContract(); // You might want to use the result if needed
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('please install metamask ');

            const { addressTo, amount, keyword, message } = formData;
            const { provider, signer } = await initializeProvider();

            const transactionsContract = await createEthereumContract();
            console.log(transactionsContract);

            const parsedAmount = parseUnits(amount, "gwei");
            let tx, receipt;

            tx = await signer.sendTransaction({
                to: addressTo,
                value: parsedAmount
            });

            // Often you may wish to wait until the transaction is mined
            receipt = await tx.wait();
            console.log("yes I am here", receipt);

            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash} `);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash} `);

            const newTransactionCount = await transactionsContract.getTransactionCount();
            console.log(newTransactionCount);
            setTransactionCount(Number(newTransactionCount));
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };




    useEffect(() => {
        const fetchData = async () => {
          await initializeProvider(); // Call initializeProvider directly inside useEffect
          checkIfWalletIsConnected();
          checkIfTransactionsExist();
        };
    
        fetchData();
      }, []);
    

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, sendTransaction, handleChange, transactions, IsLoading }} >
            {children}
        </TransactionContext.Provider>
    );
};
