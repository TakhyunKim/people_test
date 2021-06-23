import React, { useEffect, useState } from 'react';

import IssueItem from './IssueItem/IssueItem';

import { getIssueList } from '../../api/githubApi';

function IssueList() {
  const [issues, setIssues] = useState([]);

  const fetchIssueList = async () => {
    const response = await getIssueList();

    setIssues(response);
  };

  useEffect(() => {
    fetchIssueList()
  }, []);

  const renderIssueList = () => {
    return issues.map((issue) => <IssueItem key={issue.id} issueInfo={issue} />);
  };

  return (
    <div>
      {renderIssueList()}
    </div>
  );
}

export default IssueList;
