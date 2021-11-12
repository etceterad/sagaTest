import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {requestDogAC} from "../../../redux/reducers/rootReducer"


const ImageButton: React.FC<{}> = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(requestDogAC())
    }

    return (
        <div className="image-button">
            <button onClick={handleClick}>Random puppy</button>
        </div>
    )
}

export default ImageButton;
