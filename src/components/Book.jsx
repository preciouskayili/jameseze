import { ArrowBackIos } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WebViewer from "@pdftron/pdfjs-express-viewer";
import "./assets/css/book.css";
import BookData from "./data/books.json";
const Book = ({ match }) => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        licenseKey: "r7C3u5BIda3iTElCccoq",
        path: "/lib",
        initialDoc: `${BookData[match.params.id - 1].url}`,
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;

      documentViewer.addEventListener("documentLoaded", () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 100,
          Author: annotationManager.getCurrentUser(),
        });

        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, [match.params.id]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Navbar brand */}
          <div className="navbar-brand">
            <Link to="/books" className="mt-2 mt-lg-0 text-danger">
              <ArrowBackIos />
            </Link>
            {/* Navbar brand */}
            <Link
              to={`/book/${match.params.id}`}
              className="navbar-brand mt-2 mt-lg-0 text-danger"
            >
              {BookData[match.params.id - 1].name}
            </Link>
          </div>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}

      <div className="webviewer" style={{ height: "100vh" }} ref={viewer}></div>
    </div>
  );
};

export default Book;
