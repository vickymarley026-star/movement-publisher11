// STUB: replace with your real backend. The original used the Base44 SDK.
export const base44 = {
  auth: { isAuthenticated: async () => false },
  functions: { invoke: async (name, payload) => { console.log("invoke", name, payload); return { ok: true }; } },
};
