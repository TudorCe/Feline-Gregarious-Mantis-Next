import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero141 = (props) => {
  return (
    <>
      <div className="hero141-container thq-section-padding">
        <div className="hero141-max-width thq-section-max-width">
          <div className="hero141-column">
            <div className="hero141-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero141-text7 thq-heading-1">
                      Catchy and engaging hero headline here
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero141-text6 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="hero141-actions">
                <button className="thq-button-filled hero141-button1">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="thq-body-small">Main action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline hero141-button2">
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
          </div>
          <video
            src={props.video1Src}
            loop="true"
            muted="true"
            poster={props.video1Poster}
            autoPlay="true"
            className="hero141-video thq-img-ratio-4-3"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .hero141-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero141-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
          }
          .hero141-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero141-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero141-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero141-video {
            flex: 1;
            width: 550px;
            height: auto;
          }
          .hero141-text6 {
            text-align: left;
          }
          .hero141-text7 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .hero141-max-width {
              flex-direction: column;
            }
            .hero141-actions {
              align-self: center;
              justify-content: flex-start;
            }
            .hero141-video {
              width: 100%;
            }
            .hero141-text6 {
              text-align: center;
            }
            .hero141-text7 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero141-video {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .hero141-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero141-button1 {
              width: 100%;
            }
            .hero141-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero141.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
  action2: undefined,
  video1Src: '',
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
}

Hero141.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
}

export default Hero141
