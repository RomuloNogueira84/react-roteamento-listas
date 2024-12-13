import React from 'react';

const posts = [
  { id: 1, title: 'Primeiro Post', content: 'Este é o conteúdo do primeiro post.' },
  { id: 2, title: 'Segundo Post', content: 'Conteúdo do segundo post, falando sobre React.' },
  { id: 3, title: 'Terceiro Post', content: 'Explorando mais funcionalidades do React Router.' },
  { id: 4, title: 'Quarto Post', content: 'Um post sobre listas em React.' },
  { id: 5, title: 'Quinto Post', content: 'O último post de exemplo para o blog!' },
];

const Home = () => {
  const showAlert = (content) => {
    alert(content);
  };

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <button onClick={() => showAlert(post.content)}>Ver Conteúdo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;