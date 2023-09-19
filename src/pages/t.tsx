import * as multisig from "@sqds/multisig";
import { useWallet } from '@solana/wallet-adapter-react';
import { Keypair, Connection } from '@solana/web3.js'; // Import Connection

async function CreateMultisig() {
  const { publicKey, wallet } = useWallet(); // Use the wallet hook correctly

  // Random Public Key that will be used to derive a multisig PDA
  const createKey = Keypair.generate().publicKey;

  // Creator should be a Keypair or a Wallet Adapter wallet
  const creator = Keypair.generate();

  // Derive the multisig PDA
  const multisigPda = multisig.getMultisigPda({
    createKey,
  })[0];

  const connection = new Connection('https://solana-devnet.g.alchemy.com/v2/7rwYXko3FDfNXH1zD-Y3o2Gd1LTlzTfU'); // Replace with your Solana cluster URL

  const signature = await multisig.rpc.multisigCreate({
    connection,
    createKey,
    creator: wallet?.adapter.publicKey, // Use wallet adapter's publicKey
    multisigPda,
    configAuthority: null,
    timeLock: 0,
    members: [
      {
        key: creator.publicKey,
        permissions: {
          // Define permissions correctly
          member: true,
          withdraw: true,
          // ... other permissions you need
        },
      },
      {
        key: publicKey, // Assuming you want to add the wallet's publicKey as a member
        permissions: {
          member: true,
          vote: true,
          // ... other permissions you need
        },
      },
    ],
    threshold: 2,
  });

  console.log("Multisig created with signature: ", signature);
}

export default CreateMultisig;
