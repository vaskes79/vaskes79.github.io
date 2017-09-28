import React from 'react';
import Link from 'gatsby-link';

const Dashboard = ({data}) => {
  let {title, description} = data.site.siteMetadata.dashboard;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export const query = graphql`
  query DashboardQuery {
    site {
      siteMetadata {
        dashboard {
          title
          description
        }
      }
    }
  }
`;
export default Dashboard;
