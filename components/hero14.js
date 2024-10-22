import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero14 = (props) => {
  return (
    <>
      <div className="hero14-container thq-section-padding">
        <div className="hero14-max-width thq-section-max-width">
          <div className="hero14-column">
            <div className="hero14-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero14-text8 thq-heading-1">
                      Catchy and engaging hero headline here
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero14-text5 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="hero14-actions">
                <button className="thq-button-filled hero14-button1">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="thq-body-small">Main action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline hero14-button2">
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
            className="hero14-video thq-img-ratio-4-3"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .hero14-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero14-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
          }
          .hero14-column {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero14-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero14-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero14-video {
            flex: 1;
            width: 550px;
            height: auto;
          }
          .hero14-text5 {
            text-align: left;
          }
          .hero14-text8 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .hero14-max-width {
              flex-direction: column;
            }
            .hero14-actions {
              align-self: center;
              justify-content: flex-start;
            }
            .hero14-video {
              width: 100%;
            }
            .hero14-text5 {
              text-align: center;
            }
            .hero14-text8 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero14-video {
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .hero14-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero14-button1 {
              width: 100%;
            }
            .hero14-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero14.defaultProps = {
  content1: undefined,
  action1: undefined,
  action2: undefined,
  heading1: undefined,
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  video1Src: '',
}

Hero14.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  video1Poster: PropTypes.string,
  video1Src: PropTypes.string,
}

export default Hero14