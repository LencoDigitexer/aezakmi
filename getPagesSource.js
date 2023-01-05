function DOMtoString(document_root) {
  console.log("start dom");
  var html = "",
    node = document_root.firstChild;
  while (node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        html += node.outerHTML;
        break;
      case Node.TEXT_NODE:
        html += node.nodeValue;
        break;
      case Node.CDATA_SECTION_NODE:
        html += "<![CDATA[" + node.nodeValue + "]]>";
        break;
      case Node.COMMENT_NODE:
        html += "<!--" + node.nodeValue + "-->";
        break;
      case Node.DOCUMENT_TYPE_NODE:
        // (X)HTML documents are identified by public identifiers
        html +=
          "<!DOCTYPE " +
          node.name +
          (node.publicId ? ' PUBLIC "' + node.publicId + '"' : "") +
          (!node.publicId && node.systemId ? " SYSTEM" : "") +
          (node.systemId ? ' "' + node.systemId + '"' : "") +
          ">\n";
        break;
      default:
        break;
    }
    node = node.nextSibling;
  }

  var re = /access_token=(.*?)&/gi;

  var token = re.exec(html);

  var text = "Вечный токен: ";
  if (token == null) {
    re = /access_token:"(.*?)"/gi;
    text = "";
    token = re.exec(html);
  }
  token = text + token[1];

  navigator.clipboard
    .writeText(token)
    .then(() => {
      // Получилось!
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  return token;
}

prompt("Your Token", DOMtoString(document));
