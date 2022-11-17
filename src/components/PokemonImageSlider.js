import React, { useEffect, useState } from 'react'
import styled from "styled-components";
function ImageContainer({imgs}) {

  const [selectedImgIndex,setSelectedImgIndex] = useState(0);

  const reducedImgs = Object.values(imgs).reduce((flag,current) => {
    if (current != null && typeof current === 'string') {
      flag.push(current)
    } 
    return flag
  },[]);

  const reducedImgs2 = Object.values(imgs.other["official-artwork"]).reduce((flag,current) => {
    if (current != null && typeof current === 'string') {
      flag.push(current)
    } 
    return flag
  },[]);
  let allImgs = reducedImgs2.concat(reducedImgs);
  // .other["official-artwork"]
  // console.log(allImgs)


  return (
    <PokemonImage>
      <ImageArrow left={true}
      onClick={()=>{
        if (selectedImgIndex !== 0) {
          setSelectedImgIndex(selectedImgIndex-1);
        }
      }} />

      <ImgContainer>
        <img src={allImgs[selectedImgIndex]} alt="" width="120px" height="120px"/>
      </ImgContainer>

      <ImageArrow onClick={()=>{
        if (selectedImgIndex !== allImgs.length-1) {
          setSelectedImgIndex(selectedImgIndex+1);
        }
      }} />

    </PokemonImage>
  )
}

export const PokemonImage = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
export const ImageArrow = styled.div`
    cursor: pointer;
    position:relative;
    display:block;
    margin: 100px 0 0 100px;
    width:50px;
    height: 50px;
    border: solid 6px #999;
    border-radius: 100%;
    z-index: 1;
    transition: all .2s linear;
    &:before, &:after{
    content:"";
    position: absolute;
    width:35%;
    height: 10%;
    top:41%;
    left:55%;
    background: #999;
    z-index: 2;
    transform: ${props => props.left ? 'translate(-50%, -50%) rotate(-45deg);' : ' translate(-50%, -50%) rotate(45deg);'}
    transition: all .2s linear;
    }
    
    &:after{
    z-index: 3;
    top:59%;
    left:55%;
    transform: ${props => props.left ? 'translate(-50%, -50%) rotate(45deg);' : ' translate(-50%, -50%) rotate(-45deg);'}
    }
    &:hover{
    border: solid 8px #777;
    &:after, &:before{
        background: #777;
    }
    }
    &:active{
    border: solid 8px #111;
    &:after, &:before{
        background: #111;
    }
}`
export const ImgContainer = styled.div`
    
`
export default ImageContainer