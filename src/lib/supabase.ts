import { createClient } from "@supabase/supabase-js";

// ランタイム時にのみ初期化（ビルド時は env が未設定のため遅延評価）
let _client: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error("Supabase environment variables are not set");
    }
    _client = createClient(url, key);
  }
  return _client;
}

// 後方互換のための named export（既存コードがそのまま動く）
export const supabase = {
  from: (...args: Parameters<ReturnType<typeof createClient>["from"]>) =>
    getSupabase().from(...args),
  rpc: (...args: Parameters<ReturnType<typeof createClient>["rpc"]>) =>
    getSupabase().rpc(...args),
};
