
function Input(props) {


  return (
    <div>
      <label className='d-block'>{props.label}</label>
      <input
        ref={props.ref}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value || ''}
        onChange={(val) => {
          val.preventDefault()
          props.onChange(val.target.value)
        }
        }
        style={props.value === undefined ? {} : props.style || {}}
      />
    </div>
  )
}

export default Input;