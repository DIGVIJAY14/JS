//JavaScript starts by executing code in the global execution context.
//When it encounters a function call, it goes inside the function, creates a new context, and runs that function.
//After the function finishes, JavaScript returns to the global context to continue executing the remaining code.

// THIS (with global ec)

// When 'this' is used globally, it's just a reference to the global object, which holds all the global variables and functions. It helps JavaScript "access" the global environment to execute code, but doesn't create a scope. Scopes are created inside functions or blocks, where 'this' behaves differently based on the context.
