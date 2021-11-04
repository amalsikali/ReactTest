import React, { useState } from "react";

function ProgressRate(props) {
  const [Rate, setRate] = useState(
    (props.likes * 100) / (props.likes + props.dislikes)
  );
  return (
    <div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: Rate + "%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {Rate}%
        </div>
      </div>
    </div>
  );
}

export default ProgressRate;
