import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Stats122 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="stats122-max-width thq-section-max-width">
          <div className="stats122-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="stats122-text26 thq-heading-2">
                    Business value of teleportHQ
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="stats122-text19 thq-body-small">
                    Our results in numbers
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats122-container3 thq-grid-3">
            <div className="stats122-container4 thq-card">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats122-text22 thq-heading-1 thq-heading-2">
                      99%
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats122-text20 thq-body-small">
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
                <span className="stats122-text12 thq-body-small">
                  Read more
                </span>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div className="stats122-container5 thq-card">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="thq-heading-1 thq-heading-2 stats122-text23">
                      44%
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.stat2Description ?? (
                  <Fragment>
                    <p className="stats122-text24 thq-body-small">
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
                <span className="stats122-text15 thq-body-small">
                  Read more
                </span>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div className="stats122-container6 thq-card">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats122-text25 thq-heading-1 thq-heading-2">
                      99%
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.stat3Description ?? (
                  <Fragment>
                    <p className="stats122-text21 thq-body-small">
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
                <span className="stats122-text18 thq-body-small">
                  Read more
                </span>
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
          className="stats122-image thq-img-ratio-16-9"
        />
      </div>
      <style jsx>
        {`
          .stats122-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .stats122-container2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .stats122-container3 {
            width: 100%;
            z-index: 100;
          }
          .stats122-container4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats122-text12 {
            white-space: nowrap;
          }
          .stats122-container5 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats122-text15 {
            white-space: nowrap;
          }
          .stats122-container6 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .stats122-text18 {
            white-space: nowrap;
          }
          .stats122-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .stats122-text19 {
            text-align: center;
          }
          .stats122-text20 {
            text-align: justify;
          }
          .stats122-text21 {
            text-align: justify;
          }
          .stats122-text24 {
            text-align: justify;
          }
          @media (max-width: 767px) {
            .stats122-max-width {
              flex-direction: column;
            }
            .stats122-container4 {
              align-self: flex-start;
            }
            .stats122-container5 {
              align-self: flex-start;
            }
            .stats122-container6 {
              align-self: flex-start;
            }
            .stats122-text22 {
              align-self: center;
            }
            .stats122-text23 {
              align-self: center;
            }
            .stats122-text25 {
              align-self: center;
            }
            .stats122-text26 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .stats122-text26 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Stats122.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGdyYXBoaWN8ZW58MHx8fHwxNzEzODgwNjYyfDA&ixlib=rb-4.0.3&w=1500',
  stat1Description: undefined,
  image1Alt: 'image',
  stat3Description: undefined,
  stat1: undefined,
  stat2: undefined,
  stat2Description: undefined,
  stat3: undefined,
  heading1: undefined,
}

Stats122.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  stat1Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3Description: PropTypes.element,
  stat1: PropTypes.element,
  stat2: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  heading1: PropTypes.element,
}

export default Stats122
