import React, { memo } from 'react';
import { AuthForm } from 'Components/Auth/AuthForm/AuthForm';

/**
 * Todo App の container
 */
export const TodoAppContainer = memo(() => {
  return (
    <>
      <AuthForm />
    </>
  );
});
