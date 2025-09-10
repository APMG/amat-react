import React from 'react';
import Traverse from '../../utils/Traverse';

const Aside = (props) => {
  return (
    <>
      <style>
        {`
          .apm-aside-custom {
            float: right;
            width: 300px;
            margin: 0 0 20px 20px;
            padding: 0px 15px;
            background-color: #f8f9fa;
            color: #000;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            line-height: 1.4;
          }

          .apm-aside-custom p {
            font-size: 13px;
          }
          
          @media (max-width: 957px) {
            .apm-aside-custom {
              float: none;
              width: 100%;
              margin: 20px 0;
            }
          }
        `}
      </style>
      <aside className="apm-aside-custom">{Traverse(props)}</aside>
    </>
  );
};

export default Aside;
