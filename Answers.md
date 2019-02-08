1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
    - Array.concat(), Array.map(), Array.filter(), Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions are what describes whats happening, reducers hold the logic, store passes down functions and holds the state of the application

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state shows the state of the whole application, Component state shows the state of just that component

4.  What is middleware?
    - a function that allows you to controll the flow of what's being ran

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - redux-thunk is a middleware that allows you to make the flow asynchronous. It lets us make api calls

6.  Which `react-redux` method links up our `components` with our `redux store`?
    - connect
