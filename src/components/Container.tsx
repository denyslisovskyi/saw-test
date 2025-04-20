type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children }: Props) {
  return <div>{children}</div>;
}
