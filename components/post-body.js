import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log(node.data.target.fields.title)
      return (
        <img
          title={node.data.target.fields.title}
          src={node.data.target.fields.file.url}
        />
      );
    },
  },
};

export default function PostBody({ content }) {
  //console.log(content);
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content,options)}
      </div>
    </div>
  );
}
