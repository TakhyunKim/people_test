import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import IssueItem from './IssueItem/IssueItem';

import { getIssueList } from '../../api/githubApi';

const Wrapper = styled.script`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function IssueList() {
  const [issues, setIssues] = useState([]);
  const history = useHistory();

  const fetchIssueList = async () => {
    const response = await getIssueList();

    setIssues(response);
  };

  useEffect(() => {
    fetchIssueList();
  }, []);

  const renderIssueList = () => {
    return issues.map((issue) =>
      <IssueItem
        key={issue.id}
        issueInfo={issue}
        handleClick={() => history.push(`/issue/${issue.number}`)}
      />
    );
  };

  return (
    <Wrapper>
      {renderIssueList()}
    </Wrapper>
  );
}

export default IssueList;
