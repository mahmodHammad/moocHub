// DONT TOUCH IT XXX
import React from "react";

import getIndex from "../helper/getIndex";

const renderWithStyles = (text, links, formatting, loadContent) => {
  let pageLinks = [];
  let pageFormatting = [];
  let paragraph = [];
  let i = 0;
  let done = false;

  if (links !== undefined) {
    pageLinks = getIndex(text, links, true);
  }
  if (formatting !== undefined) {
    pageFormatting = getIndex(text, formatting.bold, false);
  }

  //XXX will be deprecated => find better algorithm than this XXX
  pageLinks.forEach(pl => {
    let notLink = text.substring(i, pl.index);
    let j = 0;
    if (pageFormatting.length) {
      if (!done) {
        pageFormatting.forEach(pf => {
          let notBold = notLink.substring(j, pf.index);
          paragraph.push(<span>{notBold}</span>);
          paragraph.push(<span className="wbold">{pf.word}</span>);
          j = pf.index + pf.word.length;
        });
        done = true;
      }
      paragraph.push(<span>{notLink.substring(j, pl.index)}</span>);
    } else {
      paragraph.push(<span>{notLink}</span>);
    }
    paragraph.push(
      <span className="linkx" onClick={() => loadContent(pl.word)}>
        {pl.word}
      </span>
    );

    i = pl.index + pl.word.length;
  });
  paragraph.push(<span>{text.substring(i)}</span>);
  return <div className="modiPh"> {[...paragraph]} </div>;
};

export default function WikiContentStyle({
  text,
  links,
  formatting,
  loadContent
}) {
  return <div>{renderWithStyles(text, links, formatting, loadContent)}</div>;
}
