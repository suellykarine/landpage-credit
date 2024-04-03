import styled from "styled-components";

export const ContainerResponseInvitationLetter = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .big-box {
    width: clamp(380px, 100%, 534px);
    height: 351px;
    left: 416px;
    top: 209px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25%;

    border-radius: 18px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(100px);

    .small-box {
      width: clamp(180px, 100%, 376px);
      height: 181px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: clamp(180px, 100%, 376px);
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: var(--white);
        span {
          font-weight: 500;
          b {
            color: var(--secondary-color);
          }
        }
      }
    }
  }
`;
