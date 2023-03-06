import styled, {css, keyframes} from 'styled-components'
import { colors } from './partials'

export const AppContainer = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: ${colors.background};
  color: ${colors.main};
`
export const Title = styled.h1`
    font-family: 'Chewy', cursive;
    font-size: clamp(36px, 10vw, 80px);
    z-index: 50;
    pointer-events: none;
`
export const Intro = styled.p`
    font-size: clamp(14px, 3vw, 32px);
    z-index: 50;
`
export const LogosContainer = styled.section`
  max-width: 840px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 50;
  gap: 12px;

  svg {
    height: clamp(48px, 6vw, 64px);
    fill: ${colors.main}
  }
`
export const DarkOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: ${colors.background};
  mix-blend-mode: difference;
  pointer-events: none;
  transform: translateY(-100%);
  transition: 2s ease;

  &.dark-mode {
    transform: translateY(0)
  }
`
export const PaintOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 0;
  overflow: hidden;

  span {
    height: 300px;
    width: 300px;
    border-radius: 50%;
  }
`