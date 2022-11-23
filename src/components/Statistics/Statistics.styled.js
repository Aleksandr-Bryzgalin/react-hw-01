import styled from 'styled-components'

export const StatSection = styled.section`
display: inline-block;
background-color: #22d7cd;
text-align: center;
border-radius: 5px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
padding: 5px;
margin: 10px;
`
export const Title = styled.h2`
  padding: 10px;  
  color: #000000;
  text-transform: uppercase;
  font-size: 21px;
`

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

export const StatItem = styled.li`  
  border-radius: 5px;
  margin: 2px;
  padding: 15px;
  background-color: #1fb3a9;
  color: #000000;
`
export const StatLabel = styled.span `
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
` 

export const StatPercentage = styled.span `
  font-size: 20px;
`