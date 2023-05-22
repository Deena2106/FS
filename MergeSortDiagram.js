import React from 'react';

const MergeSortDiagram = ({ array }) => {
  const renderSplitting = (arr) => {
    if (arr.length <= 1) {
      return (
        <div className="segment">
          <span>{arr[0]}</span>
        </div>
      );
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return (
      <div className="split">
        <div className="left">
          {renderSplitting(left)}
        </div>
        <div className="right">
          {renderSplitting(right)}
        </div>
      </div>
    );
  };

  return (
    <div className="merge-sort-diagram">
      {renderSplitting(array)}
    </div>
  );
};

export default MergeSortDiagram;
