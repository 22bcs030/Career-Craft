export function pingBackend() {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  fetch(backendUrl, { method: 'GET' })
    .then(() => {/* success, do nothing */})
    .catch(() => {/* ignore errors */});
} 