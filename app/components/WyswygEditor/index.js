/**
*
* WyswygEditor
*
*/

import React from 'react';
import ReactQuill from 'react-quill';

import {
  Wyswyg,
} from './styled';

class WyswygEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <Wyswyg>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          theme="snow"
        />
        <button className="submit" onClick={() => this.props.onSubmit(this.state.text)}><span className="icon-send" /> Submit</button>
      </Wyswyg>
    );
  }
}

WyswygEditor.propTypes = {
  placeholder: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
};

export default WyswygEditor;
