import React from 'react';
import serialize from 'form-serialize';

function TodoCreator({ onSubmit }) {
  let form;
  let input;

  function handleSubmit(e) {
    e.preventDefault();
    const { title } = serialize(form, { hash: true });

    if (!title || !title.length) return;

    onSubmit(title);
    input.value = '';
  }

  console.log('<TodoCreator />');

  return (
    <form
      ref={node => {form = node}}
      onSubmit={handleSubmit}
      className="b-input-creator"
    >
      <input
        ref={node => { input = node }}
        className="b-input-creator__title"
        type="text"
        name="title"
        placeholder="Enter todo title"
      />
      <input
        className="b-input-creator__submit"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default TodoCreator;
