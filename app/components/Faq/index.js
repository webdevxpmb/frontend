/**
*
* Faq
*
*/

import React from 'react';

import Card from 'components/Card';
import FAQ from './FAQ';

const listQa = [
  {
    question: 'Apa?',
    answer: 'Halo',
  },
  {
    question: 'Apa?',
    answer: 'Halo',
  },
  {
    question: 'Apa?',
    answer: 'Halo',
  },
  {
    question: 'Apa?',
    answer: 'Halo',
  },
];

function Faq() {
  return (
    <Card>
      <FAQ>
        <h4>Frequently Answered Questions (FAQs)</h4>
        <br />
        {
          listQa.map(item => (
            <QA question={item.question} answer={item.answer} />
          ))
        }
      </FAQ>
    </Card>
  );
}

function QA(props) {
  return (
    <div className="qa-item">
      <p><span className="cyan-item">Q: </span>{props.question}</p>
      <p><span className="cyan-item">A: </span>{props.answer}</p>
    </div>
  );
}

Faq.propTypes = {

};

export default Faq;
