import React from 'react'
// import styled from '@emotion/styled';
import styled from 'styled-components'
export default function Styled_Comp(props) {
  const Btn1 = styled.button`
  color: ${props => props.color_1 || 'white'};
  background-color:black;
  `;
  return (
    <div>
      <Btn1>{props.text}</Btn1>
    </div>
  )
}
