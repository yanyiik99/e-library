// import Button from 'react-bootstrap/Button';


function MyBtn(props) {
  return <button
    type={props.type || ''}
    className='btn text-white px-4 fw-bold border-0'
    style={props.style}
    onClick={() => {
      props.onClick()
    }
    }
  >
    {props.label}
  </button>;
}

export default MyBtn;