import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header,MainHeader, PostList,CardTitled } from 'components';
import { Layout } from 'layouts';
import { Card } from 'semantic-ui-react';

const MainWrapper=styled.div`
max-width: 55rem;
margin: 0 auto;
padding: 0 .9rem;
position: relative;`
;

const PostWrapper = styled.div`
display:grid;grid-template-columns:1fr 1fr 1fr;

  margin: 0rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;
const Paragraph = styled.p`
margin-bottom:0;
font-size:1.0em;
padding-top:2.5em
font-weight: 300;

 color: ${props => props.theme.colors.white.light};
text-align:center;
`;
const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Home Page'} />
      <MainHeader title="Front-End Web Development,
Chewed Up">Android,Flutter,Ios,Ionic,GraphQl,React ,javascript</MainHeader>
     
     <Paragraph>🔥 Top Posts</Paragraph>
     <MainWrapper> <PostWrapper>
       
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <CardTitled
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}

        
      </PostWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
