import { EXAMPLES } from "../data.js"
import { useState } from "react"
import Section from "../Section.jsx"
import TabButton from "./TabButton"


export default function Examples(){

    const [selectedTopic,setSelectedTopic]=useState()

    function handleSelect(selecetedButton){
      //selected buttons => 'components','jsx','props','state'
      setSelectedTopic(selecetedButton)
      // console.log(selectedTopic)
    }
let tabcontent = <p>Please select a topic.</p>
if (selectedTopic){
    tabcontent=(
        
  
        <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
           {EXAMPLES[selectedTopic].code}
           
          </code>
        </pre>
       </div> 
    )
}
   
           
    
    return(
        <Section title="Examples" id="examples">

<menu>
 <TabButton isSelected={selectedTopic=== 'components'}
  onClick={() =>handleSelect('components')}>Components</TabButton>

 <TabButton
  isSelected={selectedTopic=== 'jsx'}
  onClick={() =>handleSelect('jsx')}>Jsx</TabButton>

 <TabButton 
 isSelected={selectedTopic=== 'props'}
 onClick={() =>handleSelect('props')}>Props</TabButton>

 <TabButton 
 isSelected={selectedTopic=== 'state'}
 onClick={() =>handleSelect('state')}>State</TabButton>
</menu>

{tabcontent}
</Section>

    )
}

