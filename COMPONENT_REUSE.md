# Komponens Újrahasznosítás - Megoldások

Ha vannak már létező komponensek egy másik repoban (pl. chat room view, gombok, szövegek), és szeretnéd újrahasználni őket, itt vannak a legjobb megoldások:

## 1. **Monorepo megoldás (Ajánlott) 🏆**

A legjobb megoldás egy monorepo struktúra, ahol mindkét projekt ugyanabban a repoban van.

### Turborepo használata:

```bash
# Projekt struktúra:
coauthors-monorepo/
├── apps/
│   ├── landing-page/          # Ez a projekt
│   └── main-app/              # A másik repo (chat room, stb.)
├── packages/
│   └── shared-components/     # Közös komponensek
│       ├── src/
│       │   ├── ChatRoom.tsx
│       │   ├── Button.tsx
│       │   └── index.ts
│       └── package.json
└── turbo.json
```

**Előnyök:**
- ✅ TypeScript típusok megosztva
- ✅ Gyors build (Turborepo cache)
- ✅ Könnyű importálás
- ✅ Egy helyen van minden kód

**Telepítés:**
```bash
npm install -g turbo
npx create-turbo@latest
```

## 2. **Shared NPM Package**

Ha a projektek külön repokban vannak, hozz létre egy shared package-et.

### Lépések:

1. **Hozz létre egy új repot** `@coauthors/shared-components` néven
2. **Package struktúra:**
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

4. **Használat a landing page-ben:**
```bash
npm install @coauthors/shared-components
```

```tsx
import { ChatRoom, Button } from '@coauthors/shared-components';
```

**Publikálás:**
- Privát npm registry (GitHub Packages, npm private)
- Vagy git URL: `npm install git+https://github.com/coauthors/shared-components.git`

## 3. **Git Submodule**

Ha nem akarsz npm package-et, használhatod git submodule-t.

```bash
# A landing page repoban:
git submodule add https://github.com/coauthors/shared-components.git packages/shared
```

**Használat:**
```tsx
import { ChatRoom } from '../packages/shared/src/ChatRoom';
```

**Figyelem:** Nehezebb kezelni, de működik.

## 4. **Symlink megoldás (Development)**

Fejlesztés közben használhatsz symlinket:

```bash
# A shared components repoban:
cd /path/to/shared-components
npm link

# A landing page repoban:
cd /path/to/landing-page
npm link @coauthors/shared-components
```

## 5. **Példa: ChatRoom komponens újrahasznosítása**

Tegyük fel, hogy van egy `ChatRoom` komponens a másik repoban:

### Shared package-ben:
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

### Landing page-ben:
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

## Ajánlás

**Production projekthez:** Monorepo (Turborepo) vagy Shared NPM Package

**Gyors prototípushoz:** Git Submodule vagy Symlink

## Következő lépések

1. Döntsd el, melyik megoldás illik a projektedhez
2. Ha monorepo: telepítsd a Turborepo-t
3. Ha shared package: hozd létre a package-et és publikáld
4. Importáld a komponenseket a landing page-be

Segíthetek beállítani bármelyik megoldást! 🚀
