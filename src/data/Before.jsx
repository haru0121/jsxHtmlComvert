import React from "react";
import createStyles from "draft-js-custom-styles";
import {
  Editor,
  EditorState,
  ContentState,
  ContentBlock
  // CharacterMetadata,
  // DefaultDraftBlockRenderMap,
  // convertToRaw,
  // convertFromRaw,
  // RawDraftContentState
} from "draft-js";
const Container = () => {
  // const [isEditNow, setIsEditNow] = React.useState(false);
  // const blockRenderMap = DefaultDraftBlockRenderMap.set("br", {
  //   element: "br"
  // });
  // const customStyleMap = {
  //   STRIKETHROUGH: {
  //     textDecoration: "line-through"
  //   }
  // };
  // const { styles, customStyleFn, exporter } = createStyles(
  //   ["font-size", "color", "text-transform"],
  //   "PREFIX_",
  //   customStyleMap
  // );

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray([
        new ContentBlock({
          key: "www",
          type: "header-one",
          // characterList: new List(),
          text: "サンプルテキスト"
        }),
        new ContentBlock({
          key: "ddd",
          type: "paragraph",
          // characterList: new List(),
          text: "aaaa。\nbbbb。\nccc。"
        })
      ])
    )
  );

  return (
    <div
      onDoubleClick={() => {
        // setIsEditNow(true);
      }}
      className="text"
      style={{ border: "none" }}
    >
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        // blockRenderMap={blockRenderMap}
        readOnly={true}
        // customStyleFn={customStyleFn}
      />
    </div>
  );
};
export default Container;
