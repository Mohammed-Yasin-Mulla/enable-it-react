
interface SpacerProps {
  height: number;
}

export default function Spacer(props: SpacerProps) {
  const { height } = props;

  return (
    <div
      style={{
        marginTop: `${height / 2}px`,
        marginBottom: `${height / 2}px`,
      }}
    ></div>
  );
}
