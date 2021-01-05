import React from 'react';
import { Head } from '@react-ssr/nestjs-express';

type AboutProps = {
  message: string;
}

const About: React.FC<AboutProps> = ({message}) => {

  return (
    <React.Fragment>
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
  <p>{message}</p>
  <a href="/">Go to the home page</a>
    </React.Fragment>
  );
};

export default About;
