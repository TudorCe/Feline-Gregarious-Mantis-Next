import React, { Fragment } from 'react'
import Head from 'next/head'

import Banner11 from '../components/banner11'
import BlogPostHeader11 from '../components/blog-post-header11'
import BlogPostHeader71 from '../components/blog-post-header71'
import NotFound31 from '../components/not-found31'
import FAQ81 from '../components/faq81'
import Hero141 from '../components/hero141'
import SignUp71 from '../components/sign-up71'
import Logos51 from '../components/logos51'
import Stats121 from '../components/stats121'

const Page11 = (props) => {
  return (
    <>
      <div className="page11-container">
        <Head>
          <title>Page11 - Feline Gregarious Mantis</title>
          <meta
            property="og:title"
            content="Page11 - Feline Gregarious Mantis"
          />
        </Head>
        <Banner11
          action1={
            <Fragment>
              <span className="page11-text10">Call to Action</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text11 thq-heading-3">
                Company mission statement
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="page11-text12 thq-heading-2">Company Name</span>
            </Fragment>
          }
        ></Banner11>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="page11-image"
        />
        <BlogPostHeader11
          date={
            <Fragment>
              <span className="page11-text13 thq-body-small">
                20 March 2024
              </span>
            </Fragment>
          }
          category={
            <Fragment>
              <span className="page11-text14 thq-body-small">Category</span>
            </Fragment>
          }
          readTime={
            <Fragment>
              <span className="page11-text15 thq-body-small">7min read</span>
            </Fragment>
          }
          avatarName={
            <Fragment>
              <span className="page11-text16 thq-body-small">Full name</span>
            </Fragment>
          }
          blogPostTitle={
            <Fragment>
              <span className="page11-text17 thq-heading-1">
                Discover the Latest Blog Posts Here
              </span>
            </Fragment>
          }
        ></BlogPostHeader11>
        <BlogPostHeader71
          date={
            <Fragment>
              <span className="page11-text18 thq-body-small">
                23 March 2024
              </span>
            </Fragment>
          }
          category={
            <Fragment>
              <span className="page11-text19 thq-body-small">Category</span>
            </Fragment>
          }
          readTime={
            <Fragment>
              <span className="page11-text20 thq-body-small">5 min read</span>
            </Fragment>
          }
          avatarName={
            <Fragment>
              <span className="page11-text21 thq-body-small">Full name</span>
            </Fragment>
          }
          blogPostTitle={
            <Fragment>
              <span className="page11-text22 thq-heading-1">
                Latest Blog Posts
              </span>
            </Fragment>
          }
        ></BlogPostHeader71>
        <NotFound31
          action1={
            <Fragment>
              <span className="page11-text23 thq-body-small">
                Back to homepage
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text24 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                ....
              </span>
            </Fragment>
          }
        ></NotFound31>
        <FAQ81
          action={
            <Fragment>
              <span className="page11-text25 thq-body-small">Contact</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text26 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="page11-text27 thq-heading-2">FAQs</span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="page11-text28 thq-body-large">
                Frequently Asked Questions
              </span>
            </Fragment>
          }
          faq1Question4={
            <Fragment>
              <span className="page11-text29 thq-body-large">
                Frequently Asked Questions
              </span>
            </Fragment>
          }
          faq2Question1={
            <Fragment>
              <span className="page11-text30 thq-body-large">
                Frequently Asked Questions
              </span>
            </Fragment>
          }
        ></FAQ81>
        <Hero141
          action1={
            <Fragment>
              <span className="page11-text31 thq-body-small">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="page11-text32 thq-body-small">
                Secondary action
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text33 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="page11-text34 thq-heading-1">
                Catchy and engaging hero headline here
              </span>
            </Fragment>
          }
        ></Hero141>
        <SignUp71
          action1={
            <Fragment>
              <span className="page11-text35 thq-body-small">
                Continue with email
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="page11-text36 thq-body-small">
                Continue with Facebook
              </span>
            </Fragment>
          }
          action3={
            <Fragment>
              <span className="page11-text37 thq-body-small">
                Continue with Google
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text38 thq-body-small">
                Sign up to see details
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="page11-text39 thq-heading-2">
                Create an account
              </span>
            </Fragment>
          }
        ></SignUp71>
        <Logos51
          action1={
            <Fragment>
              <span className="page11-text40 thq-body-small">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="page11-text41 thq-body-small">
                Secondary action
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text42 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="page11-text43 thq-heading-2">
                Companies that trust us
              </span>
            </Fragment>
          }
        ></Logos51>
        <Stats121
          stat1={
            <Fragment>
              <span className="page11-text44 thq-heading-1 thq-heading-2">
                99%
              </span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="page11-text45 thq-heading-1 thq-heading-2">
                44%
              </span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="page11-text46 thq-heading-1 thq-heading-2">
                99%
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="page11-text47 thq-body-small">
                Our results in numbers
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="page11-text48 thq-heading-2">
                Business value of teleportHQ
              </span>
            </Fragment>
          }
          stat1Description={
            <Fragment>
              <span className="page11-text49 thq-body-small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="page11-text50 thq-body-small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="page11-text51 thq-body-small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </span>
            </Fragment>
          }
        ></Stats121>
      </div>
      <style jsx>
        {`
          .page11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page11-text10 {
            display: inline-block;
          }
          .page11-text11 {
            display: inline-block;
            text-align: center;
          }
          .page11-text12 {
            display: inline-block;
            text-align: center;
          }
          .page11-image {
            width: 100%;
            height: 1131px;
            object-fit: cover;
          }
          .page11-text13 {
            display: inline-block;
          }
          .page11-text14 {
            display: inline-block;
          }
          .page11-text15 {
            display: inline-block;
          }
          .page11-text16 {
            display: inline-block;
            font-weight: 600;
          }
          .page11-text17 {
            display: inline-block;
          }
          .page11-text18 {
            display: inline-block;
          }
          .page11-text19 {
            display: inline-block;
            text-align: center;
          }
          .page11-text20 {
            display: inline-block;
            text-align: center;
          }
          .page11-text21 {
            display: inline-block;
          }
          .page11-text22 {
            display: inline-block;
            text-align: center;
          }
          .page11-text23 {
            display: inline-block;
          }
          .page11-text24 {
            display: inline-block;
            text-align: center;
          }
          .page11-text25 {
            display: inline-block;
          }
          .page11-text26 {
            display: inline-block;
            text-align: center;
          }
          .page11-text27 {
            display: inline-block;
            text-align: center;
          }
          .page11-text28 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .page11-text29 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .page11-text30 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .page11-text31 {
            display: inline-block;
          }
          .page11-text32 {
            display: inline-block;
          }
          .page11-text33 {
            display: inline-block;
            text-align: left;
          }
          .page11-text34 {
            display: inline-block;
            text-align: left;
          }
          .page11-text35 {
            display: inline-block;
            text-align: center;
          }
          .page11-text36 {
            display: inline-block;
            text-align: center;
          }
          .page11-text37 {
            display: inline-block;
            text-align: center;
          }
          .page11-text38 {
            display: inline-block;
          }
          .page11-text39 {
            display: inline-block;
            text-align: center;
          }
          .page11-text40 {
            display: inline-block;
          }
          .page11-text41 {
            display: inline-block;
          }
          .page11-text42 {
            display: inline-block;
            text-align: left;
          }
          .page11-text43 {
            display: inline-block;
          }
          .page11-text44 {
            display: inline-block;
          }
          .page11-text45 {
            display: inline-block;
          }
          .page11-text46 {
            display: inline-block;
          }
          .page11-text47 {
            display: inline-block;
            text-align: center;
          }
          .page11-text48 {
            display: inline-block;
          }
          .page11-text49 {
            display: inline-block;
            text-align: justify;
          }
          .page11-text50 {
            display: inline-block;
            text-align: justify;
          }
          .page11-text51 {
            display: inline-block;
            text-align: justify;
          }
          @media (max-width: 991px) {
            .page11-text33 {
              text-align: center;
            }
            .page11-text34 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .page11-text17 {
              text-align: center;
            }
            .page11-text24 {
              text-align: center;
            }
            .page11-text44 {
              align-self: center;
            }
            .page11-text45 {
              align-self: center;
            }
            .page11-text46 {
              align-self: center;
            }
            .page11-text48 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .page11-text39 {
              text-align: center;
            }
            .page11-text42 {
              text-align: center;
            }
            .page11-text43 {
              text-align: center;
            }
            .page11-text48 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page11
