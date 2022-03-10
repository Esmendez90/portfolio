import React from "react";

export default function ImgTag(props) {
  let { containerClass, imgClass, src, alt } = props;
  return (
    <div className={containerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}

export function ListEl(props) {
  let { liClass, href, children } = props;
  return (
  <li className={liClass}>
    <a href={href}>{children}</a>
  </li>
  );
}


