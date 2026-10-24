export function editDistance(a, b) {
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1)
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    previous = current;
  }
  return previous[b.length];
}
export function suggestFields(path, allowed) {
  const normalize = (s) =>
    s
      .slice(0, 256)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
  const leaf = (s) => normalize(s.split(".").pop());
  return [...new Set(allowed)]
    .map((key) => ({
      key,
      distance: editDistance(normalize(path), normalize(key)),
      leafDistance: editDistance(leaf(path), leaf(key)),
    }))
    .sort(
      (a, b) =>
        a.leafDistance - b.leafDistance ||
        a.distance - b.distance ||
        a.key.localeCompare(b.key),
    )
    .slice(0, 3);
}
export function reviewedResult(accepted, decisions, allowed) {
  const data = JSON.parse(JSON.stringify(accepted || {}));
  const provenance = {};
  for (const [path, decision] of Object.entries(decisions)) {
    if (
      !allowed.includes(path) ||
      path
        .split(".")
        .some((part) =>
          ["__proto__", "prototype", "constructor"].includes(part),
        )
    )
      continue;
    const parts = path.split(".");
    let node = data;
    for (const part of parts.slice(0, -1)) {
      if (
        !node[part] ||
        typeof node[part] !== "object" ||
        Array.isArray(node[part])
      )
        node[part] = {};
      node = node[part];
    }
    node[parts[parts.length - 1]] = decision.value;
    provenance[path] = {
      review_status: "user_accepted",
      source_check: "unverified",
      original_model_key: decision.originalPath,
    };
  }
  return { data, field_reviews: provenance, review_required: true };
}
