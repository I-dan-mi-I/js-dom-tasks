// BEGIN

/**
 * @param {Document} document
 */
const wrap = (document) => {
  for (let block of document.querySelectorAll("div")) {
      for (let block_child of block.childNodes) {
          if (!(block_child instanceof Text))
              continue;

          let child = document.createElement("p");
          let text = block_child.textContent.trim();

          if (text.length === 0)
              continue;

          child.append(document.createTextNode(text));

          block_child.replaceWith(child);
      }
  }
}

export default wrap;
// END