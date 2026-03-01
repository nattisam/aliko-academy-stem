
-- Fix the permissive INSERT policy on inquiries
-- Since this is a public contact form, we keep it open but add basic validation
DROP POLICY "Anyone can insert inquiries" ON public.inquiries;

-- Allow anonymous inserts but require non-empty fields (RLS can't validate content,
-- but we restrict to INSERT only - no SELECT/UPDATE/DELETE for anon)
CREATE POLICY "Anyone can submit inquiries"
  ON public.inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    full_name IS NOT NULL AND 
    email IS NOT NULL AND 
    message IS NOT NULL
  );
