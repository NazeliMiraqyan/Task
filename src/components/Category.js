import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { categoryFetch } from '../redux/requests/fetchingCategory';
import { imgFetch } from '../redux/requests/fetchingCategory';
import styled from 'styled-components'

const Div = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:35px;
`
const Div1 = styled.div`
  margin:5px 15px;
  padding:5px 15px;
  border:2px solid LightCoral;
  color:Brown;
  text-transform:uppercase;
  font-weight:bold;
  cursor:pointer;
  transition:.2s linear;
  &:hover {
    background-color: LightCoral;
    border:2px solid white;
    color:white;
  }
`

export default function Category() {
  let dispatch = useDispatch()
  let selector = useSelector(state=>state.data)
  console.log(selector.data);

  useEffect(()=>{
    dispatch(categoryFetch())
  },[])

  const categoryId=(id)=>{
    dispatch(imgFetch(id))
  }
  return (
    <Div>
      {selector.data.map((el,i)=>{
        return(
          <Div1 key={i} onClick={()=>categoryId(el.id)}>
              <div>{el.name}</div>
          </Div1>
        )
      })}
    </Div>
  )
}
