import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please check your inputs.");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // <-- Overwrite with token string
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message delivered!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Pipeline failure sending input.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm w-full text-left">
      <h3 className="text-xl font-bold text-slate-950 mb-6 tracking-tight">
        {t("formSend")}
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="form-name"
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            {t("formName")}
          </label>
          <InputText
            id="form-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isSubmitting}
            className="w-full p-3.5 border border-slate-200 rounded-xl text-slate-900 bg-slate-50/50 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="form-email"
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            {t("formEmail")}
          </label>
          <InputText
            id="form-email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            disabled={isSubmitting}
            className="w-full p-3.5 border border-slate-200 rounded-xl text-slate-900 bg-slate-50/50 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="form-msg"
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            {t("formMessage")}
          </label>
          <InputTextarea
            id="form-msg"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={5}
            placeholder={t("formPlaceholder")}
            disabled={isSubmitting}
            className="w-full p-3.5 border border-slate-200 rounded-xl text-slate-900 bg-slate-50/50 resize-none outline-none"
          />
        </div>
        <Button
          label={isSubmitting ? t("formSending") : t("formSend")}
          icon={isSubmitting ? "pi pi-spin pi-spinner" : "pi pi-send"}
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full bg-slate-950 text-white p-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-indigo-600 border-none shadow-sm"
        />
      </form>
    </div>
  );
}
