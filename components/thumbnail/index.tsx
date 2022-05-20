import { FC } from 'react';

interface IThumbnail {
    path: string,
    extension: string,
    className?: any,
    alt: string,
}

const Thumbnail: FC<IThumbnail> = ({ path, extension, className, alt }) => {
    return (
        <img className={className} src={`${path}.${extension}`} alt={alt} />
    )
}

export default Thumbnail;