interface Props {
  children: React.ReactNode;
}

export default function MenuPageIcon({ children }: Props) {
  return <div className="my-4 text-5xl">{children}</div>;
}
