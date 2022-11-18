import { removeExpensive } from '../../../../redux/expensives/reducer';
import { useAppDispatch } from '../../../../redux/store';


export const useListHook = () => {
    const dispatch = useAppDispatch();

    const deleteExpensive = (id: number) => {
        dispatch(removeExpensive(id))
    }

    return {deleteExpensive} 
}