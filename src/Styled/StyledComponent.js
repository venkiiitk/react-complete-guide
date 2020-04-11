import styled from 'styled-components'


const StyledButton = styled.button`
    background-color: ${props => props.alt ?'red' : 'blue'  };
    width: 100px;
    color: black;
    padding: 10px;
    font-weight: bold;
    cursor:pointer;
    &:hover  {
    background-color: yellow;
    color: black;}
`;


const StyledDiv = styled.div`
  text-align: center;
  width : 100%;
`;


export {
    StyledButton,
    StyledDiv,
}