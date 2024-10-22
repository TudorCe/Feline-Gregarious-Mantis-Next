import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Logos5 = (props) => {
  return (
    <>
      <div className="logos5-container1 thq-section-padding">
        <div className="logos5-max-width thq-section-max-width">
          <div className="logos5-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="logos5-text4 thq-heading-2">
                    Companies that trust us
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="logos5-text6 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="logos5-actions">
              <button className="thq-button-filled logos5-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="thq-body-small">Main action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline logos5-button2">
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
          <div className="logos5-container3 thq-grid-2">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos5-logo1 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos5-logo2 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos5-logo3 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos5-logo4 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos5-logo5 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos5-logo6 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo7Alt}
              src={props.logo7Src}
              className="logos5-logo7 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo8Alt}
              src={props.logo8Src}
              className="logos5-logo8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos5-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .logos5-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .logos5-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .logos5-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .logos5-container3 {
            gap: var(--dl-space-space-twounits);
            width: 50%;
            padding: var(--dl-space-space-fourunits);
          }
          .logos5-logo1 {
            object-fit: contain;
          }
          .logos5-logo2 {
            object-fit: contain;
          }
          .logos5-logo3 {
            object-fit: contain;
          }
          .logos5-logo4 {
            object-fit: contain;
          }
          .logos5-logo5 {
            object-fit: contain;
          }
          .logos5-logo6 {
            object-fit: contain;
          }
          .logos5-logo7 {
            object-fit: contain;
          }
          .logos5-logo8 {
            object-fit: contain;
          }
          .logos5-text6 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .logos5-max-width {
              flex-direction: column;
            }
            .logos5-container2 {
              width: 100%;
            }
            .logos5-container3 {
              width: 100%;
              padding: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .logos5-container3 {
              padding: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .logos5-container1 {
              gap: var(--dl-space-space-unit);
            }
            .logos5-container2 {
              align-items: center;
            }
            .logos5-actions {
              width: 100%;
              flex-direction: column;
            }
            .logos5-button1 {
              width: 100%;
            }
            .logos5-button2 {
              width: 100%;
            }
            .logos5-container3 {
              padding: var(--dl-space-space-unit);
            }
            .logos5-text4 {
              text-align: center;
            }
            .logos5-text6 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Logos5.defaultProps = {
  logo3Alt: 'Logo',
  logo7Alt: 'Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Alt: 'Logo',
  action2: undefined,
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Logo',
  logo4Alt: 'Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Alt: 'Logo',
  heading1: undefined,
  logo5Alt: 'Logo',
  logo2Alt: 'Logo',
  action1: undefined,
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  content1: undefined,
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos5.propTypes = {
  logo3Alt: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo8Alt: PropTypes.string,
  action2: PropTypes.element,
  logo7Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  heading1: PropTypes.element,
  logo5Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  action1: PropTypes.element,
  logo1Src: PropTypes.string,
  content1: PropTypes.element,
  logo6Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo8Src: PropTypes.string,
}

export default Logos5
