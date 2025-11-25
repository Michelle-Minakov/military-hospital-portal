function NewsWidget() {
  const [news, setNews] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const addNews = () => {
    // Перевірка авторизації
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("Ви повинні авторизуватися, щоб додати новину!");
      return;
    }

    if (title && text) {
      setNews([...news, { title, text, author: currentUser }]);
      setTitle('');
      setText('');
    } else {
      alert("Заповніть усі поля!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-2"
      />
      <textarea
        placeholder="Текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={addNews} className="btn btn-primary mb-3 w-100 fw-bold">
        Додати новину
      </button>

      <ul className="list-group">
        {news.map((n, i) => (
          <li key={i} className="list-group-item">
            <strong>{n.title}</strong>: {n.text}
            <br />
            <small className="text-muted">Автор: {n.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('react-root')).render(<NewsWidget />);