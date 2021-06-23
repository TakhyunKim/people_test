export const getIssueList = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}?sort=comments`,
    {
      method: 'GET',
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      Accept: 'application/vnd.github.v3+json'
    }
  );

  return await response.json();
};

export const getDetailIssue = async (issueNumber) => {

  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/${issueNumber}`,
    {
      method: 'GET',
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      Accept: 'application/vnd.github.v3+json'
    }
  );

  return await response.json();
};
