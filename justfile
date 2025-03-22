serve:
    pnpm tauri dev

build:
    pnpm tauri build

fmt:
    npx prettier --write **/**/*.svelte
    npx prettier --write **/**/*.ts
