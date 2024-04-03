import styled from "styled-components";
import { roboto } from "@component/app/globals";

export const ContainerForm = styled.main`
  box-sizing: border-box;

  font-family: ${roboto.style.fontFamily};

  width: clamp(380px, 100%, 534px);
  height: clamp(400px, 100%, 628px);
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(100px);

  .input-phone {
    input {
      font-family: ${roboto.style.fontFamily};
      color: var(--white);
      font-size: 0.875rem;
      margin-top: 0px;
    }
  }
  .container-inside {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(380px, 90%, 443.47px);
    height: clamp(400px, 100%, 514px);

    .Logo {
      margin: 0;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 10%;
      img {
        width: 251px;
        height: 38px;
      }
      p {
        margin: 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: var(--white);
      }
    }
    .formulary-invitation-letter {
      height: 80%;
      height: 375px;
      display: flex;
      gap: 8px;
      flex-direction: column;
      align-items: center;

      .big {
        width: 100%;
      }
      .container-small-input {
        width: 100%;
        display: flex;
        margin: 0;
        flex-direction: row;
        justify-content: space-between;
        .small {
          width: 48%;
          .mantine-1v7s5f8 {
            width: 100%;
          }
        }
      }
      label {
        color: var(--white);
        font-style: normal;
        font-size: 12px;
        line-height: 16px;
      }
      .mantine-1v7s5f8 {
        color: var(--red-alert);
      }
      input:-webkit-autofill {
        -webkit-text-fill-color: var(--white) !important;
      }
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px var(--primary-color) inset;
      }
      input {
        height: 42px;
        background-color: var(--primary-color);
        color: var(--white);
        border: 1px solid var(--white);
        border-radius: 6px;
      }

      ::placeholder {
        color: var(--gray-placeholder);

        width: 414px;
        height: 20px;

        font-size: 14px;
        line-height: 20px;

        display: flex;
        align-items: center;
      }
      .error {
        text-align: end;
        font-size: 11px;
        color: var(--red-alert);
        font-weight: 700;
        line-height: 16px;
        margin: 0;
        position: absolute;
        z-index: 0;
      }
    }
    p {
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      color: var(--white);
      a {
        color: var(--white);
      }
    }
    button {
      margin-top: 47px;
      width: 87.09px;
      height: 37px;

      background: var(--secondary-color);
      border: none;
      border-radius: 4.8px;

      font-weight: 700;
      font-size: 14px;
      line-height: 21px;

      color: var(--white);
      transition: 0.3s;
    }
    button:hover {
      cursor: pointer;
      background: rgb(236, 137, 49, 0.8);
      transition: 0.3s;
      transform: scale(1.03);
    }
  }
`;

export const PrivacyPoliceContainer = styled.div`
  margin-top: 10px;
  input {
    margin-right: 10px;
    cursor: default;
  }

  div {
    display: flex;
  }
`;
