import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => onIncrement(habit)}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={() => onDecrement(habit)}
      >
        <i class="fa-solid fa-minus"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={() => onDelete(habit)}
      >
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </li>
  );
});

export default Habit;