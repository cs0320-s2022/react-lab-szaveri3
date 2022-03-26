interface TextBoxProps {
    label: string;
    changeHandler: (value: string) => void;
}

export function TextBox(props: TextBoxProps) {
    return (
        <div>
            <label>{props.label}: </label>
            <input type="text" onChange={event => props.changeHandler(event.target.value)}></input>
        </div>
    );
}

export default TextBox;