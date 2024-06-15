import { useSendTransaction, useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from './elements/Button';
import { useThemeContext } from '../contexts/ThemeContext';

function TransactionButton() {
  const { theme } = useThemeContext()
  const { data: hash, sendTransaction } = useSendTransaction();
  const { address, isConnected } = useAccount();

  const handleTransaction = async () => {
   
    const to = address;
    const value = ethers.parseEther("0.01");
    sendTransaction({ to, value });
  };

  return (
    <div>
      {isConnected ? (
        <div>
          <Button props={{ 
              onClick: () => handleTransaction(), 
              extendClasses: `${theme?.bgBtnPrimary}`,
          }}>
              Send Transaction
          </Button>
        </div>
      ) : (
        <div className='flex justify-end p-5'>
          <ConnectButton />
        </div>
        
      )}
    </div>
  );
}

export default TransactionButton;