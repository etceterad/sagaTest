import React from 'react';
import ImageContainer from './ImageContainer/imgeContainer';
import ImageButton from './ImageButton/imageButton';

const ImageWrapper: React.FC = () => {
    return (
        <div className="image">
            <ImageButton />
            <ImageContainer />
        </div>
    )
}

export default ImageWrapper;