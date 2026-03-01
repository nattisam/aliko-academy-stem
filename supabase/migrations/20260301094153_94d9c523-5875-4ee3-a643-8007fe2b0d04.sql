-- Drop the old check constraint and add one that matches the actual program data
ALTER TABLE public.programs DROP CONSTRAINT IF EXISTS programs_level_check;
ALTER TABLE public.programs ADD CONSTRAINT programs_level_check CHECK (level IN ('Beginner', 'Intermediate', 'Professional', 'Advanced'));