import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "@material-ui/core";

export default function Search({searchResults, handleChange, loadContent}) {
  return (
    <div>
      <div className="wikisearch">
        <TextField
          name="wiki"
          label="Search on WikiPedia"
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="results">
        {searchResults.length ? (
          searchResults.map(e => (
            <div>
              <Typography gutterBottom onClick={() => loadContent(e.name)}>
                {e.name}
                <Link color="secondary" href={e.url}>
                  {e.url}
                </Link>
              </Typography>
            </div>
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
