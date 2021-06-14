import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../assets/svgIcons/svg";
import FilterPop from "../filter/filter";
import AddLinkModal from "../modals/addLinkModal";
const LinkInputBar = (props) => {
  const [fpop, setFpop] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    title: "Link Title",
    link: "",
    color: "blue",
    tags: [],
  });

  return (
    <div className="linkInput">
      <div className="linkInput-bar-container">
        <AddLinkModal
          open={open}
          title={"Add Info"}
          onClose={() => {
            setOpen(false);
          }}
          state={state}
          setState={setState}
          submit={props.onAdd}
        />
        <Link
          className="button-primary"
          id="filter"
          style={{ flex: "0.08" }}
          onClick={() => {
            setFpop(!fpop);
          }}
        >
          <Filter size={16} color={"white"} />
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            Filter
          </p>
        </Link>

        <div className="linkInput-bar">
          <input
            type="linkInput"
            className="linkInput-bar-input"
            placeholder="Paste URL"
            value={state.link}
            onChange={(e) => {
              setState({ ...state, [`link`]: e.target.value });
            }}
          />
        </div>

        <Link
          className={"button-primary"}
          style={{ flex: "0.1", fontSize: "1.3rem" }}
          onClick={() => {
            setOpen(!open);
          }}
          id="addurl"
        >
          Add URL
        </Link>
        <div className="linkInput-bar-container-buttons">
          <Link
            className="button-primary"
            style={{ flex: "0.1", backgroundColor: "#4864e6" }}
            onClick={() => {
              setFpop(!fpop);
            }}
          >
            <Filter size={16} color={"white"} />
          </Link>
          <Link
            className={"button-primary"}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Add URL
          </Link>
        </div>
      </div>
      {fpop ? (
        <FilterPop
          onApply={props.handleTagsFilter}
          open={fpop}
          AppliedTags={props.AppliedTags}
          clearFilter={props.clearFilter}
          onClose={() => {
            setFpop(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default LinkInputBar;
