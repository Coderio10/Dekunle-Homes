export default function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  return (
    <span>
      {target}
      {suffix}
    </span>
  );
}
