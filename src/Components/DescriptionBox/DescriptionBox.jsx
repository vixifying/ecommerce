import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (143)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          similique velit nisi, corporis tenetur dolores est error rerum saepe
          enim ullam sint voluptatum provident itaque?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          similique velit nisi, corporis tenetur dolores est error rerum saepe
          enim ullam sint voluptatum provident itaque?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          similique velit nisi, corporis tenetur dolores est error rerum saepe
          enim ullam sint voluptatum provident itaque?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
