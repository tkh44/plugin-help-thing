import React from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled'
import Box from 'Box'

const rootEl = document.getElementById("root");
const h = React.createElement;


const Thing = styled.div`color: blue; & ${Box} { color: pink; }`



function Root() {
  return h(
    Thing,
    {},
    Array.from({ length: 10 }, (_, i) => h(Box, { key: i }, "Hey " + i))
  );
}

ReactDOM.render(h(Root), rootEl);
