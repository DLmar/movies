import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import { AppDispatch } from "../store/store";

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export{
    useAppDispatch,
    useAppSelector
}
