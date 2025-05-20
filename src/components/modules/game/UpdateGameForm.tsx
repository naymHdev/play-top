import React from "react";
import { TGame } from "@/types/games";

const UpdateGameForm = ({ game }: { game: TGame }) => {
  return (
    <form className="space-y-4">
      {/* Replace with your actual form fields */}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          defaultValue={game.title}
          className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
        />
      </div>
      {/* Add other form fields like price, platform, etc. */}
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        Update Game
      </button>
    </form>
  );
};

export default UpdateGameForm;
