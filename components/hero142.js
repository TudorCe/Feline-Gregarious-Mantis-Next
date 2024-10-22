import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero142 = (props) => {
  return (
    <>
      <div className="hero142-container thq-section-padding">
        <div className="hero142-max-width thq-section-max-width">
          <div className="hero142-column">
            <div className="hero142-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero142-text8 thq-heading-1">
                      Catchy and engaging hero headline here
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero142-text5 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="hero142-actions">
                <button className="thq-button-filled hero142-button1">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="thq-body-small">Main action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline hero142-button2">
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
            className="hero142-video thq-img-ratio-4-3"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .hero142-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero142-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
          }
          .hero142-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero142-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero142-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero142-video {
            flex: 1;
            width: 550px;
            height: auto;
          }
          .hero142-text5 {
            text-align: left;
          }
          .hero142-text8 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .hero142-max-width {
              flex-direction: column;
            }
            .hero142-actions {
              align-self: center;
              justify-content: flex-start;
            }
            .hero142-video {
              width: 100%;
            }
            .hero142-text5 {
              text-align: center;
            }
            .hero142-text8 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero142-video {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .hero142-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero142-button1 {
              width: 100%;
            }
            .hero142-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero142.defaultProps = {
  content1: undefined,
  video1Src: '',
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  action1: undefined,
  action2: undefined,
  heading1: undefined,
}

Hero142.propTypes = {
  content1: PropTypes.element,
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero142
