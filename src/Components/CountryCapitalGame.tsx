import { useEffect, useState } from "react";
import Button from "./Button/Button";

interface CountryCapitalGameProps {
    data:{[country:string]:string}
}
type ListItem = {
 color:string,
 text:string
}
export default function CountryCapitalGame({ data }:CountryCapitalGameProps) {
    const  shuffle = (array:Array<ListItem>) =>{
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    const buildArrayFromDate = (data:{[country:string]:string}) =>{
        const arr =  Object.entries(data).reduce((acc:Array<ListItem>,[country,city])=>{
            const cityObj : ListItem = {
                text:city,
                color:'grey'
            }
            const countryObj : ListItem = {
                text:country,
                color:'grey'
            }
            return [...acc,cityObj,countryObj]
        },[])
        return shuffle(arr) 
    }
    const [list,setList] = useState(buildArrayFromDate(data))
    const [firstPickIndex,setFirstPickIndex] = useState(-1)
    const [secondPickIndex,setSecondPickIndex] = useState(-1)
    useEffect(()=>{
        if(secondPickIndex !== - 1){
          if(data[list[firstPickIndex].text] === list[secondPickIndex].text||  data[list[secondPickIndex].text] === list[firstPickIndex].text){
            const a = list.filter((v,i) => i !== firstPickIndex && i !== secondPickIndex)
            setList(a)
          }
          else{
           list[firstPickIndex].color  = "red"
           list[secondPickIndex].color  = "red"
           setList([...list])
          }
          
        }
        return (()=>{
            setFirstPickIndex(-1)
            setSecondPickIndex(-1)
        })
      },[secondPickIndex])
      useEffect(()=>{
        if(firstPickIndex !== -1){
            list.forEach((v,i)=>{
                if( i === firstPickIndex) list[firstPickIndex].color = "#0000ff"
                else list[i].color = "grey"
            })
            setList([...list])
        }
      },[firstPickIndex])
      const handleClick = (index:number) => {
        if(firstPickIndex === -1 ){
            setFirstPickIndex(index)
        }
        else{
            setSecondPickIndex(index)
        }
      }
    return (
        <div>
            {list.map((v,i) => <Button {...v} key = {v.text} index={i} handleClick={handleClick}></Button>)}
        </div>
    )
}
    
    