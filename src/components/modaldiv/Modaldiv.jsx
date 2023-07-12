import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import play from "../images/play.png"

const Modaldiv = () => {
  const style = {
    position: "absolute",
    top: "49%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 630,
    bgcolor: "none",
    border: "none",
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="play-btn">
        <Button onClick={handleOpen}>
          <img src={play} alt="" />
          <span className="play-text">PLAY TRAILER</span>
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <iframe width="560" height="309" src="https://www.youtube.com/embed/iuJDhFRDx9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Modaldiv;


