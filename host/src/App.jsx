import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Counter from "remote/Counter";
import counterMounter from "vue_remote/counterMounter";
import "./index.scss";

const App = () => {
  const ref = useRef(null);
  useEffect(() => {
    counterMounter(ref.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <p>This counter component from a remote app</p>
      <Counter />
      <p>This is a vue app</p>
      <div ref={ref} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
