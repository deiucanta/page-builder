"use client";

import { PageBuilder, type BlockSnapshotIn } from "@deiucanta/page-builder";
import "@deiucanta/page-builder/styles.css";
import { useEffect, useState } from "react";

const blocks: BlockSnapshotIn[] = [
  {
    type: "container",
    fields: [
      { name: "className", type: "text", defaultValue: "" },
      { name: "padding", type: "text", defaultValue: "16px" },
      { name: "background", type: "text", defaultValue: "#ffffff" },
    ],
  },
  {
    type: "text",
    fields: [
      { name: "content", type: "textarea", defaultValue: "Hello World" },
      { name: "className", type: "text", defaultValue: "" },
      { name: "fontSize", type: "text", defaultValue: "16px" },
      { name: "color", type: "text", defaultValue: "#000000" },
    ],
  },
  {
    type: "button",
    fields: [
      { name: "text", type: "text", defaultValue: "Click me" },
      { name: "className", type: "text", defaultValue: "" },
      { name: "backgroundColor", type: "text", defaultValue: "#007bff" },
      { name: "textColor", type: "text", defaultValue: "#ffffff" },
    ],
  },
  {
    type: "image",
    fields: [
      { name: "src", type: "text", defaultValue: "" },
      { name: "alt", type: "text", defaultValue: "" },
      { name: "width", type: "text", defaultValue: "auto" },
      { name: "height", type: "text", defaultValue: "auto" },
      { name: "className", type: "text", defaultValue: "" },
    ],
  },
  {
    type: "heading",
    fields: [
      { name: "text", type: "text", defaultValue: "Heading" },
      {
        name: "level",
        type: "select",
        defaultValue: "h2",
        options: [
          { label: "H1", value: "h1" },
          { label: "H2", value: "h2" },
          { label: "H3", value: "h3" },
          { label: "H4", value: "h4" },
          { label: "H5", value: "h5" },
          { label: "H6", value: "h6" },
        ],
      },
      { name: "className", type: "text", defaultValue: "" },
    ],
  },
];

export default function EditorClient() {
  const [initialData, setInitialData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial data from API
    fetch("/api/load")
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setInitialData(data);
        }
      })
      .catch((err) => console.error("Failed to load data:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (data: any, iframe: HTMLIFrameElement | null) => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      if (iframe) {
        iframe.src = iframe.src;
      }

      console.log("Data saved successfully");
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading editor...</div>
      </div>
    );
  }

  return (
    <PageBuilder
      blocks={blocks}
      initialData={initialData}
      onSave={handleSave}
      previewUrl="/preview"
      debounce={1000}
    />
  );
}
