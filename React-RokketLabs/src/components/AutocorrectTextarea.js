import React, { useState } from "react";

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    const { corrections } = this.props;

    const onChange = (e) => {
      let words = e.target.value.split(" ");
      const wordsLength = words.length;

      for (let i = 0; i < wordsLength; i++) {
        const word = words[i];
        const correctedWord = corrections[word];

        if (correctedWord) words[i] = correctedWord;
      }

      const wordsJoined = words.join(" ");
      this.setState({ value: wordsJoined });
    };

    return (
      <div className="text-center">
        <textarea
          data-testid="textarea"
          rows={10}
          cols={80}
          className="card"
          value={this.state.value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default AutocorrectTextarea;
