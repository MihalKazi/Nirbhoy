import Link from 'next/link';
import { Icon, type IconKey } from './Icons';

export type Seg = { on: boolean; part?: boolean; tone?: 'rose' | 'steel' | 'plum' | 'amber' | 'leaf' | 'ink' };

// A single status dot: filled = done, dashed ring = in progress, empty ring =
// not started. Never colour alone — shape carries the state too.
export function StatusDot({ seg }: { seg: Seg }) {
  return (
    <span className={`dot${seg.on ? ` on c-${seg.tone ?? 'leaf'}` : seg.part ? ` part c-${seg.tone ?? 'leaf'}` : ''}`} aria-hidden="true">
      {seg.on && <Icon name="check" />}
    </span>
  );
}

export function Row({
  name,
  hint,
  data,
  icon,
  status,
}: {
  name: React.ReactNode;
  hint?: React.ReactNode;
  data?: React.ReactNode;
  icon?: IconKey;
  status?: Seg;
}) {
  return (
    <>
      {icon ? (
        <span className="row-icon">
          <Icon name={icon} />
        </span>
      ) : status ? (
        <StatusDot seg={status} />
      ) : (
        <span />
      )}
      <span className="row-text">
        <span className="row-name">{name}</span>
        {hint && <span className="row-hint">{hint}</span>}
      </span>
      {data && <span className="row-data">{data}</span>}
      <span className="row-chevron">
        <Icon name="chevron" size={20} />
      </span>
    </>
  );
}

export function RowLink({
  href,
  className,
  ...row
}: {
  href: string;
  className?: string;
  name: React.ReactNode;
  hint?: React.ReactNode;
  data?: React.ReactNode;
  icon?: IconKey;
  status?: Seg;
}) {
  return (
    <Link href={href} className={`row-card${className ? ` ${className}` : ''}`}>
      <span className="row-face">
        <Row {...row} />
      </span>
    </Link>
  );
}
