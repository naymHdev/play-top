"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import PTButton from "@/components/ui/PTButton";

// Dynamically import the Editor
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const UserCommentBox = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editor = useRef<any>(null);

  function focusEditor() {
    if (editor.current) {
      editor.current.focus();
    }
  }

  return (
    <div
      className="border border-card bg-card rounded-2xl p-4"
      style={{ minHeight: "10em", cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        placeholder="What do you think?..."
        editorRef={(ref) => (editor.current = ref)}
        toolbar={{
          options: ["inline", "link", "list"],
          inline: {
            options: ["bold", "italic"],
          },
          link: {
            options: ["link"],
          },
          list: {
            options: ["unordered", "ordered"],
          },
        }}
        toolbarStyle={{
          backgroundColor: "transparent",
        }}
        toolbarClassName="custom-toolbar"
      />
      <div className=" flex items-center justify-end -mt-[130px]">
        <PTButton
          className="border border-foreground/70 text-sm py-2 px-5 bg-card"
          label="Login to Comment"
        />
      </div>
    </div>
  );
};

export default UserCommentBox;
