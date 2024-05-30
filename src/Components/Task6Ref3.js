import { useRef } from "react";
export function CustomTextInput(props) {
    // textInput должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
    const textInput = useRef(null);
  
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
        <input
          type="button"
          value="Фокус на поле для ввода текста"
          onClick={handleClick}
        />
      </div>
    );
  }
  