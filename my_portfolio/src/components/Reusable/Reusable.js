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

export function ProgressBar(props) {
  let { js, html, css, jsPercent, htmlPercent, cssPercent } = props;

  return (
    <>
      <span className="progress">
        <span
          className="progress-item js-bar"
          style={{ width: jsPercent }}
        ></span>
        <span
          className="progress-item html-bar"
          style={{ width: htmlPercent }}
        ></span>
        <span
          className="progress-item css-bar"
          style={{ width: cssPercent }}
        ></span>
      </span>
      <ul className="lang-list-container">
        <li className="item js-class">
          {js} <span>{jsPercent}</span>
        </li>
        <li className="item html-class">
          {html} <span>{htmlPercent}</span>
        </li>
        <li className="item css-class">
          {css} <span>{cssPercent}</span>
        </li>
      </ul>
    </>
  );
}
