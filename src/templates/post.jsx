import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';
import "../templates/styles.css"
import "../templates/prism-okaidia.css";

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, tags, path, description} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
     
      <Container>
     
      <div class="sticky-container">
    <ul class="sticky">
        <li>
            <img src="icons/twitter.png" width="32" height="32"/>
            
        </li>
        <li>
            <img src="icons/facebook.png" width="32" height="32"/>
           
        </li>
    </ul>
</div>

       <div className="article-wrapper">

         <article>

           <header>
  <h1 className="text-center">{title}</h1>
           </header>
<div className="mainWrapper" >
<div className="article-content" dangerouslySetInnerHTML={{ __html: html }}/>

<aside class="article-aside">
<div class="rightBox">
<h3>Related Posts</h3>
<h4><a href="css/ss">using css with js</a></h4>
<h4><a href="css/ss">using css with js</a></h4>
</div>

<div class="rightBox emoji-pick">
<h3>#css</h3>
<h4><a href="css/ss">using css with js</a></h4>
<h4><a href="css/ss">using css with js</a></h4>
</div>

</aside>

</div>
           
         </article>
       </div>
       
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
