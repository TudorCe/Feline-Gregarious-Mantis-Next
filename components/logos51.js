import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Logos51 = (props) => {
  return (
    <>
      <div className="logos51-container1 thq-section-padding">
        <div className="logos51-max-width thq-section-max-width">
          <div className="logos51-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="thq-heading-2 logos51-text3">
                    Companies that trust us
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="logos51-text6 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="logos51-actions">
              <button className="thq-button-filled logos51-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="thq-body-small">Main action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline logos51-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="thq-body-small">Secondary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="logos51-container3 thq-grid-2">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos51-logo1 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos51-logo2 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos51-logo3 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos51-logo4 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos51-logo5 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos51-logo6 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo7Alt}
              src={props.logo7Src}
              className="logos51-logo7 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo8Alt}
              src={props.logo8Src}
              className="logos51-logo8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos51-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .logos51-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .logos51-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .logos51-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .logos51-container3 {
            gap: var(--dl-space-space-twounits);
            width: 50%;
            padding: var(--dl-space-space-fourunits);
          }
          .logos51-logo1 {
            object-fit: contain;
          }
          .logos51-logo2 {
            object-fit: contain;
          }
          .logos51-logo3 {
            object-fit: contain;
          }
          .logos51-logo4 {
            object-fit: contain;
          }
          .logos51-logo5 {
            object-fit: contain;
          }
          .logos51-logo6 {
            object-fit: contain;
          }
          .logos51-logo7 {
            object-fit: contain;
          }
          .logos51-logo8 {
            object-fit: contain;
          }
          .logos51-text6 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .logos51-max-width {
              flex-direction: column;
            }
            .logos51-container2 {
              width: 100%;
            }
            .logos51-container3 {
              width: 100%;
              padding: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .logos51-container3 {
              padding: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .logos51-container1 {
              gap: var(--dl-space-space-unit);
            }
            .logos51-container2 {
              align-items: center;
            }
            .logos51-actions {
              width: 100%;
              flex-direction: column;
            }
            .logos51-button1 {
              width: 100%;
            }
            .logos51-button2 {
              width: 100%;
            }
            .logos51-container3 {
              padding: var(--dl-space-space-unit);
            }
            .logos51-text3 {
              text-align: center;
            }
            .logos51-text6 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Logos51.defaultProps = {
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  heading1: undefined,
  action1: undefined,
  logo2Alt: 'Logo',
  logo6Alt: 'Logo',
  logo7Alt: 'Logo',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Logo',
  logo4Alt: 'Logo',
  action2: undefined,
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Alt: 'Logo',
  content1: undefined,
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Alt: 'Logo',
  logo3Alt: 'Logo',
}

Logos51.propTypes = {
  logo7Src: PropTypes.string,
  logo8Src: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  logo2Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  action2: PropTypes.element,
  logo4Src: PropTypes.string,
  logo2Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  content1: PropTypes.element,
  logo5Src: PropTypes.string,
  logo6Src: PropTypes.string,
  logo8Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
}

export default Logos51
