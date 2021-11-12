import React from 'react';
import {IState} from '../../../redux/interfaces/redux.interfaces';
import {useSelector} from 'react-redux';

const ImageContainer: React.FC<{}> = (props) => {
    //@ts-ignores
    const url = useSelector<IState, string | null>(state => state.url);
    console.log(url)

    return (
        <div className="image">
            {url && <img src={url} alt="dog" />}
        </div>
    )
}

export default ImageContainer;