"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./UserCommentBox.module.css";

// Dynamically import to avoid SSR issues
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const UserCommentBox = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className={styles.editorArea}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "history",
          ],
          inline: {
            options: ["bold", "italic", "underline", "monospace"],
          },
          blockType: {
            inDropdown: true,
            options: ["Normal", "H1", "H2", "H3", "Blockquote", "Code"],
          },
        }}
      />
    </div>
  );
};

export default UserCommentBox;
