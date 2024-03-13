
import ImportForm from './components /ImportForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

function App({ }: Props) {
  return (
    <div className='w-full h-dvh'>
      <ToastContainer />
      <ImportForm />
    </div>
  )
}

export default App