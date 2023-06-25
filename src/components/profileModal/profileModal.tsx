import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }: any) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Your info</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            />

            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />

            <input
              type="text"
              className="infoInput"
              name="worksAT"
              placeholder="Works at"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              className="infoInput"
              name="livesIN"
              placeholder="LIves in"
            />

            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />

            <input
              type="text"
              className="infoInput"
              placeholder="RelationShip Status"
            />
          </div>
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
