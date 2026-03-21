# Component reuse — options

If you already have components in another repo (e.g. chat room view, buttons, copy) and want to reuse them, here are solid approaches:

## 1. **Monorepo (recommended)**

The cleanest setup is a monorepo where both projects live in one repository.

### Using Turborepo:

```bash
# Example layout:
coauthors-monorepo/
├── apps/
│   ├── landing-page/          # This project
│   └── main-app/              # The other app (chat room, etc.)
├── packages/
│   └── shared-components/     # Shared components
│       ├── src/
│       │   ├── ChatRoom.tsx
│       │   ├── Button.tsx
│       │   └── index.ts
│       └── package.json
└── turbo.json
```

**Benefits:**
- ✅ Shared TypeScript types
- ✅ Fast builds (Turborepo cache)
- ✅ Simple imports
- ✅ Single place for shared code

**Setup:**
```bash
npm install -g turbo
npx create-turbo@latest
```

## 2. **Shared npm package**

If projects live in separate repos, publish (or consume) a shared package.

### Steps:

1. **Create a repo** e.g. `@coauthors/shared-components`
2. **Package layout:**
```
shared-components/
├── src/
│   ├── ChatRoom.tsx
│   ├── Button.tsx
│   └── index.ts
├── package.json
└── tsconfig.json
```

3. **package.json:**
```json
{
  "name": "@coauthors/shared-components",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  }
}
```

4. **Use on the landing page:**
```bash
npm install @coauthors/shared-components
```

```tsx
import { ChatRoom, Button } from '@coauthors/shared-components';
```

**Publishing:**
- Private registry (GitHub Packages, npm private)
- Or git URL: `npm install git+https://github.com/coauthors/shared-components.git`

## 3. **Git submodule**

If you don’t want an npm package, you can use a git submodule.

```bash
# In the landing page repo:
git submodule add https://github.com/coauthors/shared-components.git packages/shared
```

**Usage:**
```tsx
import { ChatRoom } from '../packages/shared/src/ChatRoom';
```

**Note:** Harder to maintain, but it works.

## 4. **Symlink (development)**

During local development you can use `npm link`:

```bash
# In the shared-components repo:
cd /path/to/shared-components
npm link

# In the landing page repo:
cd /path/to/landing-page
npm link @coauthors/shared-components
```

## 5. **Example: reusing a `ChatRoom` component**

Suppose `ChatRoom` lives in the other repo.

### In the shared package:
```tsx
// packages/shared-components/src/ChatRoom.tsx
export function ChatRoom({ roomId }: { roomId: string }) {
  return (
    <div className="chat-room">
      {/* Chat room UI */}
    </div>
  );
}
```

### On the landing page:
```tsx
// components/hero.tsx
import { ChatRoom } from '@coauthors/shared-components';

export function Hero() {
  return (
    <section>
      {/* ... */}
      <div className="w-[578px] h-[494px]">
        <ChatRoom roomId="preview" />
      </div>
    </section>
  );
}
```

## Recommendation

**Production:** Monorepo (Turborepo) or shared npm package

**Quick prototype:** Git submodule or symlink

## Next steps

1. Pick the approach that fits your workflow
2. Monorepo: install Turborepo
3. Shared package: create the package and publish
4. Import components into the landing page

You can wire up any of these paths as needed.
