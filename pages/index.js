import React, { Fragment } from 'react'
import Head from 'next/head'

import Banner1 from '../components/banner1'
import BlogPostHeader1 from '../components/blog-post-header1'
import BlogPostHeader7 from '../components/blog-post-header7'
import NotFound3 from '../components/not-found3'
import FAQ8 from '../components/faq8'
import Hero14 from '../components/hero14'
import SignUp7 from '../components/sign-up7'
import Logos5 from '../components/logos5'
import Stats12 from '../components/stats12'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Feline Gregarious Mantis</title>
          <meta property="og:title" content="Feline Gregarious Mantis" />
        </Head>
        <Banner1
          action1={
            <Fragment>
              <span className="home-text10">Call to Action</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text11 thq-heading-3">
                Company mission statement
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text12 thq-heading-2">Company Name</span>
            </Fragment>
          }
        ></Banner1>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="home-image"
        />
        <BlogPostHeader1
          date={
            <Fragment>
              <span className="home-text13 thq-body-small">20 March 2024</span>
            </Fragment>
          }
          category={
            <Fragment>
              <span className="home-text14 thq-body-small">Category</span>
            </Fragment>
          }
          readTime={
            <Fragment>
              <span className="home-text15 thq-body-small">7min read</span>
            </Fragment>
          }
          avatarName={
            <Fragment>
              <span className="home-text16 thq-body-small">Full name</span>
            </Fragment>
          }
          blogPostTitle={
            <Fragment>
              <span className="home-text17 thq-heading-1">
                Discover the Latest Blog Posts Here
              </span>
            </Fragment>
          }
        ></BlogPostHeader1>
        <BlogPostHeader7
          date={
            <Fragment>
              <span className="home-text18 thq-body-small">23 March 2024</span>
            </Fragment>
          }
          category={
            <Fragment>
              <span className="home-text19 thq-body-small">Category</span>
            </Fragment>
          }
          readTime={
            <Fragment>
              <span className="home-text20 thq-body-small">5 min read</span>
            </Fragment>
          }
          avatarName={
            <Fragment>
              <span className="home-text21 thq-body-small">Full name</span>
            </Fragment>
          }
          blogPostTitle={
            <Fragment>
              <span className="home-text22 thq-heading-1">
                Latest Blog Posts
              </span>
            </Fragment>
          }
        ></BlogPostHeader7>
        <NotFound3
          action1={
            <Fragment>
              <span className="home-text23 thq-body-small">
                Back to homepage
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text24 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ....
              </span>
            </Fragment>
          }
        ></NotFound3>
        <FAQ8
          action={
            <Fragment>
              <span className="home-text25 thq-body-small">Contact</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text26 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text27 thq-heading-2">FAQs</span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text28 thq-body-large">
                Frequently Asked Questions
              </span>
            </Fragment>
          }
          faq1Question4={
            <Fragment>
              <span className="home-text29 thq-body-large">
                Frequently Asked Questions
              </span>
            </Fragment>
          }
          faq2Question1={
            <Fragment>
              <span className="home-text30 thq-body-large">
                Frequently Asked Questions
              </span>
            </Fragment>
          }
        ></FAQ8>
        <Hero14
          action1={
            <Fragment>
              <span className="home-text31 thq-body-small">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text32 thq-body-small">
                Secondary action
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text33 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text34 thq-heading-1">
                Catchy and engaging hero headline here
              </span>
            </Fragment>
          }
        ></Hero14>
        <SignUp7
          action1={
            <Fragment>
              <span className="home-text35 thq-body-small">
                Continue with email
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text36 thq-body-small">
                Continue with Facebook
              </span>
            </Fragment>
          }
          action3={
            <Fragment>
              <span className="home-text37 thq-body-small">
                Continue with Google
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text38 thq-body-small">
                Sign up to see details
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text39 thq-heading-2">
                Create an account
              </span>
            </Fragment>
          }
        ></SignUp7>
        <Logos5
          action1={
            <Fragment>
              <span className="home-text40 thq-body-small">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text41 thq-body-small">
                Secondary action
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text42 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text43 thq-heading-2">
                Companies that trust us
              </span>
            </Fragment>
          }
        ></Logos5>
        <Stats12
          stat1={
            <Fragment>
              <span className="home-text44 thq-heading-1 thq-heading-2">
                99%
              </span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="home-text45 thq-heading-1 thq-heading-2">
                44%
              </span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="home-text46 thq-heading-1 thq-heading-2">
                99%
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text47 thq-body-small">
                Our results in numbers
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text48 thq-heading-2">
                Business value of teleportHQ
              </span>
            </Fragment>
          }
          stat1Description={
            <Fragment>
              <span className="home-text49 thq-body-small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="home-text50 thq-body-small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="home-text51 thq-body-small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          }
        ></Stats12>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
            text-align: center;
          }
          .home-text12 {
            display: inline-block;
            text-align: center;
          }
          .home-image {
            width: 100%;
            height: 1131px;
            object-fit: cover;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
            font-weight: 600;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
            text-align: center;
          }
          .home-text20 {
            display: inline-block;
            text-align: center;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
            text-align: center;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
            text-align: center;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
            text-align: center;
          }
          .home-text27 {
            display: inline-block;
            text-align: center;
          }
          .home-text28 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text29 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text30 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
            text-align: left;
          }
          .home-text34 {
            display: inline-block;
            text-align: left;
          }
          .home-text35 {
            display: inline-block;
            text-align: center;
          }
          .home-text36 {
            display: inline-block;
            text-align: center;
          }
          .home-text37 {
            display: inline-block;
            text-align: center;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
            text-align: center;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
            text-align: left;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
            text-align: center;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
            text-align: justify;
          }
          .home-text50 {
            display: inline-block;
            text-align: justify;
          }
          .home-text51 {
            display: inline-block;
            text-align: justify;
          }
          @media (max-width: 991px) {
            .home-text33 {
              text-align: center;
            }
            .home-text34 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-text17 {
              text-align: center;
            }
            .home-text24 {
              text-align: center;
            }
            .home-text44 {
              align-self: center;
            }
            .home-text45 {
              align-self: center;
            }
            .home-text46 {
              align-self: center;
            }
            .home-text48 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-text39 {
              text-align: center;
            }
            .home-text42 {
              text-align: center;
            }
            .home-text43 {
              text-align: center;
            }
            .home-text48 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
