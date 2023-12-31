import { useState } from "react";
import "./formPage.scss";

export default function FormPage(){
    const [input, setInput] = useState(0);
    // const [textarea, setTextarea] = useState(0);
    // const [checkbox, setCheckbox] = useState(0);
    // const [show, setShow] = useState(false);
    const [inputValues, setInputValues] = useState(Array(input).fill(''));
    
 const renderInputs = () => {
    const inputs = inputValues.map((value, index) => (
      <input key={index} type="text" value={value} />
    ));
    return <div>{inputs}</div>; 
  };
    return(
        <form className="formSpace">
            <label htmlFor="input">Input {input}</label>
            <input type="number" name="input" min="0" onChange={e => setInput(parseInt(e.target.value))} />
            {/* <label htmlFor="textarea">Textarea</label>
            <input type="number" name="textarea"  onChange={e => setTextarea(e.target.value)} />
            <label htmlFor="checkbox">Checkbox</label>
            <input type="number" name="checkbox"  onChange={e => setCheckbox(e.target.value)} /> */}
            <input type="button" value="Build" onClick={() => setInputValues(Array(input).fill(''))} />
            {renderInputs()}
        </form>

    )
}