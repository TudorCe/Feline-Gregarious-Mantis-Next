import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const FAQ82 = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3isVisible, setFaq3isVisible] = useState(false)
  return (
    <>
      <div className="faq82faq8 thq-section-padding">
        <div className="faq82-max-width thq-section-max-width">
          <div className="faq82-container10 thq-flex-column">
            <div className="thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="faq82-text19 thq-heading-2">FAQs</h2>
                  </Fragment>
                )}
              </h2>
            </div>
            <div className="thq-flex-column">
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="faq82-text18 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="faq82-list thq-flex-column">
                <div className="faq82-faq1">
                  <div
                    onClick={() => setFaq1Visible(!faq1Visible)}
                    className="faq82-trigger1 thq-section-max-width"
                  >
                    <p>
                      {props.faq1Question4 ?? (
                        <Fragment>
                          <p className="faq82-text17 thq-body-large">
                            Frequently Asked Questions
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <div className="faq82-icons-container1">
                      {!faq1Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon10">
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                      {faq1Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon12">
                            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {faq1Visible && (
                    <div className="faq82-container14">
                      <span className="thq-body-small">
                        Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                        sunt aut deleniti illum non repudiandae voluptatem. Aut
                        praesentium doloribus qui distinctio neque ut unde
                        temporibus. Cum exercitationem eveniet in omnis animi in
                        corporis nulla. Sed tempora excepturi et voluptatem modi
                        et exercitationem voluptate cum illum quisquam 33 quia
                        blanditiis eos minus consequatur.Ut neque quam qui
                        dignissimos voluptates ut voluptate totam aut
                        consequuntur quod. Ut voluptas incidunt ut fuga nostrum
                        ut quaerat enim eum earum tenetur? Est esse harum et
                        Quis officiis et enim amet.Et minima tempore et neque
                        voluptatem eos amet officiis et temporibus Quis. Et
                        suscipit esse id nemo sunt At nihil earum et consequatur
                        fuga aut sapiente voluptate est cupiditate esse non
                        dolor cumque. Ut obcaecati recusandae et beatae quae qui
                        doloremque eligendi sit eaque labore.
                      </span>
                    </div>
                  )}
                </div>
                <div className="faq82-faq2">
                  <div
                    onClick={() => setFaq2Visible(!faq2Visible)}
                    className="faq82-trigger2 thq-section-max-width"
                  >
                    <p>
                      {props.faq2Question1 ?? (
                        <Fragment>
                          <p className="faq82-text15 thq-body-large">
                            Frequently Asked Questions
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <div className="faq82-icons-container2">
                      {!faq2Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon14">
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                      {faq2Visible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon16">
                            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {faq2Visible && (
                    <div className="faq82-container17">
                      <span className="thq-body-small">
                        Et minima tempore et neque voluptatem eos amet officiis
                        et temporibus Quis. Et suscipit esse id nemo sunt At
                        nihil earum et consequatur fuga aut sapiente voluptate
                        est cupiditate esse non dolor cumque. Ut obcaecati
                        recusandae et beatae quae qui doloremque eligendi sit
                        eaque labore.
                      </span>
                    </div>
                  )}
                </div>
                <div className="faq82-faq3">
                  <div
                    onClick={() => setFaq3isVisible(!faq3isVisible)}
                    className="faq82-trigger3 thq-section-max-width"
                  >
                    <p>
                      {props.faq3Question ?? (
                        <Fragment>
                          <p className="faq82-text16 thq-body-large">
                            Frequently Asked Questions
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <div className="faq82-icons-container3">
                      {!faq3isVisible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon18">
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                      {faq3isVisible && (
                        <div>
                          <svg viewBox="0 0 1024 1024" className="faq82-icon20">
                            <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {faq3isVisible && (
                    <div className="faq82-container20">
                      <span className="thq-body-small">
                        A quia temporibus aut ullam assumenda vel eius sapiente
                        ut eligendi molestias. Ex ipsum incidunt ut excepturi
                        eaque sed nulla quia qui exercitationem alias aut
                        consequuntur nihil et animi voluptas.
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button className="faq82-button thq-button-outline">
                <span>
                  {props.action ?? (
                    <Fragment>
                      <span className="thq-body-small">Contact</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq82faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq82-max-width {
            align-self: center;
          }
          .faq82-container10 {
            align-self: stretch;
            align-items: stretch;
          }
          .faq82-list {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq82-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq82-trigger1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq82-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq82-container14 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq82-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq82-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq82-icon16 {
            width: 24px;
            height: 24px;
          }
          .faq82-container17 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq82-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq82-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq82-icon18 {
            width: 24px;
            height: 24px;
          }
          .faq82-icon20 {
            width: 24px;
            height: 24px;
          }
          .faq82-container20 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq82-button {
            align-self: center;
          }
          .faq82-text15 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq82-text16 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq82-text17 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq82-text18 {
            text-align: center;
          }
          .faq82-text19 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

FAQ82.defaultProps = {
  faq2Question1: undefined,
  faq3Question: undefined,
  faq1Question4: undefined,
  content1: undefined,
  heading1: undefined,
  action: undefined,
}

FAQ82.propTypes = {
  faq2Question1: PropTypes.element,
  faq3Question: PropTypes.element,
  faq1Question4: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action: PropTypes.element,
}

export default FAQ82
