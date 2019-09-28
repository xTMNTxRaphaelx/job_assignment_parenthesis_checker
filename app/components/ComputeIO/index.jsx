/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of reserved characters:
 *     1. Opening Character, "^"
 *     2. Closing Character, "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - Likewise, whenever a Closing Character appears, means a corresponding
 *     Opening Character must have appeared previously.
 *     - It should handle nesting, so "^^$$" should return `true`.
 *     - It should ignore other characters that is not "^" or "$".
 *   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$$^" => false
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */
import React, { useState } from 'react';

export function isClosed(str = '') {
  const stack = [];
  const OPENING_CHARACTER = '^';
  const strWithReserveChars = str.replace(/[^-\^\$]+/g, '');
  for (let i = 0; i < strWithReserveChars.length; i++) {
    const char = strWithReserveChars[i];
    if (char === OPENING_CHARACTER) stack.push(char);
    else {
      if (stack.pop() !== OPENING_CHARACTER) return false;
    }
  }
  return stack.length === 0;
}

export function Input(props) {
  // const [text, setText] = useState('');
  // function onInputKeyPress(event) {
  //   const code = event.keyCode || event.which;
  //   if (code === 13) triggerIsClosed();
  // }
  return (
    <input
      type="text"
      value="aloha"
      // onChange={e => setText(e.target.value)}
      // onKeyPress={onInputKeyPress}
    />
  );
}

export function Button(props) {
  return <button onClick={props.triggerIsClosed} />;
}

export function Output(props) {
  return <div />;
}

export class ComputeIO extends React.Component {
  render() {
    return (
      <section>
        <Input />
        <Button />
        <Output />
      </section>
    );
  }
}
