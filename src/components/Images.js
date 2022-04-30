import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Div = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:35px;
`
const Div2 = styled.div`
  max-width:200px;
  margin:10px 10px;
`

const Img = styled.img`
  width:13vw;
  height: 13vw;
  object-fit: cover;
  border-radius: 25px;
`

export default function Images() {

  const selector = useSelector(state=>state.dataImg)
  
  return (
    <Div>
      {selector.data.map((elem,i)=>{
        return(
          <Div2 key={i}>
            <Img src={elem.url}/>
          </Div2>
        )
      })}
    </Div>
  )
}
