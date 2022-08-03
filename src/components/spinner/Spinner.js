import { produceWithPatches } from 'immer'
import { RingLoader } from 'react-spinners'


const override = {
  display: "block",
  margin: "0 auto",
  marginTop: '200px',
  borderColor: "red",
  height: "100vh",
}

const Spinner = (props) => {
  return (
    <div className="sweet-loading">
    <h2 style={{textAlign: 'center', color: '#fff', marginTop: '150px'}}>{props.text}</h2>
      <RingLoader cssOverride={override} size={100} color={'#fff'}/>
    </div>
  )
}

export default Spinner