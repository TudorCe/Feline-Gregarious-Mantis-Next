import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Banner11 = (props) => {
  return (
    <>
      <div className="banner11-container1 thq-section-padding">
        <div className="banner11-max-width thq-section-max-width">
          <div className="banner11-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="banner11-text4 thq-heading-2">Company Name</h2>
                </Fragment>
              )}
            </h2>
            <h3>
              {props.content1 ?? (
                <Fragment>
                  <h3 className="banner11-text5 thq-heading-3">
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
          .banner11-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner11-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner11-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner11-text4 {
            text-align: center;
          }
          .banner11-text5 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner11.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

Banner11.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner11
