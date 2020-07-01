import React from "react";
class Loading extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
        id="progress-005"
        className="progress-005"
      >
        <rect className="shape" x="10" y="5" width="6" height="20" fill="#1890ff">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="-0.333s"
            dur="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 30; 10"
            begin="-0.333s"
            dur="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="20; 10; 20"
            begin="-0.333s"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect className="shape" x="22" y="5" width="6" height="20" fill="#1890ff">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="-0.166s"
            dur="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 30; 10"
            begin="-0.166s"
            dur="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="20; 10; 20"
            begin="-0.166s"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect className="shape" x="34" y="5" width="6" height="20" fill="#1890ff">
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 30; 10"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="20; 10; 20"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    );
  }
}
export default Loading;