// One icon system: 24px grid, round-capped 2px line, ink colour by currentColor.

const PATHS = {
  home: 'M3 11 L12 3 L21 11 M5 10 V21 H19 V10 M10 21 V14 H14 V21',
  box: 'M3 8 H21 V21 H3 Z M2 3 H22 V8 H2 Z M10 12.5 H14',
  doc: 'M6 2 H15 L19 6 V22 H6 Z M14 2 V7 H19 M9 12 H16 M9 16 H16',
  phone: 'M7 3 H10.5 L12 8 L9.5 9.7 C10.7 12.2 11.8 13.3 14.3 14.5 L16 12 L21 13.5 V18 C21 19.7 19.7 21 18 21 C10 21 3 14 3 7 C3 4.7 4.7 3 7 3 Z',
  pen: 'M4 20 L5 15 L16 4 L20 8 L9 19 Z M14 6 L18 10',
  heart: 'M12 21 L4 13 C2 10.5 3 6 7 6 C9.5 6 11 7.5 12 9 C13 7.5 14.5 6 17 6 C21 6 22 10.5 20 13 Z',
  info: 'M12 3 A9 9 0 1 0 12.01 3 Z M12 11 V17 M12 7 V8',
  arrow: 'M4 12 H20 M14 6 L20 12 L14 18',
  back: 'M20 12 H4 M10 6 L4 12 L10 18',
  chevron: 'M9 5 L16 12 L9 19',
  x: 'M5 5 L19 19 M19 5 L5 19',
  check: 'M4 12.5 L10 18.5 L20 6',
  lock: 'M5 11 H19 V21 H5 Z M8 11 V7 A4 4 0 0 1 16 7 V11 M12 15 V17',
  plus: 'M12 4 V20 M4 12 H20',
  key: 'M4 12 A4 4 0 1 0 12 12 A4 4 0 1 0 4 12 Z M12 12 H21 M18 12 V16 M21 12 V15',
  leaf: 'M4 20 C4 10 10 4 20 4 C20 14 14 20 4 20 Z M4 20 C7 17 10 14 14 9',
} as const;

export type IconKey = keyof typeof PATHS;

export function Icon({ name, size = 24 }: { name: IconKey; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
