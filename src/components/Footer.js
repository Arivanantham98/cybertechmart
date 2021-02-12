import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  const url='https://arivanantham.tech'
  return (
  <Wrapper>
    <h5>&copy; {new Date().getFullYear()}
    <span> CyberTech Mart - </span>
    </h5>
    <h5>All Rights Reserved - </h5>
    <h5>Made With a ❤️ by <a href={url} target="_blank">Arivanantham Parthipan</a></h5>
  </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-7);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  a{
    color: var(--clr-primary-7);
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
