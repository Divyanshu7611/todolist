"use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface Todo {
//   todoTask: string;
// }

// export default function MyTodo() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get("/api/todos/getTodo");
//       if (response.status !== 200) {
//         throw new Error("Failed to fetch todos");
//       }
//       console.log(response);
//       setTodos(response.data.data);
//       console.log(todos);
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };
//   useEffect(() => {
//     console.log("todos:", todos);
//   }, [todos]);
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTodo(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/todos/addTodo", {
//         todoTask: newTodo,
//       });
//       if (response.status === 200) {
//         fetchTodos();
//         setNewTodo("");
//       }
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={handleInputChange}
//           placeholder="Enter todo..."
//           className="text-black"
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo.todoTask}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface Todo {
//   _id: string;
//   todoTask: string;
// }

// export default function MyTodo() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
//   const [editingTodoText, setEditingTodoText] = useState("");

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get("/api/todos/getTodo");
//       if (response.status !== 200) {
//         throw new Error("Failed to fetch todos");
//       }
//       setTodos(response.data.data);
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTodo(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/todos/addTodo", {
//         todoTask: newTodo,
//       });
//       if (response.status === 200) {
//         fetchTodos();
//         setNewTodo("");
//       }
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   const handleDelete = async (todoId: string) => {
//     try {
//       const response = await axios.post(`/api/todos/deleteTodo?id=${todoId}`);
//       if (response.status === 200) {
//         fetchTodos();
//       }
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };

//   const handleUpdate = async (todoId: string) => {
//     try {
//       const response = await axios.post(`/api/todos/updateTodo?id=${todoId}`, {
//         todoTask: editingTodoText,
//       });
//       if (response.status === 200) {
//         fetchTodos();
//         setEditingTodoId(null);
//         setEditingTodoText("");
//       }
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   const handleEdit = (todoId: string, todoTask: string) => {
//     setEditingTodoId(todoId);
//     setEditingTodoText(todoTask);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         maxWidth: "400px",
//         margin: "0 auto",
//       }}
//     >
//       <h1 className="text-center font-bold text-4xl mt-20 mb-10">
//         Divyanshu Todo's
//       </h1>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={handleInputChange}
//           placeholder="Enter todo..."
//           style={{
//             padding: "8px",
//             marginRight: "8px",
//             width: "60%",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//             color: "black",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "8px 16px",
//             borderRadius: "4px",
//             border: "none",
//             background: "#007bff",
//             color: "#fff",
//             cursor: "pointer",
//           }}
//         >
//           Add Todo
//         </button>
//       </form>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {todos.map((todo) => (
//           <li
//             key={todo._id}
//             style={{
//               marginBottom: "8px",
//               padding: "8px",
//               background: "#f4f4f4",
//               borderRadius: "4px",
//               color: "black",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             {editingTodoId === todo._id ? (
//               <input
//                 type="text"
//                 value={editingTodoText}
//                 onChange={(e) => setEditingTodoText(e.target.value)}
//                 style={{ flex: 1, marginRight: "8px" }}
//               />
//             ) : (
//               <span>{todo.todoTask}</span>
//             )}
//             <div>
//               {editingTodoId === todo._id ? (
//                 <>
//                   <button
//                     onClick={() => handleUpdate(todo._id)}
//                     style={{
//                       marginRight: "4px",
//                       background: "#28a745",
//                       color: "#fff",
//                       border: "none",
//                       padding: "4px 8px",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => {
//                       setEditingTodoId(null);
//                       setEditingTodoText("");
//                     }}
//                     style={{
//                       background: "#dc3545",
//                       color: "#fff",
//                       border: "none",
//                       padding: "4px 8px",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => handleEdit(todo._id, todo.todoTask)}
//                     style={{
//                       marginRight: "4px",
//                       background: "#007bff",
//                       color: "#fff",
//                       border: "none",
//                       padding: "4px 8px",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(todo._id)}
//                     style={{
//                       background: "#dc3545",
//                       color: "#fff",
//                       border: "none",
//                       padding: "4px 8px",
//                       borderRadius: "4px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaCheck, FaSpinner } from "react-icons/fa";

// import "./MyTodo.css";

interface Todo {
  _id: string;
  todoTask: string;
}

export default function MyTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingTodoText, setEditingTodoText] = useState("");

  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true); // Set loading to true while fetching todos
      const response = await axios.get("/api/todos/getTodo");
      if (response.status !== 200) {
        throw new Error("Failed to fetch todos");
      }
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching todos
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true while adding todo

      const response = await axios.post("/api/todos/addTodo", {
        todoTask: newTodo,
        done: status,
      });
      if (response.status === 200) {
        fetchTodos();
        setNewTodo("");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    } finally {
      setLoading(false); // Set loading to false after adding todo
    }
  };

  const handleDelete = async (todoId: string) => {
    try {
      setLoading(true); // Set loading to true while deleting todo
      const response = await axios.post(`/api/todos/deleteTodo?id=${todoId}`);
      if (response.status === 200) {
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    } finally {
      setLoading(false); // Set loading to false after deleting todo
    }
  };

  const handleUpdate = async (todoId: string) => {
    try {
      setLoading(true); // Set loading to true while updating todo
      const response = await axios.post(`/api/todos/updateTodo?id=${todoId}`, {
        todoTask: editingTodoText,
      });
      if (response.status === 200) {
        fetchTodos();
        setEditingTodoId(null);
        setEditingTodoText("");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setLoading(false); // Set loading to false after updating todo
    }
  };

  const handleEdit = (todoId: string, todoTask: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoTask);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title mx-auto">My Todo's</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter todo..."
          className="todo-input"
        />
        <button type="submit" className="todo-button" disabled={loading}>
          {loading ? <FaSpinner className="spinner-icon" /> : "Add Todo"}
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            {editingTodoId === todo._id ? (
              <>
                <input
                  type="text"
                  value={editingTodoText}
                  onChange={(e) => setEditingTodoText(e.target.value)}
                  className="edit-input"
                />
                <button
                  onClick={() => handleUpdate(todo._id)}
                  className="edit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <FaSpinner className="spinner-icon" />
                  ) : (
                    <FaCheck />
                  )}
                </button>
                <button
                  onClick={() => {
                    setEditingTodoId(null);
                    setEditingTodoText("");
                  }}
                  className="cancel-button"
                  disabled={loading}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{todo.todoTask}</span>
                <div className="button-container">
                  <button
                    onClick={() => handleEdit(todo._id, todo.todoTask)}
                    className="edit-icon-button"
                    disabled={loading}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(todo._id)}
                    className="delete-icon-button"
                    disabled={loading}
                  >
                    <FaTrash />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
