import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1.5em;
  margin: 1em;
`;

const LeftContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function IssueItem({ issueInfo, handleClick }) {
  const {
    number,
    title,
    user: {
      login
    },
    updated_at,
    comments
  } = issueInfo;

  return (
    <Wrapper onClick={handleClick}>
      <LeftContainer>
        <p>#{number} {title}</p>
        <p>작성자: {login} 작성일: {updated_at}</p>
      </LeftContainer>
      <RightContainer>
        <p>코멘트: {comments}</p>
      </RightContainer>
    </Wrapper>
  );
}

export default IssueItem;
