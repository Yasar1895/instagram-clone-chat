import React, { useState } from "react";
import { uploadImage } from "../api/storageApi";

export default function CreatePost() {
  const [file, setFile] = useState(null);

  async function handleUpload() {
    if (!file) return;
    const url = await uploadImage(file, `posts/${file.name}`);
    console.log("Uploaded file URL:", url);
  }

  return (
    <div className="create-post">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
