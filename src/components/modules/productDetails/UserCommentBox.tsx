"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { comments } from "@/services/comments";
import { useUser } from "@/contexts/UserContext";

// Dynamically import the Editor
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const UserCommentBox = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // ----- User Data -----
  const { user } = useUser();
  // console.log(user);
  const editor = useRef<any>(null);

  function focusEditor() {
    if (editor.current) {
      editor.current.focus();
    }
  }

  const handleSubmit = async () => {
    // const rawContentState = convertToRaw(editorState.getCurrentContent());
    const commentText = editorState.getCurrentContent().getPlainText();

    const commentData = {
      comment: commentText,
      gameId: user?.id,
    };

    try {
      // console.log("commentData", commentData);
      const res = await comments(commentData);
      console.log("object", res);
    } catch (error: any) {
      console.log(error);
    }

    console.log("Server Response:", commentData);
  };

  return (
    <div className="w-full max-w-3xl mx-auto border border-card bg-card rounded-2xl p-4">
      <div className="min-h-[10em] cursor-text" onClick={focusEditor}>
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
            border: "none",
          }}
          toolbarClassName="!bg-transparent border-b border-muted rounded-t-md"
          editorClassName="px-2 py-2 min-h-[120px] text-sm"
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="bg-secondary text-primary-foreground px-5 py-1.5 rounded-full transition hover:border-none hover:cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserCommentBox;
