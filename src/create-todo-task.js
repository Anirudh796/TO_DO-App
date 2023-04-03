import React from 'react';


function Todoform(){
    return(
        <div>
            <form >
              <label>Title</label>
              <input type="text" name="title" placeholder="Title" maxlength="20" required/>
              <label>Description</label>
              <input type="text" name="description" placeholder="Description" maxlength="100"/>
              <label>Due Date</label>
              <input type="date" name="duedate" required/>
              <label>Priority</label>
              <select name="priority" required>
                <option value="high">High</option>
                <option selected value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

            </form>
        </div>
    )
}

export default Todoform;