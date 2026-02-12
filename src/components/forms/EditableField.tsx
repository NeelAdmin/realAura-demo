"use client";

import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";

type Props = {
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onSave: (value: string) => void;
};

export default function EditableField({
  label,
  value = "",
  placeholder = "Not provided",
  type = "text",
  onSave,
}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setInputValue(value);
    setIsEdit(false);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <p className="mb-2 text-sm text-gray-500">{label}</p>

      {!isEdit ? (
        <div className="flex items-center justify-between">
          <p className={`text-sm ${value ? "text-black" : "text-gray-400"}`}>
            {value || placeholder}
          </p>

          <button
            onClick={() => setIsEdit(true)}
            className="flex cursor-pointer items-center gap-1 text-sm font-medium"
          >
            <p className="text-black underline">{value ? "Edit" : "Add"}</p>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <input
            type={type}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />

          <button onClick={handleSave} className="rounded-md bg-green-500 p-2 text-white">
            <Check size={14} />
          </button>

          <button onClick={handleCancel} className="rounded-md bg-red-500 p-2 text-white">
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
