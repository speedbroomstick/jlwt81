import { useState } from "react";
import "./formPage.scss";

export default function FormPage() {
  const [input, setInput] = useState(0);
  const [textarea, setTextarea] = useState(0);
  const [checkbox, setCheckbox] = useState(0);
  const [inputValues, setInputValues] = useState({
    textInput: Array(input).fill(""),
    checkbox: Array(checkbox).fill(""),
    textarea: Array(textarea).fill(""),
  });

  const renderInputs = () => {
    const textInputs = inputValues.textInput.map((value, index) => (
      <input key={index} type="text" />
    ));
    const checkboxInputs = inputValues.checkbox.map((value, index) => (
      <input key={index} type="checkbox" />
    ));
    const textareas = inputValues.textarea.map((value, index) => (
      <textarea key={index} cols="30" rows="10"></textarea>
    ));
    return (
      <div>
        {textInputs} {checkboxInputs} {textareas}
      </div>
    );
  };
  
  return (
    <form className="formSpace">
      <label htmlFor="input">Input</label>
      <input
        type="number"
        name="input"
        min="0"
        onChange={(e) =>
          setInput(e.target.value === "" ? 0 : parseInt(e.target.value))
        }
      />
      <label htmlFor="textarea">Textarea</label>
      <input
        type="number"
        name="textarea"
        min="0"
        onChange={(e) =>
          setTextarea(e.target.value === "" ? 0 : parseInt(e.target.value))
        }
      />
      <label htmlFor="checkbox">Checkbox</label>
      <input
        type="number"
        name="checkbox"
        min="0"
        onChange={(e) =>
          setCheckbox(e.target.value === "" ? 0 : parseInt(e.target.value))
        }
      />
      <input
        type="button"
        value="Build"
        onClick={() =>
          setInputValues({
            textInput: Array(input).fill(""),
            checkbox: Array(checkbox).fill(""),
            textarea: Array(textarea).fill(""),
          })
        }
      />
      {renderInputs()}
    </form>
  );
}
