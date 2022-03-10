import React from "react";

function ImageTag(props) {
    let { imgClass, src, alt } = props;
    return <img className={imgClass} src={src} alt={alt} />
}

export default ImageTag;