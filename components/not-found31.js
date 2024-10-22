import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const NotFound31 = (props) => {
  return (
    <>
      <div className="not-found31-container thq-section-padding">
        <div className="not-found31-max-width">
          <h1 className="not-found31-text1 thq-heading-1">404</h1>
          <h2 className="not-found31-text2 thq-heading-2">Page not found</h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="not-found31-text4 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris ....
                </span>
              </Fragment>
            )}
          </span>
          <button className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="thq-body-small">Back to homepage</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .not-found31-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found31-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found31-text1 {
            font-size: 100px;
            text-align: center;
          }
          .not-found31-text2 {
            text-align: center;
            text-transform: uppercase;
          }
          .not-found31-text4 {
            text-align: center;
          }
          @media (max-width: 767px) {
            .not-found31-max-width {
              align-items: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .not-found31-text4 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .not-found31-max-width {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

NotFound31.defaultProps = {
  content1: undefined,
  action1: undefined,
}

NotFound31.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default NotFound31
