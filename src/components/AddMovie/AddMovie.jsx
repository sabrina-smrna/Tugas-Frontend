import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./Addmovie.module.css";

function AddMovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });

  // Gunakan satu objek error (tanpa 's')
  const [error, setError] = useState({
    title: false,
    date: false,
  });

  const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error saat user mulai mengetik
    setError({
      ...error,
      [name]: false,
    });
  }

  function validate() {
    const newError = {
      title: formData.title === "",
      date: formData.date === "",
    };

    setError(newError);

    // Jika semua false (tidak ada error), return true
    return !Object.values(newError).includes(true);
  }

  function addMovie() {
    const movie = {
      id: crypto.randomUUID(), // Generate unique id
      title: formData.title,
      year: formData.date,
      type: "Movie",
      poster: "https://picsum.photos/200/300?grayscale",
    };

    setMovies([...movies, movie]);

    // Clear input setelah submit
    setFormData({ title: "", date: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          id="title"
          type="text"
          value={formData.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        {error.title && <Alert>Judul Movie Wajib Diisi</Alert>}

        <input
          className={styles.input_form}
          id="date"
          type="text"
          value={formData.date}
          name="date"
          placeholder="Year"
          onChange={handleChange}
        />
        {error.date && <Alert>Tahun Wajib Diisi</Alert>}

        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
