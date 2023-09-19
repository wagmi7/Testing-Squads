import MainLayout from '@/Layout/Main.layout';
import { Button, Heading, Text, Icon, Link } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';

const Home = () => {
  return (
    <MainLayout>
      <Heading size="4xl">
        Creating Solana DAO on squad <br />
        🚀
      </Heading>
      <Text fontSize="lg" maxW="2xl" mt={4}>
        An opinionated Next.js template for building Solana applications pre
        configured with Chakra UI, Next.js, Solana wallet adapter, ESlint,
        Prettier, and more.
      </Text>

    </MainLayout>
  );
};

export default Home;
