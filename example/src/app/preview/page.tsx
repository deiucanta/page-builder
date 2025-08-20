import { readFile } from "fs/promises";
import path from "path";

async function loadPageData() {
  try {
    const filePath = path.join(process.cwd(), "page-data.json");
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty object
    return {};
  }
}

export default async function PreviewPage() {
  const data = await loadPageData();

  return (
    <div className="p-8 min-h-screen bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Page Data Preview</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <pre className="whitespace-pre-wrap overflow-x-auto text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
