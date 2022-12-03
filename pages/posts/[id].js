import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

//FETCHES NECESSARY DATA FOR THE POST WITH ID
export async function getStaticProps({ params }) {
  //get post data and return it as props
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
/*Catch-All Routes
export async function getStaticProps({ params }) {
  // params.id will be like ['a', 'b', 'c']
}
*/

//RETURNS A LIST OF POSSIBLE VALUES FOR ID
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
/*Catch-All Routes
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return [
        {
            params: {
            // Statically Generates /posts/a/b/c
            id: ['a', 'b', 'c'],
            },
        },
        //. . .
    ];
}
*/

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }