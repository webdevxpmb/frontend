/**
*
* Faq
*
*/

import React from 'react';
import Card from 'components/Card';
import FAQ from './style';
import listQa from './listQA';

class QA extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: false,
    };
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer(previousState) {
    this.setState({
      toggle: !previousState,
    });
  }

  render() {
    const answer = (
      <div className="qa-li">
        <span className="prefix">A:</span><p dangerouslySetInnerHTML={{ __html: this.props.answer }} />
      </div>
    );

    return (
      <div className="qa-item">
        <button className="qa-li" onClick={() => this.toggleAnswer(this.state.toggle)}>
          <span className="prefix">Q:</span><p dangerouslySetInnerHTML={{ __html: this.props.question }} />
        </button>
        {
          this.state.toggle && answer
        }
      </div>
    );
  }
}

function Faq() {
  return (
    <FAQ>
      {
        listQa.map((item) => (
          <QA question={item.question} answer={item.answer} />
        ))
      }
    </FAQ>
  );
}

QA.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
};

export default Faq;
