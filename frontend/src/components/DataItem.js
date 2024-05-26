import React, { useState } from 'react';
import { updateData, deleteData } from '../services/api';

const DataItem = ({ item, fetchData, token }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ title: item.title, content: item.content });

  const handleUpdate = async () => {
    try {
      await updateData(item._id, editedData, token);
      setIsEditing(false);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteData(item._id, token);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedData.title}
            onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
          />
          <input
            type="text"
            value={editedData.content}
            onChange={(e) => setEditedData({ ...editedData, content: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DataItem;
