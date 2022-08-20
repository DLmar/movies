import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";

const useAppDispatch = () => useDispatch()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export{
    useAppDispatch,
    useAppSelector
}
