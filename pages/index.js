import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  // TODO Create a `todoList` React state hook and initialize to an empty array
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChange(event) {
    // TODO Implement the handle change function
    // It should set the item to the value in the input field
    setItem(event.target.value);
  }

  function onClick(event) {
    event.preventDefault();
    if (item) {
      // only add if item is not empty
      // add the item to the list
      const tempList = todoList;
      tempList.push(item);
      setTodoList(tempList);
      setItem(""); // clear the input
    }
  }

  const listItems = todoList.map((listItem, index) => (
    <li key={index} className="list-group-item">
      {listItem}
    </li>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>BAM Challenge 2021</title>
        <meta
          name="description"
          content="Blockchain At McGill 2021 Challenge"
        />
        <link rel="icon" href="/mcgill-university-coat-arms.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">BAM Challenge 2021!</a>
        </h1>

        <p className={styles.description}>What do I have to do today?</p>

        <div className="container">
          <form className="row g-3">
            <div className="col-10">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Item
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Finish this challenge"
                  aria-label="inputItem"
                  aria-describedby="basic-addon1"
                  value={item}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-2">
              <button
                aria-label="submit-button"
                // TODO Add the `btn-danger` class to the className
                // This will make the button red as expected.
                className="btn btn-danger"
                onClick={onClick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="list-group">{listItems}</div>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <Image
            src="/mcgill-university.svg"
            alt="McGill Logo"
            width={90}
            height={90}
          />
        </span>
      </footer>
    </div>
  );
}
