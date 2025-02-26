// src/components/Comments.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../context/CommentsDB';

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    loadComments();
  }, [movieId]);

  const loadComments = async () => {
    try {
      const allComments = await db.comments.where({ movieId: Number(movieId) }).toArray();
      setComments(allComments);
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires', error);
    }
  };

  const handleAddComment = async () => {
    if (!text.trim()) return;
    await db.comments.add({
      movieId: Number(movieId),
      text,
      date: new Date().toISOString(),
    });
    setText('');
    loadComments();
  };

  return (
    <div>
      <h3>Commentaires</h3>
      {comments.map((c) => (
        <div key={c.id} style={{ border: '1px solid #ccc', margin: '8px 0', padding: '8px' }}>
          <p>{c.text}</p>
          <small>{new Date(c.date).toLocaleString()}</small>
        </div>
      ))}
      <textarea
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Écrivez un commentaire..."
      />
      <button onClick={handleAddComment}>Ajouter</button>
    </div>
  );
};

export default Comments;
