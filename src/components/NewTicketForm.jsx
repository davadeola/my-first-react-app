import React from "react";

function NewTicketForm(){
  return(
    <div>
      <form>
        <input
          type="text"
          id="names"
          placeholder="Pair Names"
        />

        <input
          type="text"
          id="location"
          placeholder="Loactaion"
        />

        <textarea
          id="issue"
          placeholder="Describe your issue"
        />

        <button type="submit">Help</button>
      </form>
    </div>
  );
}

export default NewTicketForm;