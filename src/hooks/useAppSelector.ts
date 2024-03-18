import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'src/redux/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
