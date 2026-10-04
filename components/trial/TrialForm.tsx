"use client";

import React, { useRef, useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Zap,
  Loader2,
  MonitorSmartphone,
  AppWindow,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { appConfig } from "@/lib/config";
import { createWhatsAppLink } from "@/lib/utils";
import { getUiText } from "@/lib/ui-text";

import { buttonClasses } from "@/components/ui/Button";

type FieldName = "name" | "email" | "whatsapp";
type Errors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Product names are language-neutral; the generic entry is localized. */
const DEVICE_OPTIONS: { value: string; label: string }[] = [
  { value: "firetv", label: "Amazon Fire TV Stick / Cube" },
  { value: "samsung", label: "Samsung Smart TV (Tizen)" },
  { value: "lg", label: "LG Smart TV (webOS)" },
  { value: "android", label: "Android TV / Box / Shield" },
  { value: "apple", label: "Apple TV / iPhone / iPad" },
  { value: "pc", label: "Windows PC / Mac" },
  { value: "receiver", label: "MAG / Formuler / Enigma2" },
];

const APP_OPTIONS: { value: string; label: string; recommended?: boolean }[] = [
  { value: "tivimate", label: "TiviMate IPTV Player", recommended: true },
  { value: "smarters", label: "IPTV Smarters Pro" },
  { value: "iboplayer", label: "IBO Player / IBO Pro" },
  { value: "xciptv", label: "XCIPTV Player" },
  { value: "kodi", label: "Kodi PVR Simple Client" },
  { value: "m3u", label: "M3U URL / Xtream Codes" },
];

export interface TrialFormText {
  title: string;
  subtitle: string;
  formName: string;
  formEmail: string;
  formWhatsapp: string;
  formDevice: string;
  formApp: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  noCardRequired: string;
  instantDelivery: string;
  support247: string;
  whatsappGreeting: string;
}

export default function TrialForm({ locale = "de", text }: { locale?: string; text: TrialFormText }) {
  const ui = getUiText(locale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    device: "firetv",
    app: "tivimate",
    adultChannels: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (field: FieldName, value: string): string | undefined => {
    const v = value.trim();
    if (!v) return ui.fieldRequired;
    if (field === "email" && !EMAIL_RE.test(v)) return ui.fieldEmail;
    if (field === "whatsapp" && v.replace(/\D/g, "").length < 7) return ui.fieldPhone;
    return undefined;
  };

  const validateAll = (): Errors => {
    const next: Errors = {};
    (["name", "email", "whatsapp"] as FieldName[]).forEach((f) => {
      const msg = validateField(f, formData[f]);
      if (msg) next[f] = msg;
    });
    return next;
  };

  const update = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (typeof value === "string" && errors[field as FieldName]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field as FieldName, value) }));
    }
  };

  const handleBlur = (field: FieldName) => {
    const msg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const found = validateAll();
    setErrors(found);
    const firstInvalid = (["name", "email", "whatsapp"] as FieldName[]).find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch(appConfig.apiEndpoints.trial, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          locale,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || ui.genericError);
      }
    } catch {
      setStatus("error");
      setErrorMessage(ui.networkError);
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl = createWhatsAppLink(
    siteConfig.support.whatsapp,
    `${text.whatsappGreeting} (24h test, ${locale}) – ${formData.name || "-"}, ${formData.device}, ${formData.app}, ${
      formData.email || "-"
    }`
  );

  const fieldProps = (field: FieldName) => ({
    id: `trial-${field}`,
    name: field,
    value: formData[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => update(field, e.target.value),
    onBlur: () => handleBlur(field),
    disabled: loading,
    required: true,
    "aria-required": true as const,
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `trial-${field}-error` : undefined,
    className: "field-input",
  });

  const FieldError = ({ field }: { field: FieldName }) =>
    errors[field] ? (
      <p id={`trial-${field}-error`} className="field-error">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>{errors[field]}</span>
      </p>
    ) : null;

  return (
    <div className="card p-5 sm:p-8 relative overflow-hidden">
      <div className="absolute top-0 end-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {status === "success" ? (
        <div className="text-center py-8 space-y-5 animate-fadeIn relative z-10" role="status" aria-live="polite">
          <div className="w-16 h-16 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mx-auto shadow-glow-sm border border-primary-500/30">
            <CheckCircle2 className="w-9 h-9" aria-hidden="true" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{text.formSuccessTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{text.formSuccessDesc}</p>
          </div>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("whatsapp", "lg")}
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>{text.support247}</span>
          </a>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10" aria-busy={loading}>
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{text.title}</h3>
            <p className="text-sm text-slate-300">{text.subtitle}</p>
          </div>

          {status === "error" && (
            <div
              role="alert"
              className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-sm flex items-start gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="trial-name" className="field-label">
              <User className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{text.formName}</span>
              <span aria-hidden="true" className="text-primary-300">*</span>
            </label>
            <input
              {...fieldProps("name")}
              type="text"
              autoComplete="name"
              placeholder={ui.namePlaceholder}
            />
            <FieldError field="name" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="trial-email" className="field-label">
              <Mail className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{text.formEmail}</span>
              <span aria-hidden="true" className="text-primary-300">*</span>
            </label>
            <input
              {...fieldProps("email")}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="name@example.com"
              dir="ltr"
            />
            <FieldError field="email" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="trial-whatsapp" className="field-label">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>{text.formWhatsapp}</span>
              <span aria-hidden="true" className="text-primary-300">*</span>
            </label>
            <input
              {...fieldProps("whatsapp")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+49 170 1234567"
              dir="ltr"
            />
            <FieldError field="whatsapp" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="trial-device" className="field-label">
                <MonitorSmartphone className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                <span>{text.formDevice}</span>
              </label>
              <select
                id="trial-device"
                name="device"
                value={formData.device}
                onChange={(e) => update("device", e.target.value)}
                disabled={loading}
                className="field-input"
              >
                {DEVICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
                <option value="other">{ui.other}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="trial-app" className="field-label">
                <AppWindow className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                <span>{text.formApp}</span>
              </label>
              <select
                id="trial-app"
                name="app"
                value={formData.app}
                onChange={(e) => update("app", e.target.value)}
                disabled={loading}
                className="field-input"
              >
                {APP_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                    {o.recommended ? ` (${ui.recommended})` : ""}
                  </option>
                ))}
                <option value="other">{ui.other}</option>
              </select>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            <span aria-hidden="true">* </span>
            {ui.required}
          </p>

          <ul className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 text-xs text-slate-300">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              {text.noCardRequired}
            </li>
            <li className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary-300 shrink-0" aria-hidden="true" />
              {text.instantDelivery}
            </li>
          </ul>

          <button type="submit" disabled={loading} className={buttonClasses("primary", "lg", "w-full")}>
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            )}
            <span>{loading ? text.formSubmitting : text.formSubmit}</span>
            {!loading && <Send className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />}
          </button>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 min-h-[44px] text-sm font-semibold text-[#25D366] hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>{ui.trialWhatsappFallback}</span>
          </a>
        </form>
      )}
    </div>
  );
}
