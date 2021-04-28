import styled from "styled-components";

const Styled = styled.div`
  h4 {
    text-align: center;
    margin: 40px 0;
    font-weight: bold;
    color: #225a84;
  }

  .option-btn {
    margin: 0 3px;
    padding: 0 8px;
  }
  
  .toolbar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    
    input {
      margin: 0 10px;
      border-radius: 6px;
      border: 1px solid black;
      margin-top: 10px;
    }
    
    button:nth-child(1){
      margin-right: 30px;
    }
  }
`

export default Styled
