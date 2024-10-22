import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Stats12 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats12-max-width thq-section-max-width">
          <div className="stats12-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="stats12-text22 thq-heading-2">
                    Business value of teleportHQ
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="stats12-text20 thq-body-small">
                    Our results in numbers
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats12-container3 thq-grid-3">
            <div className="stats12-container4 thq-card">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="thq-heading-1 stats12-text21 thq-heading-2">
                      99%
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats12-text23 thq-body-small">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                  </Fragment>
                )}
              </span>
              <button
                name="Read more"
                type="button"
                className="thq-button-flat"
              >
                <span className="stats12-text12 thq-body-small">Read more</span>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div className="stats12-container5 thq-card">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="thq-heading-1 thq-heading-2 stats12-text25">
                      44%
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.stat2Description ?? (
                  <Fragment>
                    <p className="stats12-text19 thq-body-small">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </Fragment>
                )}
              </p>
              <button
                name="Read more"
                type="button"
                className="thq-button-flat"
              >
                <span className="stats12-text15 thq-body-small">Read more</span>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div className="stats12-container6 thq-card">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="thq-heading-1 stats12-text26 thq-heading-2">
                      99%
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.stat3Description ?? (
                  <Fragment>
                    <p className="stats12-text24 thq-body-small">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </Fragment>
                )}
              </p>
              <button
                name="Read more"
                type="button"
                className="thq-button-flat"
              >
                <span className="stats12-text18 thq-body-small">Read more</span>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="stats12-image thq-img-ratio-16-9"
        />
      </div>
      <style jsx>
        {`
          .stats12-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .stats12-container2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats12-container3 {
            width: 100%;
            z-index: 100;
          }
          .stats12-container4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats12-text12 {
            white-space: nowrap;
          }
          .stats12-container5 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats12-text15 {
            white-space: nowrap;
          }
          .stats12-container6 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats12-text18 {
            white-space: nowrap;
          }
          .stats12-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .stats12-text19 {
            text-align: justify;
          }
          .stats12-text20 {
            text-align: center;
          }
          .stats12-text23 {
            text-align: justify;
          }
          .stats12-text24 {
            text-align: justify;
          }
          @media (max-width: 767px) {
            .stats12-max-width {
              flex-direction: column;
            }
            .stats12-container4 {
              align-self: flex-start;
            }
            .stats12-container5 {
              align-self: flex-start;
            }
            .stats12-container6 {
              align-self: flex-start;
            }
            .stats12-text21 {
              align-self: center;
            }
            .stats12-text22 {
              text-align: center;
            }
            .stats12-text25 {
              align-self: center;
            }
            .stats12-text26 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .stats12-text22 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Stats12.defaultProps = {
  stat2Description: undefined,
  content1: undefined,
  stat1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGdyYXBoaWN8ZW58MHx8fHwxNzEzODgwNjYyfDA&ixlib=rb-4.0.3&w=1500',
  heading1: undefined,
  stat1Description: undefined,
  image1Alt: 'image',
  stat3Description: undefined,
  stat2: undefined,
  stat3: undefined,
}

Stats12.propTypes = {
  stat2Description: PropTypes.element,
  content1: PropTypes.element,
  stat1: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  stat1Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3Description: PropTypes.element,
  stat2: PropTypes.element,
  stat3: PropTypes.element,
}

export default Stats12
