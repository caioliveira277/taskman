import styled from "styled-components";
import { FadeModal } from "../animations";

export const ModalContent = styled.div`
  margin: 1rem;
  width: 90%;
  height: max-content;
  max-width: 600px;
  background: #ffffff;
  border-radius: 0.5rem;
  opacity: 1;
  z-index: 100;
  animation: ${FadeModal} 350ms ease forwards;
  will-change: transform, top, opacity;
  hr {
    border: 1px solid #f6f6f6;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > div {
    padding-left: 1rem;
    padding-right: 1rem;
    :first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        color: #c1c1c1;
        font-style: italic;
        font-size: 1rem;
        font-weight: normal;
      }
      i {
        font-size: 2.5rem;
        color: var(--color-orange);
        cursor: pointer;
        transition: all 300ms;
        :hover {
          color: var(--color-orange-2);
        }
      }
    }
  }
`;
