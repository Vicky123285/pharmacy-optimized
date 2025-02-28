"use client";
import { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview before uploading
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image to upload");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setUploadedUrl(data.url);
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {preview && <img src={preview} alt="Preview" className="mt-4 w-32" />}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {uploadedUrl && (
        <p className="mt-2 text-green-600">Uploaded: {uploadedUrl}</p>
      )}
    </div>
  );
}
