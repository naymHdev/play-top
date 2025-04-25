"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./UserCommentBox.module.css";

// Dynamically import the editor
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const UserCommentBox = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className={styles.editorWrapper}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName={styles.wrapper}
        toolbarClassName={styles.toolbar}
        editorClassName={styles.editor}
        toolbar={{
          options: ["inline", "link", "list"],
          inline: {
            options: ["bold", "italic"],
            className: styles.toolbarButton,
          },
          link: {
            className: styles.toolbarButton,
          },
          list: {
            className: styles.toolbarButton,
          },
        }}
        placeholder="What do you think?..."
      />
      <div className={styles.footer}>
        <button className={styles.loginButton}>Login to comment</button>
      </div>
    </div>
  );
};

export default UserCommentBox;
