import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${(props) => (props.withError ? "2px solid #F00" : 0)};
  }

  button {
    border: 0;
    width: 80px;
    font-size: 20px;
    font-weight: bold;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: #52d89f;
    }
  }
`;