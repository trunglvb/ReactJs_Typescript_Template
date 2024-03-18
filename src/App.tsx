import useAppSelector from './hooks/useAppSelector'
import { RootState } from './redux/store'

function App() {
  const value = useAppSelector((state: RootState) => state.counterReducer.value)
  return (
    <>
      <div>
        <span className='text-green-600'>Template</span>
      </div>
      <div>{value}</div>
    </>
  )
}

export default App
