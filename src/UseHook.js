import React, { useState, useEffect } from "react";
import axios from "axios";

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return { value, onChange };
};

const useFetch = url => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async url => {
    try {
      const { data } = await axios.get(url);
      // throw Error();
      setPayload(data);
    } catch {
      setError("Error!!!");
    } finally {
      setLoading(false);
    }
  };

  // componentDidMount
  useEffect(() => {
    callUrl(url);
  }, []);

  return { payload, loading, error };
};

const UseHook = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  // componentDidMount, componentDidUpdate
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  const name = useInput("");
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");

  return (
    <div>
      <h3>use hook</h3>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        decrement
      </button>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={updateEmail}
        />
        <p>{email}</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Whats your name" {...name} />
      </div>
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} width="200" alt="" />}
    </div>
  );
};

export default UseHook;
