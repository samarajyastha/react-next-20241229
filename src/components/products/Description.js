"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";

const ProductDescription = ({ description }) => {
  return (
    <MarkdownPreview
      source={description}
      style={{
        background: "#ffffff",
        color: "#000000",
      }}
    />
  );
};

export default ProductDescription;
