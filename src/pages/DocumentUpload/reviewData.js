// Enforce the server's document profile before rendering any extracted value.
// The backend owns the catalogue and field meanings; UI labels never select a parser.
export function selectProfileData(result) {
  const selected = {};
  for (const path of result.profile?.field_paths || []) {
    const parts = path.split(".");
    if (
      parts.some((part) =>
        ["__proto__", "constructor", "prototype"].includes(part),
      )
    )
      continue;
    let value = result.data;
    for (const part of parts) value = value?.[part];
    if (value == null) continue;
    let target = selected;
    for (const part of parts.slice(0, -1)) {
      if (!target[part]) target[part] = {};
      target = target[part];
    }
    target[parts[parts.length - 1]] = value;
  }
  return selected;
}
