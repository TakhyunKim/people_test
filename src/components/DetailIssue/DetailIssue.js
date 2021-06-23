import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { getDetailIssue } from '../../api/githubApi';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IssueTitleContainer = styled.section`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  margin: 1em;
  border-bottom: 1px solid black;
`;

const LeftContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const RightContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IssueContentsContainer = styled.section`
  width: 80%;
`;

function DetailIssue({ match }) {
  const [issue, setIssue] = useState({});

  const {
    number,
    title,
    user,
    updated_at,
    comments,
    body
  } = issue;

  const fetchDetailIssue = async () => {
    const response = await getDetailIssue(Number(match.params.issueNumber));

    setIssue(response);
  };

  useEffect(() => {
    fetchDetailIssue();
  }, []);

  return (
    <Wrapper>
      {0  < Object.keys(issue).length &&
        <>
          <IssueTitleContainer>
            <LeftContainer>
              <img
                className='user-avatar'
                src={`${user.avatar_url}`}
                alt='user img'
              />
              <p>#{number} {title}</p>
              <p>작성자: {user.login} 작성일: {updated_at}</p>
            </LeftContainer>
            <RightContainer>
              <p>코멘트: {comments}</p>
            </RightContainer>
          </IssueTitleContainer>
          <IssueContentsContainer>
            <ReactMarkdown>
              {body}
            </ReactMarkdown>
          </IssueContentsContainer>
        </>
      }
    </Wrapper>
  );
}

export default DetailIssue;
