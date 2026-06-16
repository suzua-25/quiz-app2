import { createClient } from '@supabase/supabase-js';

// ★★★ ここに先ほどコピーした情報を貼り付け ★★★
const supabaseUrl = 'https://wjluszjtvvcyizyuvnvm.supabase.co';
const supabaseAnonKey = 'sb_publishable_DTB57o3FD56-c8iQ0ufSsg_A-OE7jpN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
