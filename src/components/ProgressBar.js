import PropTypes from "prop-types";
import React from "react";

export const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className={'Progress-Bar-Container'}>
      <div style={{ width: `${progress}%` }} className={'Progress-Bar'} />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number
}

// Took and Edited this code:  https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl