import React, { Component } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

class Training extends Component {

    render() {
        return (
            <GridWrapper>
                <h1>Training</h1>
            </GridWrapper>
        )
    }
}

export default Training;