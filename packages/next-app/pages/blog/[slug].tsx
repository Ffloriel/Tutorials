import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import MarkdownIt from 'markdown-it'

import { BlogPost } from "../../types/";

import { gql } from "@apollo/client";
import { apolloClient } from '../../services/strapi'

const md = new MarkdownIt()

type PostProps = {
  post: BlogPost;
};

function createPost(post: BlogPost) {

  return `
  <figure class="hero">
    <picture>
      <img src="http://localhost:1337${post.hero.url}" alt="${post.hero.alternativeText}" />
    </picture>
  </figure>
  <h1>${post.title}</h1>
  ${md.render(post.content)}
  `
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/unison_base/nittigrotesk/nittigrotesk-normal.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/AdelleSans-Italic.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/AdelleSans-Semibold.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-md-obq.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-md.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-bd-obq.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-hvy.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-hvy.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://cdn.vox-cdn.com/shared_fonts/unison/verge/pathways-normal-webfont.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <article dangerouslySetInnerHTML={{ __html: createPost(post)}}>
      </article>
      <style jsx global>{`
        @font-face {
          font-family: Heroic;
          font-style: italic;
          font-weight: 500;
          src: url("https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-md-obq.woff2");
        }
        @font-face {
          font-family: Heroic;
          font-style: normal;
          font-weight: 500;
          src: url("https://cdn.vox-cdn.com/shared_fonts/unison/verge/heroic-cond-vrg-web-ltd-md.woff2");
        }
        @font-face {
          font-family: Pathways;
          font-style: normal;
          font-weight: 400;
          src: url("https://cdn.vox-cdn.com/shared_fonts/unison/verge/pathways-normal-webfont.woff2");
        }

        html {
          font-size: 18px;
          font-family: Helvetica, sans-serif;
          text-size-adjust: 100%;
        }

        body {
          margin: 0;
        }
      `}</style>

      <style jsx global>{`
          h1,
          h2,
          p {
            margin: 0;
          }

          article {
            background: #fff;
            color: colorDarkNight;
            display: grid;
            grid-template-columns: auto 85px 85px 762px 85px 85px auto;
          }

          @media screen and (max-width: 800px) {
            article {
              grid-template-columns: auto 0 60px calc(100% - 60px * 2) 60px 0 auto;
            }
          }

          @media screen and (max-width: 600px) {
            article {
              grid-template-columns: auto 0 20px calc(100% - 20px * 2) 20px 0 auto;
            }
          }

          article > * {
            grid-column: 4;
          }

          article > figure {
            grid-column: 1/-1;
            width: 100vw;
            max-width: 100%;
            margin: 2.2rem 0;
          }

          article > figure.hero {
            margin: 0 0 1.2rem 0;
          }

          article > figure picture img {
            max-width: 100%;
            object-fit: contain;
          }

          h1 {
            font-family: Heroic;
            font-weight: 700;
            font-size: 3.5rem;
            letter-spacing: 0.008rem;
            line-height: 0.9;
            margin-bottom: 1.6rem;
          }

          h2 {
            font-family Heroic;
            font-weight: 400;
            font-size: 1.3rem;
            margin-bottom: 1.6rem;
          }

          p {
            font-size: 1.1rem;
            font-weight: 300;
            margin-bottom: 1.2rem;
            line-height: 1.6;
          }

          p.large {
          font-size 1.2rem
          }
      
        p.has-dropcap:first-letter {
          font-family: Pathways;
          font-size: 6.24rem;
          line-height: 1;
          float: left;
          margin: 0 .1em -.1em 0;

        }

          ul {
            margin: 0 0 1.2rem 0;
            padding: 0;
          }

          ul li {
            margin-bottom: 1rem;
          }

          .labels {
            margin 0 0 1.2rem 0
            padding 0
          }

          .labels li {
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            margin: 15px -9px 4px 6px;
            color: #ec008a;
          }

          .labels li:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            content: '';
            border-right: 1px solid;
            border-top: 1px solid;
            transform: skew(25deg);
          }

          .labels li a {
            display: block;
            font-family: Heroic;
            text-decoration: none;
            padding: 8px 14px 0px 14px;
            color: inherit;
          }

          blockquote {
            position: relative;
            margin: 0;
            grid-column: 3/5;
          }

          blockquote p {
            font-family: Heroic;
            font-size: 2rem;
            font-style: italic;
            font-weight: 600;
            text-transform: uppercase;
            color: #383092;
            margin-bottom: 1.2rem;
            padding: 1rem 1.25rem 0 0;
          }

          blockquote::before {
            position: absolute;
            top: 1px;
            right: 20px;
            content: '';
            height: 2px;
            width: 35px;
            background: #000;
            transform: rotate(-120deg);
            transform-origin: top right;
          }

        blockquote::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 19px;
            height: 2px;
            background: #000;
        }

        `}</style>
    </>
  );
};

type PostParams = {
  slug: string;
  pid: number;
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query<{ posts: BlogPost[] }>({
    query: gql`
      {
        posts {
          slug
        }
      }
    `,
  });

  // Get the paths we want to pre-render based on posts
  const paths = data?.posts.map((post) => `/blog/${post.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: PostParams }) {
  const { data } = await apolloClient.query({
    query: gql`
        {
            posts(where: { slug: "${params.slug}" }) {
              title
              creation_date
              slug
              content
              tags
              hero {
                url
                formats
                alternativeText
              }
            }
          }
        `,
  });

  return { props: { post: data?.posts[0] } };
}

export default Post;
