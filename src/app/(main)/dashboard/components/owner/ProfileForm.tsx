"use client";

import { useState } from "react";
import EditableField from "@/components/forms/EditableField";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/feature/auth/authSlice";

export default function ProfileForm() {
  const user = useSelector(selectCurrentUser);

  const [form, setForm] = useState({
    name: user?.name,
    phone: user?.phone,
    email: user?.email,
    tenantType: user?.tenantType,
    company: user?.company,
  });

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-xl p-6">
      <h3 className="text-md font-semibold">Profile Information</h3>
      <EditableField
        label="Full Name"
        value={form.name}
        onSave={(val) => updateField("name", val)}
      />

      <EditableField
        label="Phone Number"
        value={form.phone}
        type="tel"
        onSave={(val) => updateField("phone", val)}
      />

      <EditableField
        label="Email Address"
        value={form.email}
        type="email"
        onSave={(val) => updateField("email", val)}
      />

      <EditableField
        label="Tenant Type"
        value={form.tenantType}
        onSave={(val) => updateField("tenantType", val)}
      />

      <EditableField
        label="Company Name"
        value={form.company}
        placeholder="Not stored"
        onSave={(val) => updateField("company", val)}
      />
    </div>
  );
}
