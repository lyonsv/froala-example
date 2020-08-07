import styled from 'styled-components'
import { dark } from './colors'
import { pageWidth } from './spacing'

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: ${pageWidth}) {
    display: flex;
    flex-direction: column;
  }
`

const Container = styled.div`
  padding: 2rem;
  max-width: ${pageWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.fillHeight ? "100vh": 0};
`
export { Grid, Container }
