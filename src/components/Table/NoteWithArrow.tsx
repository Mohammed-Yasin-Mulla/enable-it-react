import Arrow from "../../assets/SimpleArrow.svg";

export function NoteWithArrow() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: -180,
          top: -65,
        }}
      >
        <p>
          <b>📝 Note:</b> Click on the <br /> header to sort the data <br />
          in ascending order.
        </p>
        <img src={Arrow} alt="arrow mark" />
      </div>
      <div
        style={{
          position: "absolute",
          left: -230,
          top: 200,
          width: 250,
        }}
      >
        <b>📝 Note:</b> Click on remove row
        <b />
        <img src={Arrow} alt="arrow mark" />
      </div>
    </>
  );
}
