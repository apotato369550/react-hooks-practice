import { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
    const [value, setValue] = useState(0);
    const [text, setText] = useState("")
    const newCount = useRef(0);
    // console.log(newCount);

    // whenever the component is rendered, count gets increased by one
    // when count gets increased by 1, it changes the state (useState) and re-renders
    // this results in an infinite loop 
    // to stop this, we can use useRef
    /*
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount((prev) => prev + 1);
    });
    */

    // the key difference between useState and useRef
    // useState - re-renders the component after the value assigned changes
    // useRef - does not re-render the component after its assigned value changes
    useEffect(() => {
        newCount.current += 1;
    })

    // useRef can also be used to access the DOM (document object model) elements specifically.
    // this is done in compination with the 'ref' attribute
    // syntax: <tag ref={yourRefHere} />
    const inputElement = useRef();

    // one example of accessing the value of an <input /> element
    const buttonClicked = () => {
        setText(inputElement.current.value);
        inputElement.current.style.background = "blue";
    }
        
  return (
    <div>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Render Count for this useRef component {newCount.current}</h1>
      <input type="text" ref={inputElement}/>
      <button onClick={buttonClicked}>Click Here</button>
      <p>{text}</p>
    </div>
  );
}

export default UseRefExample