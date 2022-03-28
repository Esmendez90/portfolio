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
  let { liClass, href, target, children } = props;
  return (
    <li className={liClass}>
      <a href={href} target={target}>
       {children}
      </a>
    </li>
  );
}