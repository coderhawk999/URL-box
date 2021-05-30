import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SearchCard = ({ description, tags, platform, title, info }) => {
  const [ans, setAns] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    let api = `https://api.stackexchange.com/2.2/answers/${info.accepted_answer_id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`;
    // axios.get(api).then((res) => {
    //   console.log(res.data);
    //   setAns(res.data.items);
    // });
  }, []);
  return (
    <div className="search-card">
      <p className="search-card__search-platform">{platform}</p>
      <p className="search-card__search-title">{title}</p>
      <p className="search-card__search-tags">
        {tags.length > 0
          ? tags.map((info, index) => {
              return `${info} `;
            })
          : ""}{" "}
      </p>
      <div className="search-card__description">
        <div dangerouslySetInnerHTML={{ __html: description }} />{" "}
      </div>
      <div className="search-card__buttons">
        <Link
          className={"button-white"}
          to="#"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show Top Answer
        </Link>
      </div>
      {show ? <div className="search-card__description">{}</div> : ""}
    </div>
  );
};

const GetAnswer = (answerId) => {
  const [ans, setAns] = useState([]);
  let api = `https://api.stackexchange.com/2.2/answers/${answerId}?order=desc&sort=activity&site=stackoverflow&filter=withbody`;
  axios.get(api).then((res) => {
    console.log(res.data);
    setAns(res.data.items);
  });

  return <div />;
};

export default SearchCard;
