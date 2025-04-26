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

const Description = () => {
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
      className="border border-card bg-card rounded-xl p-2 mt-3 relative"
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
    </div>
  );
};

export default Description;
