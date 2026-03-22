# Shop Hub (Vite + React)

React e-commerce website built with Vite.

## Что внутри

- React + Vite
- SCSS (в т.ч. CSS Modules)
- PostCSS: `px → rem` через `postcss-pxtorem` (+ `autoprefixer`)
- Алиас `@` → `src`
- ESLint (flat config) + сортировка импортов (`eslint-plugin-simple-import-sort`)
- Stylelint (SCSS) + порядок свойств (`stylelint-order`)
- Prettier
- Husky + lint-staged (pre-commit)
- GitHub Actions CI
- `scripts/convert-fonts.py` (ttf/otf → woff + woff2)

## Старт

```bash
npm i
npm run dev
```

## Линтеры/форматирование

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:fix
```

## Шрифты

1. Положи `.ttf`/`.otf` в `src/assets/fonts/`
2. Установи Python-зависимости:

```bash
py -3 -m pip install -r scripts/requirements.txt
```

3. Конвертация:

```bash
npm run fonts:convert
```
