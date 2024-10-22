import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero143 = (props) => {
  return (
    <>
      <div className="hero143-container thq-section-padding">
        <div className="hero143-max-width thq-section-max-width">
          <div className="hero143-column">
            <div className="hero143-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero143-text8 thq-heading-1">
                      Catchy and engaging hero headline here
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero143-text7 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="hero143-actions">
                <button className="thq-button-filled hero143-button1">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="thq-body-small">Main action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline hero143-button2">
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
            className="hero143-video thq-img-ratio-4-3"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .hero143-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero143-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
          }
          .hero143-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero143-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero143-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero143-video {
            flex: 1;
            width: 550px;
            height: auto;
          }
          .hero143-text7 {
            text-align: left;
          }
          .hero143-text8 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .hero143-max-width {
              flex-direction: column;
            }
            .hero143-actions {
              align-self: center;
              justify-content: flex-start;
            }
            .hero143-video {
              width: 100%;
            }
            .hero143-text7 {
              text-align: center;
            }
            .hero143-text8 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero143-video {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .hero143-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero143-button1 {
              width: 100%;
            }
            .hero143-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero143.defaultProps = {
  action1: undefined,
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  action2: undefined,
  content1: undefined,
  video1Src: '',
  heading1: undefined,
}

Hero143.propTypes = {
  action1: PropTypes.element,
  video1Poster: PropTypes.string,
  action2: PropTypes.element,
  content1: PropTypes.element,
  video1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero143
