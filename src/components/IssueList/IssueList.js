import React, { useEffect, useState } from 'react';

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

  return (
    <div>
      IssueList
    </div>
  );
}

export default IssueList;
