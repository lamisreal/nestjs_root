import React from 'react';
import { Head } from '@react-ssr/nestjs-express';

interface IndexProps {
  message: string;
}

const Index: React.FC<IndexProps> = ({message}) => {

  return (
    <React.Fragment>
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
      <p>{message}</p>
      <a href="/about">Go to the about page</a>
    </React.Fragment>
  );
};

export default Index;
