import tseslint from 'typescript-eslint';

// Minimal, dependency-light lint for a single-page static site. Type-aware
// linting is intentionally omitted — `tsc --noEmit` covers types.
export default tseslint.config({ ignores: ['dist'] }, ...tseslint.configs.recommended);
