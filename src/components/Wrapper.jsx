import { useState } from "react";
import Input from "./Input";
import Text from "./Text";

const Wrapper = () => {
    const [res, setRes] = useState(0);
    const [final, setFinal] = useState(0);

    const add = () => {
        setFinal(prevFinal => parseInt(prevFinal) + parseInt(res));
    }
    const subtract = () => {
        setFinal(prevFinal => parseInt(prevFinal) - parseInt(res));
    }
    return (
        <div style={{display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center'   
    }}>
            <h1>Enter value to add/subtract</h1>
            <Input changeHandler={(e) => {
                const value = e.target.value;
                setRes(value);
            }} />
            <button style={{marginTop:20,
            width:190}}  className="btn btn-primary" onClick={add}>Add</button>
            <button style={{marginTop:20, width:190}}  className="btn btn-danger" onClick={subtract}>Subtract</button>
            <Text result={final} />
        </div>
    )
}

export default Wrapper;