import styled from 'styled-components'

export const ToastDiv = styled.div`
  position: fixed;
  top: 100px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 0.7s;
`

export const ToastPrimary = styled.div`
  position: relative;
  right: 0px;
  color: rgb(15, 13, 10);
  border-radius: 5px;
  padding: 1rem 1rem;
  margin: 0.5rem;
  min-width: fit-content;
  z-index: 12;
  transition: ease-out 0.7s;
  ${(props) =>
    props.toastVersion === 'none' &&
    `
      opacity: 0;
      transition: 0.4s;
    `}
  ${(props) =>
    props.toastVersion === 'success' &&
    `
      background-color: var(--text-main);
    `}

${(props) =>
    props.toastVersion === 'failure' &&
    `
    background-color: rgb(214, 29, 29);
   
    `}

${(props) =>
    props.toastVersion === 'reset' &&
    `
      background-color: rgb(242, 125, 29);
    `}
`
