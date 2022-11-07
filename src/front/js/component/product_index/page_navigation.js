import React from "react";
import "../../../styles/archive_recommendation/page_navigation.css";

const PageNavigation = ({ numPages, curPage, setCurPage }) => {
  const makePageArray = () => {
    let pageArray = [];
    for (let i = 0; i < numPages; i++) {
      pageArray.push(i + 1);
    }
    return pageArray;
  };

  const updatePageNumber = (e) => {
    setCurPage(e.target.value);
  };

  return (
    <ul>
      {makePageArray().map((pageNum) => (
        <li onClick={(e) => updatePageNumber(e)} value={pageNum - 1}>
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default PageNavigation;
