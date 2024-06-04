/* eslint-disable react/prop-types */
export default function Introduction(props) {
  return (
    <>
      <header>
        <h3>Intoduction</h3>
      </header>
      <section>
        <p>This is paragraph of introduction and my name is {props.name}</p>
      </section>
    </>
  );
}
