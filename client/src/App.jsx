import React, { useState, useEffect } from 'react';
import './index.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import vite from '/vite.svg';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      setData(data);
    };

    apiCall();
  }, []);

  return (
    <ApplicationContainer>
      <SectionContainer>
        <Image src={vite} />
        <CenteredText>
          <H2>Demonstration</H2>
          <Title>Full-stack application</Title>
          {data && (
            <Author>
              with ♥️ by {data.firstName} {data.lastName}
            </Author>
          )}
        </CenteredText>
      </SectionContainer>
    </ApplicationContainer>
  );
};

export default App;

const ApplicationContainer = tw.div`bg-indigo-200 h-screen`;
const SectionContainer = tw.div`max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8`;

const CenteredText = styled.div`
  ${tw`text-center`}
`;

const H2 = styled.h2`
  font-weight: 800;
  ${tw`text-base text-indigo-600 tracking-wide uppercase`}
`;

const Title = tw.p`text-red-600 mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl`;
const Author = tw.p`max-w-xl mt-5 mx-auto text-xl text-gray-500`;
const Image = styled.img`
  ${tw`h-40 flex justify-center w-full`}
`;
