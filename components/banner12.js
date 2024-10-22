import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Banner12 = (props) => {
  return (
    <>
      <div className="banner12-container1 thq-section-padding">
        <div className="banner12-max-width thq-section-max-width">
          <div className="banner12-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="banner12-text3 thq-heading-2">Company Name</h2>
                </Fragment>
              )}
            </h2>
            <h3>
              {props.content1 ?? (
                <Fragment>
                  <h3 className="banner12-text5 thq-heading-3">
                    Company mission statement
                  </h3>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span>Call to Action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner12-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner12-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner12-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner12-text3 {
            text-align: center;
          }
          .banner12-text5 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner12.defaultProps = {
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

Banner12.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner12
