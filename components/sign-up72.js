import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const SignUp72 = (props) => {
  return (
    <>
      <div className="sign-up72-container1">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="sign-up72-sign-up-image thq-img-ratio-16-9"
        />
        <div className="sign-up72-container2"></div>
        <div className="sign-up72-form-root">
          <div className="sign-up72-form thq-section-padding">
            <div className="sign-up72-title-root">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="sign-up72-text27 thq-heading-2">
                      Create an account
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.content1 ?? (
                  <Fragment>
                    <span className="thq-body-small">
                      Sign up to see details
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="sign-up72-container3">
              <button className="sign-up72-button1 thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="sign-up72-text25 thq-body-small">
                        Continue with email
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="sign-up72-button2 thq-button-outline">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="sign-up72-icon1"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="sign-up72-text24 thq-body-small">
                        Continue with Facebook
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="sign-up72-button3 thq-button-outline">
                <svg
                  viewBox="0 0 860.0137142857142 1024"
                  className="sign-up72-icon3"
                >
                  <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                </svg>
                <span>
                  {props.action3 ?? (
                    <Fragment>
                      <span className="sign-up72-text26 thq-body-small">
                        Continue with Google
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <p className="sign-up72-text15 thq-body-large">
              <span>
                <span>
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </p>
            <span className="thq-body-small sign-up72-text22">
              Already have an account? Sign in
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-up72-container1 {
            width: 100%;
            height: 900px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .sign-up72-sign-up-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .sign-up72-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            z-index: 10;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .sign-up72-form-root {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-up72-form {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            max-width: 500px;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .sign-up72-title-root {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sign-up72-container3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-up72-button1 {
            width: 100%;
          }
          .sign-up72-button2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-up72-icon1 {
            width: 24px;
            height: 24px;
          }
          .sign-up72-button3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
          }
          .sign-up72-icon3 {
            width: 24px;
            height: 24px;
          }
          .sign-up72-text15 {
            font-size: 16px;
            text-align: center;
          }
          .sign-up72-text24 {
            text-align: center;
          }
          .sign-up72-text25 {
            text-align: center;
          }
          .sign-up72-text26 {
            text-align: center;
          }
          .sign-up72-text27 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .sign-up72-form-root {
              width: 100%;
              padding: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .sign-up72-form-root {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .sign-up72-form {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .sign-up72-button1 {
              width: 100%;
            }
            .sign-up72-button2 {
              width: 100%;
            }
            .sign-up72-button3 {
              width: 100%;
            }
            .sign-up72-text22 {
              text-align: center;
            }
            .sign-up72-text27 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

SignUp72.defaultProps = {
  content1: undefined,
  image1Alt: 'SignUp Image',
  action2: undefined,
  action1: undefined,
  action3: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1481026469463-66327c86e544?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzNXx8YWJzdHJhY3R8ZW58MHx8fHwxNzEyOTM1NTIzfDA&ixlib=rb-4.0.3&w=1500',
}

SignUp72.propTypes = {
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  action3: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default SignUp72
